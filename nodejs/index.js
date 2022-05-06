const users = require("./routes/users")
const db = require("./config/db");
const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000

db.connect();

app.use(express.json())
app.use(cors())

app.use("/api/users", users)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})