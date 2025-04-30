import React from "react";
import ContentCards from "../../../../components/ContentCard/ContentCards";

function GraduationHigherCourses() {
  const course = {
    image: "/public/images/career.jpeg",
    title: "Advanced Computer Science",
    location: "Online",
    eligibility: "Graduation in CS or related field",
    jobType: "Full-time",
    amount: "$500",
    description:
      "This course provides advanced knowledge in computer science, including AI, ML, and data science.",
    date: "April 29, 2025",
    link: "/courses/advanced-computer-science",
  };
  
  const FilterBox = () => {
    return (
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 w-1/3"
        />
      </div>
    );
  }
  return (
    <>
      <FilterBox />
      <div className="p-2">
        <ContentCards course={course} />
      </div>
    </>
  );
}

export default GraduationHigherCourses;
