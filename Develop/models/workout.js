// Export Models
const mongoose = require("mongoose");
const Schema = mongoose.Schema


//Schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Required"
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise type Required"
      },
      duration: {
        type: Number,
        required: "Exercise Duration Required"
      },
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
});


//Export 
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;