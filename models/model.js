const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    ExerciseType: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
    },
    ExerciseName: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
    },

    Weight: {
        type: Number,
        required: true
    },

    Sets: {
        type: Number,
        required: true
    },

    Reps: {
        type: Number,
        required: true
    },

    Duration: {
        type: Number,
        required: true,
        required: "Enter the exercise duration in minutes"
    }
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;