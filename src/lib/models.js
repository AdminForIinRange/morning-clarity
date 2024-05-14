"use server";
// forming data model so it's readable and follows a type for mongodb

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
      spical_char: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
    },

    performance_data: {
      daily_tasks: [
        // maybe add a paymnet stsyem to add do more questions and get more points, dont add to much complexity
        // sigelur task
        {
          date: { type: Date, default: Date.now },
          daily_tasks_completed: { type: Boolean, default: false },
          accuracy: { type: Number, default: 0 },

          points: { type: Number, default: 0 },
        },
      ],
      non_daily_tasks: [
        //  tasks outside of daily.
        {
          daily_tasks_completed: { type: Boolean, default: false },

          accuracy: { type: Number, default: 0 },

          points: { type: Number, default: 0 },
        },
      ],
      progress_history: [
        // fecth this and create a learderboard page
        // overall progress
        {
          Overall_days: { type: Number, default: 0 },
          Overall_points: { type: Number, default: 0 },
          Overall_tasks_completed: { type: Number, default: 0 },
          Overall_tasks_accuracy: { type: Number, default: 0 },
        },
      ],
    },
  },
  { timestamps: true },
);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
