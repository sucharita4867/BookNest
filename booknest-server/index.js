import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
  }
}
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("BookNest Server is running");
});

// ✅ GET all books
app.get("/book", async (req, res) => {
  try {
    const books = await client
      .db(process.env.DB_NAME)
      .collection("book")
      .find()
      .toArray();

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET single book
app.get("/book/:id", async (req, res) => {
  try {
    const book = await client
      .db(process.env.DB_NAME)
      .collection("book")
      .findOne({ _id: new ObjectId(req.params.id) });

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/book", async (req, res) => {
  try {
    const bookData = {
      ...req.body, // 👈 from form
      rating: 0, // 👈 server added
      pages: 0,
      publisher: "Unknown",
      stock: 10,
      createdAt: new Date(),
    };

    const result = await client
      .db(process.env.DB_NAME)
      .collection("book")
      .insertOne(bookData);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
