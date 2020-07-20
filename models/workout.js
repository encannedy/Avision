
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: [true, "Workout Day is required"]    
    },
    exercises: [
        {
            type: {
                type:String,
                trim:true,
                required: [true, "Please enter an exercise type i.e Cardio"]
            },
            name: {
                type: String,
                required: [true, "Exercise Name is required"]
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;