import React, { useState } from "react";
import { Button } from "@mui/material";
import './signup.css' 

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center md:min-h-screen my-5 md:my-0 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-[#262626] shadow-2xl dark:shadow-0 rounded-xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg">
        <h2 className="text-2xl animateText  md:text-3xl  font-extrabold text-center text-[#90caf9] mb-6 sm:mb-8">
          Create Your Account
        </h2>
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
              id="first-name"
              type="text"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
              id="last-name"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="mt-1 sm:mt-2 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
              id="email"
              type="email"
              placeholder="jane.doe@gmail.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative mt-1 sm:mt-2">
              <input
                className="block  w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-sm shadow-sm focus:ring-purple-500 focus:border-purple-500"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-blue-800 hover:text-gray-700 dark:hover:text-amber-600 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Sign Up
          </Button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-white mt-4 sm:mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-500 font-semibold hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
