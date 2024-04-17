//app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const { User } = require("./models");
const config = require("./config/config");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));
app.use(passport.initialize());

// setup passport
require("./config/passport")(passport);

// api
app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});

app.get(
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json(req.user);
    }
);

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});
