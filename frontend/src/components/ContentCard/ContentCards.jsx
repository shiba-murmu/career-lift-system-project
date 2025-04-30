import React from "react";
import { Link } from "react-router-dom";

function ContentCards({ course }) {
  return (
    <>
      <div>
        {/* main division */}
        <div>
          {/* Heading */}
            <h1>Content Cards</h1> {/* Adding a heading */}

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
