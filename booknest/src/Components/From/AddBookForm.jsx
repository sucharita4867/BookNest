"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
    description: "",
    category: "",
    featured: false,
    rating: "",
    pages: "",
    publisher: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          rating: Number(formData.rating),
          pages: Number(formData.pages),
          stock: Number(formData.stock),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed to add book");
      }

      Swal.fire({
        icon: "success",
        title: "Book Added",
        text: "Book added successfully!",
      });

      setFormData({
        title: "",
        author: "",
        price: "",
        image: "",
        description: "",
        category: "",
        featured: false,
        rating: "",
        pages: "",
        publisher: "",
        stock: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        className="input input-bordered w-full"
        value={formData.title}
        onChange={handleChange}
        required
      />

      {/* Author */}
      <input
        type="text"
        name="author"
        placeholder="Author Name"
        className="input input-bordered w-full"
        value={formData.author}
        onChange={handleChange}
        required
      />

      {/* Price */}
      <input
        type="text"
        name="price"
        placeholder="Price (₹)"
        className="input input-bordered w-full"
        value={formData.price}
        onChange={handleChange}
        required
      />

      {/* Image */}
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        className="input input-bordered w-full"
        value={formData.image}
        onChange={handleChange}
        required
      />

      {/* Category */}
      <select
        name="category"
        className="select select-bordered w-full"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option>Self Improvement</option>
        <option>Productivity</option>
        <option>Mindfulness</option>
        <option>Career Growth</option>
      </select>

      {/* Description */}
      <textarea
        name="description"
        placeholder="Book Description"
        className="textarea textarea-bordered w-full"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating (e.g. 4.5)"
          className="input input-bordered w-full"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pages"
          placeholder="Total Pages"
          className="input input-bordered w-full"
          value={formData.pages}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="publisher"
          placeholder="Publisher Name"
          className="input input-bordered w-full"
          value={formData.publisher}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          className="input input-bordered w-full"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      {/* Featured */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
          className="checkbox"
          checked={formData.featured}
          onChange={handleChange}
        />
        <span>Mark as Featured</span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="inline-block bg-[#0F3D2E] btn text-white px-6 py-2 rounded-full text-base font-medium hover:bg-[#0C2F24] transition w-full mt-4"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
