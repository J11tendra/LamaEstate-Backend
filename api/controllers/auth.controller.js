import bcrypt from "bcrypt";

export const register = async (req, res) => {
  // db operations
  const { username, email, password } = req.body;

  // Hash the password

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  // create a new user and save it
};

export const login = (req, res) => {
  // db operations
  console.log("login endpoint");
};

export const logout = (req, res) => {
  // db operations
  console.log("logout endpoint");
};
