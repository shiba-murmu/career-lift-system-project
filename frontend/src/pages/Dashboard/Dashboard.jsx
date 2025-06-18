import React from "react";
import Logout from "../../components/Logout/Logout";
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        {/* <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300">
          Logout
        </button> */}
        <Logout />
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800">Statistics</h2>
            <p className="text-gray-600 mt-2">
              View your performance metrics here.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800">Tasks</h2>
            <p className="text-gray-600 mt-2">
              Manage your tasks and to-do list.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
            <p className="text-gray-600 mt-2">Check your latest messages.</p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white shadow-md py-4 px-6 text-center text-gray-600">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
