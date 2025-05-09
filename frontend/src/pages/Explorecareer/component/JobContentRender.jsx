import React from "react";
import ContentCards from "../../../components/ContentCard/ContentCards";
import CareerSideBar from "../CareerSideBar";
function JobContentRender({ id }) {
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
  /**
   *  Applying id based rendering now..
   *
   */

  const id__based__rendering = (id) => {
    switch (id) {
      case "1":
        return (
          <>
            <FilterBox />
            <div className="text-center">Recommended jobs for you</div>

            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800  hidden md:block">
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
                  <ContentCards heading="Graphics Designer" />
                  <ContentCards heading="Data Scientist" />
                  <ContentCards heading="Product Manager" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
                  <ContentCards heading="Graphic Designer" />
                  <ContentCards heading="Data Manager" />
                  <ContentCards heading="Database Administer" />
                  <ContentCards heading="Software Tester" />
                  <ContentCards heading="Tester" />
                </div>
              </div>
            </div>
          </>
        );
      case "2":
        return (
          <>
            <FilterBox />
            <div className="text-center">Intermediate level jobs for you</div>

            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>

              {/* Main Content */}
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Junior Accountant" />
                  <ContentCards heading="Sales Executive" />
                  <ContentCards heading="Customer Support Representative" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Office Assistant" />
                  <ContentCards heading="Data Entry Operator" />
                  <ContentCards heading="Retail Associate" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Telecaller" />
                  <ContentCards heading="Receptionist" />
                  <ContentCards heading="Field Sales Representative" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Warehouse Assistant" />
                  <ContentCards heading="Delivery Executive" />
                  <ContentCards heading="Junior Technician" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Clerk" />
                  <ContentCards heading="Inventory Manager" />
                  <ContentCards heading="Assistant Librarian" />
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around min-h-[60vh] md:h-[150vh] bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
                  <ContentCards heading="Junior Accountant" />
                  <ContentCards heading="Sales Executive" />
                  <ContentCards heading="Customer Support Representative" />
                  <ContentCards heading="Office Assistant" />
                  <ContentCards heading="Data Entry Operator" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
                  <ContentCards heading="Retail Associate" />
                  <ContentCards heading="Telecaller" />
                  <ContentCards heading="Receptionist" />
                  <ContentCards heading="Field Sales Representative" />
                  <ContentCards heading="Warehouse Assistant" />
                </div>
              </div>
            </div>
          </>
        );
      case "3":
        return (
          <>
            <FilterBox />
            <div className="text-center">Matriculation level jobs for you</div>

            <div className="md:flex hidden md:gap-4 mt-4">
              {/* Sidebar */}
              <div className="md:w-2/12 bg-[#e0e8ff] p-4 dark:bg-neutral-800 hidden md:block">
                <CareerSideBar />
              </div>

              {/* Main Content */}
              <div className="md:w-10/12 flex flex-wrap justify-around md:h-[100vh] overflow-y-scroll bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Delivery Boy" />
                  <ContentCards heading="Office Helper" />
                  <ContentCards heading="Security Guard" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Peon" />
                  <ContentCards heading="Housekeeping Staff" />
                  <ContentCards heading="Gardener" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Driver" />
                  <ContentCards heading="Warehouse Worker" />
                  <ContentCards heading="Courier Delivery" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Factory Worker" />
                  <ContentCards heading="Cleaner" />
                  <ContentCards heading="Helper" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
                  <ContentCards heading="Packager" />
                  <ContentCards heading="Loader" />
                  <ContentCards heading="Sweeper" />
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div>
              <div className="md:hidden flex flex-wrap justify-around min-h-[60vh] md:h-[150vh] bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
                  <ContentCards heading="Delivery Boy" />
                  <ContentCards heading="Office Helper" />
                  <ContentCards heading="Security Guard" />
                  <ContentCards heading="Peon" />
                  <ContentCards heading="Housekeeping Staff" />
                </div>
                <div className="flex flex-wrap justify-around p-2 w-[100%] gap-2">
                  <ContentCards heading="Gardener" />
                  <ContentCards heading="Driver" />
                  <ContentCards heading="Warehouse Worker" />
                  <ContentCards heading="Courier Delivery" />
                  <ContentCards heading="Factory Worker" />
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return <>{id__based__rendering(id)}</>;
}

export default JobContentRender;
