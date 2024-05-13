"use server"

import { User } from "./models";
import { connectToDB } from "./utils";


// getting data from server

export const fetchUsers = async () => {
    try {
    connectToDB();
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };


