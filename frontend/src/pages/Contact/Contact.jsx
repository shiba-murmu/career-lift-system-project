import React from "react";
import { Button } from "@mui/material";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Open sans, sans-serif", fontWeight: "bold" }}>
      <div className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6 sm:p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-center text-[#90caf9] mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 dark:text-white mb-8">
          Have questions or need help? Fill out the form below, and we’ll get
          back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          {/* <button
            type="submit"
            className="w-full  text-white py-2 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Send Message
          </button> */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            fullWidth
            style={{

              fontFamily: "Open sans, sans-serif",
              fontWeight: "normal",
            }}
            className="w-full text-white py-2 px-4 rounded-lg shadow-lg  focus:outline-none focus:ring-4 focus:ring-purple-300">
            Send Message
          </Button>
        </form>
      </div>
      <div className="mt-10 flex flex-col items-center w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-[#90caf9] mb-6">
          Our Location
        </h2>
        <div className="w-full max-w-4xl h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131.0!2d86.2145318!3d22.8215057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3d9ed582513%3A0xda0061948646c337!2sKaya%20Kalp!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
