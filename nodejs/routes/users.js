const express = require("express");
const User = require("../app/models/user");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const user = await User.find();
        res.send(user);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;