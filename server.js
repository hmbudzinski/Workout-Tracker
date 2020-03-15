const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const User = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname + "/public/index.html"))
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname + "/public/exercise.html"))
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname + "/public/stats.html"))
})

app.get("/api/workouts", (req, res) => {
    db.Workouts.find()
        .then(data => {
            res.json(data);
        });
});

app.post("/submit", ({ body }, res) => {
    const user = new User(body);
    user.coolifier();
    user.makeCool();

    User.create(user)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});