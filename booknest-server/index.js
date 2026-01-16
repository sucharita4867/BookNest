import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

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
    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB Error:", error);
  }
}
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("BookNest Server is running");
});

// GET all books
app.get("/api/books", async (req, res) => {
  const books = await client
    .db(process.env.DB_NAME)
    .collection("books")
    .find()
    .toArray();

  res.json(books);
});

// GET single book
app.get("/api/books/:id", async (req, res) => {
  const book = await client
    .db(process.env.DB_NAME)
    .collection("books")
    .findOne({ _id: new ObjectId(req.params.id) });

  res.json(book);
});

// ADD book
app.post("/api/books", async (req, res) => {
  const result = await client
    .db(process.env.DB_NAME)
    .collection("books")
    .insertOne(req.body);

  res.json(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
