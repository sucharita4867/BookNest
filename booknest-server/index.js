import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI not found in environment variables");
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectDB() {
  if (db) return db;

  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("MongoDB Connected");
    return db;
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
}

// connect once on startup
connectDB();

// Health check
app.get("/", (req, res) => {
  res.send("BookNest Server is running");
});

// Get all books
app.get("/book", async (req, res) => {
  try {
    const database = await connectDB();
    const books = await database
      .collection("book")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get recent featured books
app.get("/book/recent", async (req, res) => {
  try {
    const database = await connectDB();
    const books = await database
      .collection("book")
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(4)
      .toArray();

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single book by ID
app.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID" });
    }

    const database = await connectDB();
    const book = await database
      .collection("book")
      .findOne({ _id: new ObjectId(id) });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new book
app.post("/book", async (req, res) => {
  try {
    const database = await connectDB();

    const bookData = {
      ...req.body,
      createdAt: new Date(),
    };

    const result = await database.collection("book").insertOne(bookData);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
