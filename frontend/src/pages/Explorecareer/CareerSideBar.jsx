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
      <div>
        <h3 className="text-xl font-bold mb-4">Career Categories</h3>
        <ul className="space-y-2">
          <li className="text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">Software Development</li>
          <li className="text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">Data Science</li>
          <li className="text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">Design</li>
          <li className="text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">Marketing</li>
          <li className="text-blue-800 dark:text-blue-300 hover:underline cursor-pointer">Sales</li>
        </ul>
      </div>
    </>
  )
}

export default CareerSideBar