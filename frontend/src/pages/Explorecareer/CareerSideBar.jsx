import React from 'react'
/**
 * This component renders the sidebar for the career page.
 * This will be use in the ExploreCareer directory only.
 * @returns 
 * 
 */
function CareerSideBar() {
  return (
    <>
      <div className="md:w-2/12 bg-gray-200 p-4 dark:bg-neutral-800 rounded-r-2xl hidden md:block">
        <h3 className="font-bold mb-4">Sidebar</h3>
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
        </ul>
      </div>
      <div className="md:w-10/12 flex flex-wrap justify-around h-[60vh] md:h-[150vh] overflow-y-scroll bg-white dark:bg-neutral-900">
        {/* Header */}
        {/* Job Cards */}
        <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3">
          {/* ContentCards will be used here */}
        </div>
        <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
          {/* ContentCards will be used here */}
        </div>
        <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
          {/* ContentCards will be used here */}
        </div>
        <div className="flex flex-wrap justify-around p-2 w-[100%] gap-3 ">
          {/* ContentCards will be used here */}
        </div>
      </div>
    </>
  )
}

export default CareerSideBar