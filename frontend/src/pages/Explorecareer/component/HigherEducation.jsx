import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import CareerSideBar from "../CareerSideBar";
import PropTypes from "prop-types";

function For_Higher_Education_Cards(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://liet.in/images/lloyd_eng/website/img/blog/career-after-b-tech-computer-science.jpeg"
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

function HigherEducation() {
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
  return (
    <>
      <FilterBox />
      <div className="text-center">Recommended Higher Education for you</div>
      <div className="md:flex hidden md:gap-4 mt-4">
        {/* Sidebar */}
        <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800  hidden md:block">
          <CareerSideBar />
        </div>
        {/* Main Content */}
        <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
            <For_Higher_Education_Cards heading="Software Engineer" />
            <For_Higher_Education_Cards heading="Data Scientist" />
            <For_Higher_Education_Cards heading="Web Developer" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <For_Higher_Education_Cards heading="Network Engineer" />
            <For_Higher_Education_Cards heading="System Administrator" />
            <For_Higher_Education_Cards heading="Cloud Engineer" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <For_Higher_Education_Cards heading="DevOps Engineer" />
            <For_Higher_Education_Cards heading="Business Analyst" />
            <For_Higher_Education_Cards heading="IT Support Specialist" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <For_Higher_Education_Cards heading="Cybersecurity Analyst" />
            <For_Higher_Education_Cards heading="Database Administrator" />
            <For_Higher_Education_Cards heading="Game Developer" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <For_Higher_Education_Cards heading="Mobile App Developer" />
            <For_Higher_Education_Cards heading="Cloud Architect" />
            <For_Higher_Education_Cards heading="AI/ML Engineer" />
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div>
        <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
          <For_Higher_Education_Cards heading="Software Engineer" />
          <For_Higher_Education_Cards heading="Data Scientist" />
          <For_Higher_Education_Cards heading="Web Developer" />
          <For_Higher_Education_Cards heading="Network Engineer" />
          <For_Higher_Education_Cards heading="System Administrator" />
          <For_Higher_Education_Cards heading="Cloud Engineer" />
          <For_Higher_Education_Cards heading="DevOps Engineer" />
          <For_Higher_Education_Cards heading="Business Analyst" />
          <For_Higher_Education_Cards heading="IT Support Specialist" />
          <For_Higher_Education_Cards heading="Cybersecurity Analyst" />
          <For_Higher_Education_Cards heading="Database Administrator" />
          <For_Higher_Education_Cards heading="Game Developer" />
          <For_Higher_Education_Cards heading="Mobile App Developer" />
          <For_Higher_Education_Cards heading="Cloud Architect" />
          <For_Higher_Education_Cards heading="AI/ML Engineer" />
        </div>
      </div>
    </>
  );
}

HigherEducation.defaultProps = {
  title: "Default Title",
};

HigherEducation.propTypes = {
  title: PropTypes.string,
};

export default HigherEducation;
