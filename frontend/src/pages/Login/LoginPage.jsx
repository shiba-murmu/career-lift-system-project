import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
import { useState } from "react";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"; // For password visibility off
import VisibilityIcon from "@mui/icons-material/Visibility"; // For password visibility on

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <BackgroundParticles />
      <section
        className="h-[60vh] relative  p-3 md:p-0 md:h-screen  flex items-center justify-center"
        style={{ fontFamily: "Open sans", fontWeight: "bold" }}
      >
        <div className="bg-white dark:bg-neutral-800 dark:shadow-none shadow-neutral-500 rounded-lg shadow-lg p-13 w-full md:w-1/4">
          <h1
            className="md:text-5xl text-4xl font-bold mb-6 text-center text-[#1976d2] dark:text-[#90caf9]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Login
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm md:text-sm md:font-medium"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-50 rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-sm font-medium mb-2"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  className="p-2 placeholder:text-gray-400 placeholder:placeholder-opacity-70 rounded-sm md:rounded-md border-1 md:border-2 border-gray-300 w-full required"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-white focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            >
              Login
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
