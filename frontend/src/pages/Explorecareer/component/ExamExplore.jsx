import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CareerSideBar from "../CareerSideBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"; 
function For_Exam_Cards(props) {
  const { id } = useParams(); // Extracting the id from the URL parameters
  // console.log(id); // Logging the id to the console for debugging
  return (
    <>
      <Card sx={{ maxWidth: 300, minHeight: 100 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://liet.in/images/lloyd_eng/website/img/blog/btech-entrance-exam-list.jpeg"
        />
        <CardContent sx={{ minHeight: "200px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.description}
            {props.longDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/exams/${id}/post/${props.heading}`} style={{ textDecoration: "none" }}>
            <Button size="small">Details</Button>
          </Link>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </>
  );
}

function ExamExplore({ id }) {
  // For exam searches
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

  const id_based_rendering = ({ id }) => {
    switch (id) {
      // 1 for graduation
      case "1":
        return (
          <>
            <FilterBox />
            <div className="text-center">Recommended Examinations</div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800  hidden md:block">
                <CareerSideBar />
              </div>
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Exam_Cards
                    heading="Bit SAT"
                    description="Description for Bit SAT "
                    longDescription="The Birla Institute of Technology and Science Admission Test (BITSAT) is an entrance exam conducted by BITS Pilani for admissions to its integrated first-degree programs. It is a computer-based test that in India."
                  />
                  <For_Exam_Cards
                    heading="JEE Main"
                    description="Description for JEE Main "
                    longDescription="The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted for admission to undergraduate engineering programs in India. It is organized by the National Testing Agency (NTA) and serves as a qualifying exam for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs). JEE Main tests candidates on Physics, Chemistry, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="NEET"
                    description="Description for NEET "
                    longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                  />
                  <For_Exam_Cards
                    heading="CAT"
                    description="Description for CAT "
                    longDescription="The Common Admission Test (CAT) is a national-level management entrance exam conducted in India for admission to postgraduate management programs, including MBA. It is administered by the Indian Institutes of Management (IIMs) and evaluates candidates on Quantitative Ability, Verbal Ability, Data Interpretation, and Logical Reasoning."
                  />
                  <For_Exam_Cards
                    heading="GATE"
                    description="Description for GATE "
                    longDescription="The Graduate Aptitude Test in Engineering (GATE) is an entrance exam conducted for admission to postgraduate engineering programs and for recruitment in public sector companies. It is jointly conducted by the Indian Institute of Science "
                  />
                  <For_Exam_Cards
                    heading="Bit SAT"
                    description="Description for Bit SAT "
                    longDescription="The Birla Institute of Technology and Science Admission Test (BITSAT) is an entrance exam conducted by BITS Pilani for admissions to its integrated first-degree programs. It is a computer-based test that in India."
                  />
                  <For_Exam_Cards
                    heading="JEE Main"
                    description="Description for JEE Main "
                    longDescription="The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted for admission to undergraduate engineering programs in India. It is organized by the National Testing Agency (NTA) and serves as a qualifying exam for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs). JEE Main tests candidates on Physics, Chemistry, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="NEET"
                    description="Description for NEET "
                    longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                  />
                  <For_Exam_Cards
                    heading="CAT"
                    description="Description for CAT "
                    longDescription="The Common Admission Test (CAT) is a national-level management entrance exam conducted in India for admission to postgraduate management programs, including MBA. It is administered by the Indian Institutes of Management (IIMs) and evaluates candidates on Quantitative Ability, Verbal Ability, Data Interpretation, and Logical Reasoning."
                  />
                  <For_Exam_Cards
                    heading="GATE"
                    description="Description for GATE "
                    longDescription="The Graduate Aptitude Test in Engineering (GATE) is an entrance exam conducted for admission to postgraduate engineering programs and for recruitment in public sector companies. It is jointly conducted by the Indian Institute of Science "
                  />
                  <For_Exam_Cards
                    heading="Bit SAT"
                    description="Description for Bit SAT "
                    longDescription="The Birla Institute of Technology and Science Admission Test (BITSAT) is an entrance exam conducted by BITS Pilani for admissions to its integrated first-degree programs. It is a computer-based test that in India."
                  />
                  <For_Exam_Cards
                    heading="JEE Main"
                    description="Description for JEE Main "
                    longDescription="The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted for admission to undergraduate engineering programs in India. It is organized by the National Testing Agency (NTA) and serves as a qualifying exam for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs). JEE Main tests candidates on Physics, Chemistry, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="NEET"
                    description="Description for NEET "
                    longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                  />
                  <For_Exam_Cards
                    heading="CAT"
                    description="Description for CAT "
                    longDescription="The Common Admission Test (CAT) is a national-level management entrance exam conducted in India for admission to postgraduate management programs, including MBA. It is administered by the Indian Institutes of Management (IIMs) and evaluates candidates on Quantitative Ability, Verbal Ability, Data Interpretation, and Logical Reasoning."
                  />
                  <For_Exam_Cards
                    heading="GATE"
                    description="Description for GATE "
                    longDescription="The Graduate Aptitude Test in Engineering (GATE) is an entrance exam conducted for admission to postgraduate engineering programs and for recruitment in public sector companies. It is jointly conducted by the Indian Institute of Science "
                  />
                </div>
                {/* <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 "></div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 "></div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 "></div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 "></div> */}
              </div>
            </div>

            {/* Mobile view */}

            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
                <For_Exam_Cards
                  heading="NEET"
                  description="Description for NEET "
                  longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                />
                <For_Exam_Cards
                  heading="NEET"
                  description="Description for NEET "
                  longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                />
                <For_Exam_Cards
                  heading="NEET"
                  description="Description for NEET "
                  longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                />
                <For_Exam_Cards
                  heading="NEET"
                  description="Description for NEET "
                  longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs in government and private institutions. NEET evaluates candidates on subjects like Physics, Chemistry, and Biology."
                />
              </div>
            </div>
          </>
        );
      case "2":
        // 2 for intermediate
        return <>Intermediate</>;
      case "3":
        // 3 for matriculation
        return <>Matriculation</>;
      default:
        return <div>Invalid ID</div>;
    }
  };

  return (
    <>
      { id_based_rendering({ id }) }
    </>
  );
}

export default ExamExplore;
