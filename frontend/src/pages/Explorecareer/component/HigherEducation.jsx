// This file contains the HigherEducation component, which renders different educational recommendations based on the provided ID.
// It uses Material-UI components for styling and layout.

// Import necessary libraries and components
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CareerSideBar from "../CareerSideBar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Component to render individual cards for higher education options
function For_Higher_Education_Cards(props) {
  const { id } = useParams(); // Extract the ID from the URL parameters

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          component={Link}
          to={`/education/${id}/post/${props.heading}`} // Dynamic link based on the heading and ID
        >
          <CardMedia
            component="img"
            height="140"
            image={props.image} // Image for the card
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.heading} 
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

// Main HigherEducation component
function HigherEducation({ id }) {
  // FilterBox component for search functionality
  const FilterBox = () => {
    return (
      <div className="flex justify-center mb-0 md:mb-4 w-[100%] dark:bg-neutral-900 p-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-sm p-2 w-1/2"
        />
        <button className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
          Search
        </button>
      </div>
    );
  };

  // Function to render content based on the provided ID
  const idbased_rendering = (id) => {
    switch (id) {
      case "1":
        // Matriculation level education recommendations
        return (
          <>
            <FilterBox />
            <div className="text-center">
              Recommended Higher Education for you
            </div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>
              {/* Main Content */}
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                {/* Render multiple cards for higher education options */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Software Engineer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Data Scientist"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Web Developer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                </div>
                {/* Additional rows of cards */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Network Engineer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="System Administrator"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Cloud Engineer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="DevOps Engineer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Business Analyst"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="IT Support Specialist"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Cybersecurity Analyst"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Database Administrator"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Game Developer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Mobile App Developer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="Cloud Architect"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                  <For_Higher_Education_Cards
                    heading="AI/ML Engineer"
                    image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3">
                <For_Higher_Education_Cards
                  heading="Software Engineer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Data Scientist"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Web Developer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Network Engineer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards heading="System Administrator" />
                <For_Higher_Education_Cards
                  heading="Cloud Engineer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="DevOps Engineer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Business Analyst"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="IT Support Specialist"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Cybersecurity Analyst"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Database Administrator"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Game Developer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Mobile App Developer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="Cloud Architect"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
                <For_Higher_Education_Cards
                  heading="AI/ML Engineer"
                  image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
                />
              </div>
            </div>
          </>
        );
      case "2":
        // Intermediate level education recommendations
        return (
          <>
            <FilterBox />
            <div className="text-center">
              Recommended Intermediate Level Education for you
            </div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>
              {/* Main Content */}
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                {/* Render multiple cards for intermediate level education options */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Intermediate Science"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Intermediate Commerce"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Intermediate Arts"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                </div>
                {/* Additional rows of cards */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Diploma in Engineering"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Diploma in IT"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Diploma in Management"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Certificate in Computer Applications"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Certificate in Accounting"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Certificate in Graphic Design"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Vocational Training in Electronics"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Vocational Training in Mechanics"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Vocational Training in Healthcare"
                    image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3">
                <For_Higher_Education_Cards
                  heading="Intermediate Science"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Intermediate Commerce"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Intermediate Arts"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Diploma in Engineering"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Diploma in IT"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Diploma in Management"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Computer Applications"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Accounting"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Graphic Design"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in Electronics"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in Mechanics"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in Healthcare"
                  image="https://collegevidya.com/blog/wp-content/uploads/2022/07/Top-Professional-Courses-After-Class-12th-Arts-Humanities.jpg"
                />
              </div>
            </div>
          </>
        );
      case "3":
        // Matriculation level education recommendations
        return (
          <>
            <FilterBox />
            <div className="text-center">
              Recommended Matriculation Level Education for you
            </div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>
              {/* Main Content */}
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                {/* Render multiple cards for matriculation level education options */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="High School Science"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="High School Commerce"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="High School Arts"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                </div>
                {/* Additional rows of cards */}
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Vocational Training in IT"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Vocational Training in Mechanics"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Vocational Training in Healthcare"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Higher_Education_Cards
                    heading="Certificate in Basic Computer Skills"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Certificate in Office Management"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                  <For_Higher_Education_Cards
                    heading="Certificate in Graphic Design"
                    image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3">
                <For_Higher_Education_Cards
                  heading="High School Science"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="High School Commerce"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="High School Arts"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in IT"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in Mechanics"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Vocational Training in Healthcare"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Basic Computer Skills"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Office Management"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
                <For_Higher_Education_Cards
                  heading="Certificate in Graphic Design"
                  image="https://velammalponneri.com/images/2022/foundation_courses.jpg"
                />
              </div>
            </div>
          </>
        );
      default:
        return null; // Default case if ID doesn't match
    }
  };

  return <>{idbased_rendering(id)}</>; // Render content based on ID
}

// Default props for the component
HigherEducation.defaultProps = {
  title: "Default Title",
};

// Prop types for validation
HigherEducation.propTypes = {
  title: PropTypes.string,
};

export default HigherEducation;
