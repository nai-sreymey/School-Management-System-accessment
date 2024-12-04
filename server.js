import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import classRoute from "./routes/classRoute.js";
import dotenv from "dotenv";
import studentRoute from "./routes/studentRoute.js";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Football CMS application." });
});

// Use classRoute for /api/class endpoint
app.use("/api/class", classRoute);
app.use("/api/student", studentRoute);

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1); // Gracefully exit if DB connection fails
  });

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
