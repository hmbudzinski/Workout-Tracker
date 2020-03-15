const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8080;

const User = require("./models/model");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
});

app.post("/api/workouts", ({ body }, res) => {
    User.create(body)
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

app.put("api/workouts/:id", (req, res) => {
    User.Workouts.update({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(data => {
            res.json(data)
        });
});

app.get("api/workouts/:range", (req, res) => {
    User.Workouts.find()
        .then(data => {
            res.json(data)
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});