import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  // db operations
  const { username, email, password } = req.body;

  // Hash the password

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  // create a new user and save it

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  console.log(newUser);
  // const newUser = await
};

export const login = (req, res) => {
  // db operations
  console.log("login endpoint");
};

export const logout = (req, res) => {
  // db operations
  console.log("logout endpoint");
};
