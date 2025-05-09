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
          <Link
            to={`/exams/${id}/post/${props.heading}`}
            style={{ textDecoration: "none" }}
          >
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
        return (
          <>
            <FilterBox />
            <div className="text-center">
              Examinations for Intermediate Level Students
            </div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Exam_Cards
                    heading="JEE Main"
                    description="Engineering Entrance Exam"
                    longDescription="The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted for admission to undergraduate engineering programs in India. It is organized by the National Testing Agency (NTA) and tests candidates on Physics, Chemistry, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="NEET"
                    description="Medical Entrance Exam"
                    longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs. NEET evaluates candidates on Physics, Chemistry, and Biology."
                  />
                  <For_Exam_Cards
                    heading="CLAT"
                    description="Law Entrance Exam"
                    longDescription="The Common Law Admission Test (CLAT) is a national-level entrance exam for admissions to undergraduate and postgraduate law programs in India. It evaluates candidates on English, General Knowledge, Legal Aptitude, Logical Reasoning, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="NDA"
                    description="Defense Services Exam"
                    longDescription="The National Defence Academy (NDA) exam is conducted by the Union Public Service Commission (UPSC) for recruitment into the Indian Army, Navy, and Air Force. It tests candidates on Mathematics and General Ability."
                  />
                  <For_Exam_Cards
                    heading="CUET"
                    description="University Entrance Exam"
                    longDescription="The Common University Entrance Test (CUET) is conducted for admission to undergraduate programs in central universities across India. It evaluates candidates on subjects like English, General Knowledge, and domain-specific subjects."
                  />
                  <For_Exam_Cards
                    heading="IPMAT"
                    description="Management Entrance Exam"
                    longDescription="The Integrated Program in Management Aptitude Test (IPMAT) is conducted for admission to integrated management programs. It evaluates candidates on Quantitative Ability, Verbal Ability, and Logical Reasoning."
                  />
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3">
                <For_Exam_Cards
                  heading="JEE Main"
                  description="Engineering Entrance Exam"
                  longDescription="The Joint Entrance Examination (JEE) Main is a national-level entrance exam conducted for admission to undergraduate engineering programs in India. It is organized by the National Testing Agency (NTA) and tests candidates on Physics, Chemistry, and Mathematics."
                />
                <For_Exam_Cards
                  heading="NEET"
                  description="Medical Entrance Exam"
                  longDescription="The National Eligibility cum Entrance Test (NEET) is a national-level medical entrance exam in India. It is conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental programs. NEET evaluates candidates on Physics, Chemistry, and Biology."
                />
                <For_Exam_Cards
                  heading="CLAT"
                  description="Law Entrance Exam"
                  longDescription="The Common Law Admission Test (CLAT) is a national-level entrance exam for admissions to undergraduate and postgraduate law programs in India. It evaluates candidates on English, General Knowledge, Legal Aptitude, Logical Reasoning, and Mathematics."
                />
                <For_Exam_Cards
                  heading="NDA"
                  description="Defense Services Exam"
                  longDescription="The National Defence Academy (NDA) exam is conducted by the Union Public Service Commission (UPSC) for recruitment into the Indian Army, Navy, and Air Force. It tests candidates on Mathematics and General Ability."
                />
              </div>
            </div>
          </>
        );
      case "3":
        return (
          <>
            <FilterBox />
            <div className="text-center">
              Examinations for Matriculation Students
            </div>
            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <For_Exam_Cards
                    heading="NTSE"
                    description="National Talent Search Exam"
                    longDescription="The National Talent Search Examination (NTSE) is a national-level scholarship program in India to identify and nurture talented students. It evaluates candidates on subjects like Mental Ability, Language, and Scholastic Aptitude."
                  />
                  <For_Exam_Cards
                    heading="Olympiads"
                    description="Science and Math Competitions"
                    longDescription="Olympiads are competitive exams conducted at national and international levels in subjects like Mathematics, Science, and English. They aim to enhance problem-solving skills and subject knowledge among students."
                  />
                  <For_Exam_Cards
                    heading="KVPY"
                    description="Fellowship Program"
                    longDescription="The Kishore Vaigyanik Protsahan Yojana (KVPY) is a national program aimed at encouraging students to pursue careers in research. It tests candidates on subjects like Mathematics, Science, and Logical Reasoning."
                  />
                  <For_Exam_Cards
                    heading="JSTSE"
                    description="Junior Science Talent Search Exam"
                    longDescription="The Junior Science Talent Search Examination (JSTSE) is conducted to identify talented students in the field of science. It evaluates candidates on General Knowledge, Science, and Mathematics."
                  />
                  <For_Exam_Cards
                    heading="ICAR AIEEA"
                    description="Agriculture Entrance Exam"
                    longDescription="The Indian Council of Agricultural Research (ICAR) All India Entrance Examination for Admission (AIEEA) is conducted for students interested in pursuing undergraduate courses in agriculture and allied sciences."
                  />
                  <For_Exam_Cards
                    heading="RMO"
                    description="Regional Mathematics Olympiad"
                    longDescription="The Regional Mathematics Olympiad (RMO) is a mathematics competition conducted to identify and encourage mathematical talent among students. It serves as a stepping stone for the International Mathematics Olympiad."
                  />
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around p-2 w-[100%] gap-3">
                <For_Exam_Cards
                  heading="NTSE"
                  description="National Talent Search Exam"
                  longDescription="The National Talent Search Examination (NTSE) is a national-level scholarship program in India to identify and nurture talented students. It evaluates candidates on subjects like Mental Ability, Language, and Scholastic Aptitude."
                />
                <For_Exam_Cards
                  heading="Olympiads"
                  description="Science and Math Competitions"
                  longDescription="Olympiads are competitive exams conducted at national and international levels in subjects like Mathematics, Science, and English. They aim to enhance problem-solving skills and subject knowledge among students."
                />
                <For_Exam_Cards
                  heading="KVPY"
                  description="Fellowship Program"
                  longDescription="The Kishore Vaigyanik Protsahan Yojana (KVPY) is a national program aimed at encouraging students to pursue careers in research. It tests candidates on subjects like Mathematics, Science, and Logical Reasoning."
                />
                <For_Exam_Cards
                  heading="JSTSE"
                  description="Junior Science Talent Search Exam"
                  longDescription="The Junior Science Talent Search Examination (JSTSE) is conducted to identify talented students in the field of science. It evaluates candidates on General Knowledge, Science, and Mathematics."
                />
              </div>
            </div>
          </>
        );
      default:
        return <div>Invalid ID</div>;
    }
  };

  return <>{id_based_rendering({ id })}</>;
}

export default ExamExplore;
