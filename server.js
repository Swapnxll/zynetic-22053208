import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import bookRoutes from "./routes/bookRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(morgan("dev"));
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.get("/", (req, res) => {
  res.send(`
      <h2>Hello, this is Swapnil Sinha</h2>
      <p>Roll No: 22053208</p>
      <p>Institute: Kalinga Institute of Industrial Technology (KIIT)</p>
      <hr/>
      <h3>Backend REST API - Book Management System</h3>
      <p>This RESTful API allows users to perform CRUD operations on a book collection stored in MongoDB.</p>
      <ul>
        <li>User authentication using JSON Web Tokens (JWT)</li>
        <li>Create, read, update, and delete books</li>
        <li>Search books by title</li>
        <li>Filter books by author, category, and rating</li>
        <li>Sort books by price or rating</li>
        <li>Paginate book results</li>
        <li>Combine filters with sorting and pagination in one endpoint</li>
      </ul>
    `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
