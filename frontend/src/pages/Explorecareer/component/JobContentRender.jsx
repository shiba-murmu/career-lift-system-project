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
        {/* 

          This is the sidebar section. You can add any content you want here.
          For example, you can add a list of categories or filters for the job search.

          this sidbar will be hidden on mobile devices and will only be visible on larger screens.
          You can customize the content of the sidebar as per your requirements.
        
        */}
        {/* Sidebar */}
        <div className="md:w-2/12 bg-gray-200 p-4 dark:bg-neutral-800 rounded-r-2xl hidden md:block">
        <CareerSideBar />
          {/* <h3 className="font-bold mb-4">Sidebar</h3>

          <ul>
            <li className="mb-2">
              <a href="#">Option 1</a>
            </li>
            <li className="mb-2">
              <a href="#">Option 2</a>
            </li>
            <li className="mb-2">
              <a href="#">Option 3</a>
            </li>
            <li className="mb-2">
              <a href="#">Option 3</a>
            </li>
          </ul> */}

        </div>

        {/* Main Content */}

        {/* 
          This is the main content section where the job cards will be displayed.
          The job cards will be rendered in a grid layout using flexbox.

          The main content will take up 10/12 of the width on larger screens and 100% on smaller screens.
          The job cards will be displayed in a scrollable container with a fixed height.
          You can customize the styles and layout as per your requirements.

          It will be hidden on mobile devices and will only be visible on larger screens.
        
        */}
        <div className="md:w-10/12 flex flex-wrap justify-around  md:min-h-[80vh] bg-white dark:bg-neutral-900">
          {/* Header */}
          {/* Job Cards */}
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
            <ContentCards />
            <ContentCards />
            <ContentCards />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div>
        <div className="md:hidden flex flex-wrap justify-around min-h-[60vh] md:h-[150vh]  bg-white dark:bg-neutral-900">
          <div className="flex flex-wrap justify-around p-2  w-[100%] gap-5">
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-5 ">
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-5 ">
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
          </div>
          <div className="flex flex-wrap justify-around p-2 w-[100%] gap-5 ">
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
            <TextShow>
              <ContentCards />
            </TextShow>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobContentRender;
