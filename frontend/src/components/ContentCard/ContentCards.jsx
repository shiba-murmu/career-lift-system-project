import React, { useState } from "react"; // Import React and useState hook

// Import Material-UI icons
import TurnedInIcon from "@mui/icons-material/TurnedIn"; // Bookmarked icon
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot"; // Not bookmarked icon
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"; // People outline icon
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Access time icon
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"; // Access alarm icon
import LocationPinIcon from "@mui/icons-material/LocationPin"; // Location pin icon

function ContentCards() {
  // State for bookmark toggle
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Function to toggle bookmark state
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      {/* Main Card Container */}

      <div
        className="hidden md:block  bg-gray-300 dark:border-gray-500 rounded-lg dark:bg-neutral-800 shadow-2xl dark:shadow-0 p-5 h-[27rem] w-100% md:w-[25%]"
        style={{ fontFamily: "Open sans , " }}
      >
        {/* Bookmark Button */}
        <div className="flex justify-end items-center mb-4">
          <button className="relative" onClick={toggleBookmark}>
            {isBookmarked ? <TurnedInIcon /> : <TurnedInNotIcon />}
          </button>
        </div>

        {/* Card Header */}
        <div>
          <span className="text-2xl text-blue-800 font-bold dark:text-blue-300">
            UX/UI Designer
          </span>
        </div>

        {/* Job Details Section */}
        <div className="flex justify-between items-center mt-4 mb-4">
          {/* Experience */}
          <div>
            <PeopleOutlineIcon fontSize="small" />
            <span className="text-sm font-bold">1 - 2 Years</span>
          </div>

          {/* Job Type */}
          <div className="flex items-center gap-2">
            <AccessTimeIcon fontSize="small" />
            <span className="text-sm font-bold">Full Time</span>
          </div>

          <div>
            <LocationPinIcon fontSize="small" />
            <span className="text-sm font-bold">Remote</span>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We are looking for a creative and detail-oriented UX/UI Designer to
            join our team. The ideal candidate will have experience in designing
            user-friendly interfaces and a strong understanding of design
            principles and tools.
          </p>
        </div>

        {/* Posted Date */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <AccessAlarmIcon fontSize="small" />
            <span className="text-sm font-thin">Posted on: Oct 10, 2023</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex justify-between text-sm items-center mt-4 mb-4">
          <div className="flex items-center bg-fuchsia-400 dark:bg-neutral-700 p-1 px-2 rounded-2xl font-light">
            Javascript
          </div>
          <div className="flex items-center bg-blue-500 dark:bg-neutral-700 p-1 px-2 rounded-2xl font-light">
            React
          </div>
          <div className="flex items-center bg-cyan-600 dark:bg-neutral-700 p-1 px-2 rounded-2xl font-light">
            Figma
          </div>
          <div className="flex items-center bg-emerald-800 dark:bg-neutral-700 p-1 px-2 rounded-2xl font-light">
            CSS
          </div>
        </div>

        {/* View Details Button */}
        <div>
          <button className="bg-amber-800 dark:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full flex items-center justify-center hover:bg-amber-700 dark:hover:bg-blue-400 transition duration-300 ease-in-out">
            <span className="text-sm text-gray-200 dark:text-gray-300 font-bold">
              View Details
            </span>
          </button>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full flex flex-row md:hidden bg-gray-200 shadow-xl dark:bg-neutral-800 rounded-md">
        <div className="w-1/3 flex justify-center items-center">
          {/* Company Logo */}
          <img
            src="https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj"
            alt="Company logo"
            className="h-[80%] w-[80%] object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="w-2/3 flex flex-col justify-center items-start">
          <span className="text-xl text-blue-800 font-bold dark:text-blue-300">
            UX/UI Designer
          </span>
          <div className="flex justify-between w-[100%] mb-4 pr-4">
            <div className="flex items-center gap-2">
              <LocationPinIcon fontSize="small" />
              <span className="text-sm font-thin">India, Jharkhand</span>
            </div>
            <button className="relative" onClick={toggleBookmark}>
              {isBookmarked ? <TurnedInIcon /> : <TurnedInNotIcon />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCards;
