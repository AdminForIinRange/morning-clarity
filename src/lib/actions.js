"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models"; // Importing User model from "./models"
import { connectToDB } from "./utils"; // Importing connectToDB function from "./utils"

// export const addData = async (userData) => {
//   try {
//     connectToDB(); // Establishing connection to the database

//     const newUser = new User(userData); // Creating a new User object with userData

//     await newUser.save(); // Saving the new user to the database
//   } catch (error) {
//     console.error("Error adding user data:", error);
//   }
// };

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
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
