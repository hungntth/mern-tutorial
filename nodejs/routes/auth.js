const express = require("express");
const Account = require("../app/models/Account");
const router = express.Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const emailvalidator = require("email-validator");

router.post("/register", async (req, res) => {
    try {
        const acc = await Account.findOne({ email: req.body.email });
        if (acc) {
            res.status(400).json("Account already exists");
            return;
        }
        if (emailvalidator.validate(req.body.email)) {
            const newAccount = await new Account({
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
            }).save();
            const accessToken = jwt.sign({ id: newAccount._id }, process.env.SECRET_KEY, { expiresIn: "5d" })
            res.json({ newAccount, token: accessToken });
        } else {
            res.status(400).json('Invalid email format.');
        }

    } catch (err) {
        res.send(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const acc = await Account.findOne({ email: req.body.email });
        if (!acc) {
            res.status(401).json("Wrong email");
            return;
        }

        const bytes = CryptoJS.AES.decrypt(acc.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            res.status(401).json("Wrong password");
            return;
        }
        const accessToken = jwt.sign({ id: acc._id }, process.env.SECRET_KEY, { expiresIn: "5d" })
        const { password, ...info } = acc._doc
        res.status(200).json({ ...info, token: accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;