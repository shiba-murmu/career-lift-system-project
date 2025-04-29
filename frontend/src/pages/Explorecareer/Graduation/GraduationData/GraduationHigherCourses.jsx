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

  return (
    <>
      <div className="p-2">
        <ContentCards course={course} />
      </div>
    </>
  );
}

export default GraduationHigherCourses;
