"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models"; // Importing User model from "./models"
import { connectToDB } from "./utils"; // Importing connectToDB function from "./utils"

export const signUp = async (previousState, formData) => {
  const { username, email, password } = Object.fromEntries(formData); // formData is transformed into an object

  console.log(username, email, password);

  try {
    connectToDB();

    // Custom validation for username
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      return { error: "Username must contain only letters and numbers" };
    }

    // Custom validation for email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { error: "Email must be valid" };
    }

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password, email } = Object.fromEntries(formData);

  try {
    await connectToDB();
    // Custom validation for username
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
      return { error: "Username must contain only letters and numbers" };
    }

    // Custom validation for email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return { error: "Email must be valid" };
    }

    // Assuming connectToDB returns a promise that resolves when the connection is established.
    const userByUsername = await User.findOne({ username: username });

    if (
      username === userByUsername.username &&
      password === userByUsername.password &&
      email === userByUsername.email
    ) {
      return { success: true };
    } else {
      return { error: "Invalid username, password, or email" };
    }
  } catch (err) {
    console.log(err);

    return { error: "An error occurred while processing your request" };
  }
};


export const addDailyTaskCompleted = async (username, date, accuracy, points) => {
  try {
    const db = await connectToDB();

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }

    // Ensure date is a string and extract 'YYYY-MM-DD'
    let todayDate;
    if (typeof date === 'string') {
      todayDate = date.substring(0, 10);
    } else if (date instanceof Date) {
      todayDate = date.toISOString().substring(0, 10);
    } else {
      throw new TypeError('Invalid date format');
    }

    // Check if a task with today's date already exists
    const hasTaskForToday = user.performance_data.daily_tasks.some(task => 
      (typeof task.date === 'string' ? task.date : task.date.toISOString()).substring(0, 10) === todayDate
    );

    if (hasTaskForToday) {
      console.log("User has already completed a task today.");
      return null; // or return some message indicating the task is already completed
    }

    // If no task for today, proceed to add the new task
    user.performance_data.daily_tasks.push({
      date,
      daily_tasks_completed: true,
      accuracy,
      points,
    });

    const updatedUser = await user.save();
    return updatedUser;
  } catch (error) {
    console.error("Error adding user data:", error);
    throw error; // Ensure the error is thrown to handle it appropriately where this function is called
  }
};

export const addNonDailyTaskCompleted = async (
  username,
  date,
  accuracy,
  points,
) => {
  try {
    const db = await connectToDB();
    const user = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          "performance_data.non_daily_tasks": {
            daily_tasks_completed: true,
            accuracy,
            points,
          },
        },
      },
      { new: true },
    );
    return user;
  } catch (error) {
    console.error("Error adding user data:", error);
  }
};

[
  {
    username: "john_doe",
    email: "john.doe@example.com",
    password: "password123",
    performance_data: {
      daily_tasks: [
        {
          date: "2024-05-14T08:00:00.000Z",
          daily_tasks_completed: true,
          accuracy: 85,
          points: 50,
        },
        {
          date: "2024-05-13T08:00:00.000Z",
          daily_tasks_completed: true,
          accuracy: 90,
          points: 60,
        },
      ],
      non_daily_tasks: [
        {
          non_daily_tasks_completed: false,
          accuracy: 0,
          points: 0,
        },
      ],
      progress_history: [
        {
          Overall_days: 10,
          Overall_points: 600,
          Overall_tasks_completed: 9,
          Overall_tasks_accuracy: 88,
        },
      ],
    },
  },
];
