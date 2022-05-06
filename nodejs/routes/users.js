const express = require("express");
const User = require("../app/models/User");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.send(user);
    } catch (err) {
        res.send(err);
    }
});

router.get("/", async (req, res) => {
    try {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 5;
        const start = limit * (page - 1);
        const sort = req.query.sort || '-createdAt'
        const user = await User.find().limit(limit).skip(start).sort(sort);
        res.send(user);
    } catch (err) {
        res.send(err);
    }
});

router.get("/count", async (req, res) => {
    try {
        const countUser = await User.find()
        res.json(countUser.length);
    } catch (err) {
        res.send(err);
    }
});



module.exports = router;