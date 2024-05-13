"use server";

import { User } from "./models"; // Importing User model from "./models"
import { connectToDB } from "./utils"; // Importing connectToDB function from "./utils"

export const addData = async (userData) => {
  try {
    connectToDB(); // Establishing connection to the database

    const newUser = new User(userData); // Creating a new User object with userData

    await newUser.save(); // Saving the new user to the database
  } catch (error) {
    console.error("Error adding user data:", error);
  }
};

