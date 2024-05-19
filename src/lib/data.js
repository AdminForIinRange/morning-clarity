"use server";

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

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
    // dont desture when u dont need to {user} = bad, took me 1 horu to find the error
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchUserByUsername = async (username) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: username });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user by username!");
  }
};
