const User = require("../models");

module.exports = function(app){

app.post("/api/workouts", (req, res) => {
    User.Workout.create({})
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

app.put("/api/workouts/:id", (req, res) => {
    User.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(data => {
            res.json(data)
        });
});

app.get("/api/workouts/:range", (req, res) => {
    User.Workout.find()
        .then(data => {
            res.json(data)
        });
});
}