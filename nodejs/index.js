const users = require("./routes/users")
const auth = require("./routes/auth")
const db = require("./config/db");
const express = require('express');
const app = express();
const cors = require("cors");
const port = 5000

db.connect();

app.use(express.json())
app.use(cors())

app.use("/api/auth", auth)
app.use("/api/users", users)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})