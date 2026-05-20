'use client'
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { name, email, image, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    if (!/[A-Z]/.test(password)) {
      return alert("Password must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return alert("Password must contain at least one lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
      return alert("Password must contain at least one number");
    }

    console.log({ name, email, image, password });
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-950 transition-colors">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 border border-gray-200 dark:border-gray-800 transition-colors">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Join us and start your journey 🚀
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Profile Image
            </label>
            <input
              type="text"
              name="image"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
              >
                {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;