"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { User } from "./models"; // Importing User model from "./models"
import { connectToDB } from "./utils"; // Importing connectToDB function from "./utils"
import Cookies from 'js-cookie';
// export const addData = async (userData) => {
//   try {
//     connectToDB(); // Establishing connection to the database

//     const newUser = new User(userData); // Creating a new User object with userData

//     await newUser.save(); // Saving the new user to the database
//   } catch (error) {
//     console.error("Error adding user data:", error);
//   }
// };

export const addUser = async (previousState,formData) => {
  const { username, email, password } = Object.fromEntries(formData); // formData is transformed into an object

  console.log(username, email, password);

  try {
    connectToDB();

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
    
    return { success: true  };
    
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }

  
};

