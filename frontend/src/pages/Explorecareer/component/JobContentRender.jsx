import React from "react";
import ContentCards from "../../../components/ContentCard/ContentCards";
import TextShow from "../../../components/animation/TextShow";
import CareerSideBar from "../CareerSideBar";
function JobContentRender() {
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
      <div className="text-center">Recommended jobs for you</div>

      <div className="md:flex hidden md:gap-4 mt-4">
        {/* Sidebar */}
        <div className="md:w-2/12 bg-gray-200 p-4 dark:bg-neutral-800 rounded-r-2xl hidden md:block">
          <CareerSideBar />
        </div>

        {/* Main Content */}
        <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
            <ContentCards heading="UX/UI Designer" />
            <ContentCards heading="Software Engineer" />
            <ContentCards heading="Data Scientist" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards heading="Product Manager" />
            <ContentCards heading="Graphic Designer" />
            <ContentCards heading="Marketing Specialist" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards heading="DevOps Engineer" />
            <ContentCards heading="Business Analyst" />
            <ContentCards heading="Content Writer" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards heading="Cybersecurity Analyst" />
            <ContentCards heading="Quality Assurance Tester" />
            <ContentCards heading="Database Administrator" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards heading="Mobile App Developer" />
            <ContentCards heading="Cloud Architect" />
            <ContentCards heading="AI/ML Engineer" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="md:hidden flex flex-wrap justify-around min-h-[60vh] md:h-[150vh] bg-white dark:bg-neutral-900">
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
              <ContentCards heading="UI/UX designer" />
              <ContentCards heading="Software Engineer" />
              <ContentCards heading="Graphics Designer"/>
              <ContentCards heading="Data Scientist" />
              <ContentCards heading="Product Manager" />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
              <ContentCards heading="Graphic Designer" />
              <ContentCards heading="Data Manager"/>
              <ContentCards heading="Database Administer"/>
              <ContentCards heading="Software Tester" />
              <ContentCards heading="Tester"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobContentRender;
