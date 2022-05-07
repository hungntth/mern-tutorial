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
        const per_page = 5;
        const sort = req.query.sort || '-createdAt'
        const skip = (page - 1) * per_page;
        const user = await User.find().limit(per_page).skip(skip).sort(sort);
        const totalUser = await User.find();
        const total = totalUser.length;
        const total_pages = Math.ceil(total / per_page)
        res.send({ page: page, per_page: per_page, total: total, total_pages: total_pages, data: user, });
    } catch (err) {
        res.send(err);
    }
});


router.put("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
        res.send(user);
    } catch (err) {
        res.send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (err) {
        res.send(err);
    }
});



module.exports = router;