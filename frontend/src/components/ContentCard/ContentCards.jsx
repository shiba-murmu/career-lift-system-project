import React from "react";
import { Link } from "react-router-dom";

function ContentCards({ course }) {
  return (
    <div
      className="block bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-[20rem] h-[25rem] border border-gray-300"
      style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.9rem" }}
    >
      <div className="flex flex-col justify-between h-full">
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-blue-700">{course.title}</h2>
          <p className="text-sm text-gray-500">{course.location}</p>
        </div>

        {/* Course Details */}
        <div className="text-sm space-y-2">
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

        {/* Description Section */}
        <div className="text-justify text-sm text-gray-700 mt-4 leading-relaxed">
          {course.description}
        </div>

        {/* Footer Section */}
        <div className="text-center mt-6">
          <Link
            to={course.link}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContentCards;
