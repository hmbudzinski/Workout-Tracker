const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        required: "String is Required"
    },

    Distance: {
        type: Number,
        required: true
    },

    Duration: {
        type: Number,
        required: true
    }
});

const ResistanceSchema = new Schema({
    ExerciseName: {
        type: String,
        trim: true,
        required: "String is Required"
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
        required: true
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);
const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Cardio;
module.exports = Resistance;