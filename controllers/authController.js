import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ msg: "you're already registered" });

    const hash = await bcrypt.hash(password, 15);

    const newone = new User({ name, email, password: hash });
    await newone.save();

    res.status(201).json({ msg: "Signup done " });
  } catch (err) {
    res.status(500).json({ msg: "Something broke during signup" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const guy = await User.findOne({ email });
    if (!guy) return res.status(404).json({ msg: "User doesn't exist 😶" });

    const ok = await bcrypt.compare(password, guy.password);
    if (!ok) return res.status(400).json({ msg: "Wrong password, bruhhhhh" });

    const token = jwt.sign(
      { _id: guy._id, email: guy.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: "You're in boy!!",
      user: { name: guy.name, email: guy.email, _id: guy._id },
    });
  } catch (err) {
    res.status(500).json({ msg: "Login failed miserably", err });
  }
};

export const signout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ msg: "Bye Bye" });
};
