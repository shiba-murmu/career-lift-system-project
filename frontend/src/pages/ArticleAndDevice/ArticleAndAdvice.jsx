import React from "react";

function ArticleAndAdvice() {
  // this is a functional component that renders the Article and Advice page
  // it contains a header, a description, and a grid of articles and advice cards
  // each card contains a title and a brief description

  // this page will be design later.. when the backend is ready..
  // for now, it will be a placeholder page with some dummy content
  return (
    <div className="bg-[#e0e8ff] dark:bg-neutral-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-amber-400 mb-4">
          Article and Advice
        </h1>
        <p className="text-gray-600 dark:text-white mb-6">
          Welcome to the Article and Advice section. Here, you'll find helpful
          articles and tips to guide you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 dark:text-amber-400">
              Article 1: 10 Web Development Trends to Watch in 2023
            </h2>
            <p className="text-blue-700 dark:text-white mt-2">
              Learn about the latest trends and technologies in web development,
              from AI-assisted coding tools to serverless architecture. This
              article will help you stay up-to-date with the latest advancements
              in the field and give you a competitive edge in your projects.
              <br />
              <br />
              <a
                href="https://www.freecodecamp.org/news/10-web-development-trends-to-watch-in-2023-9c7b6db/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </p>
          </div>
          {/* <div className="bg-green-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800 dark:text-amber-400">Advice 1</h2>
            <p className="text-green-700 dark:text-white mt-2">
              Get practical advice to improve your workflow and productivity.
            </p>
          </div> */}
          <div className="bg-blue-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 dark:text-amber-400">
              Article 2: How to Boost Your Productivity with a Task List
            </h2>
            <p className="text-blue-700 dark:text-white mt-2">
              Learn how to create a task list that works best for you, and how
              to prioritize your tasks for maximum efficiency.
              <br />
              <br />
              <a
                href="https://www.freecodecamp.org/news/how-to-boost-your-productivity-with-a-task-list-8e7b1f/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </p>
          </div>
          <div className="bg-yellow-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-amber-400">
              Article 2: How to Build a Weather App with React and APIs
            </h2>
            <p className="text-yellow-700 dark:text-white mt-2">
              Learn how to create a weather app using React, Fetch API, and
              OpenWeatherMap API.
              <br />
              <br />
              <a
                href="https://www.freecodecamp.org/news/how-to-build-a-weather-app-with-react-and-apis-4a7d4f/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </p>
          </div>
          <div className="bg-red-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-800 dark:text-amber-400">
              Article 3: How to Build a Simple CRUD App with React and Firebase
            </h2>
            <p className="text-red-700 dark:text-white mt-2">
              Learn how to create a simple CRUD (Create, Read, Update, Delete)
              app using React, Firebase, and Firestore.
              <br />
              <br />
              <a
                href="https://www.freecodecamp.org/news/how-to-build-a-simple-crud-app-with-react-and-firebase-4a8b1f/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </p>
          </div>
          <div className="bg-green-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800 dark:text-amber-400">
              Article 4: The Best Way to Learn React: A Step-by-Step Guide
            </h2>
            <p className="text-green-700 dark:text-white mt-2">
              Follow a step-by-step guide to learn React, from the basics to
              advanced concepts.
              <br />
              <br />
              <a
                href="https://www.freecodecamp.org/news/the-best-way-to-learn-react-a-step-by-step-guide-8e8b1f/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAndAdvice;
