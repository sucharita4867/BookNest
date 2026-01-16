"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*@).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters and include 1 capital letter, 1 small letter, and @ symbol.",
      });
      return;
    }

    if (email === "admin@example.com" && password === "123456@A") {
      document.cookie = "auth=true; path=/";

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome Admin!",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.refresh();
        router.push("/book");
      }, 1500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <div className="flex min-h-[90vh] py-10 items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl bg-base-100 p-8 shadow-2xl">
        <h2 className="mb-4 mainText text-center">Welcome Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn bg-[#0F3D2E] text-white w-full rounded-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
