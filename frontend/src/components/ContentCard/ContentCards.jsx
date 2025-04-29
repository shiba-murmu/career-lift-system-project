import React from "react";
import { Link } from "react-router-dom";

function ContentCards({ course }) {
  return (
    <div
      className="block bg-white text-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 w-[18rem] h-[22rem] border border-gray-200"
      style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem" }}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Course Title */}
        <div className="text-lg font-bold text-center mb-4">{course.title}</div>

        {/* Course Details */}
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Location:</span>
            <span className="text-gray-600">{course.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Eligibility:</span>
            <span className="text-gray-600">{course.eligibility}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Job Type:</span>
            <span className="text-gray-600">{course.jobType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Amount:</span>
            <span className="text-gray-600">{course.amount}</span>
          </div>
        </div>

        {/* Course Description */}
        <div className="text-justify text-sm text-gray-700 mt-4">
          {course.description}
        </div>

        {/* Action Button */}
        <div className="text-center mt-6">
          <Link
            to={course.link}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContentCards;
