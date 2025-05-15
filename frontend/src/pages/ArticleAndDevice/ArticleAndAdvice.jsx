import React from 'react';

function ArticleAndAdvice() {
  // this is a functional component that renders the Article and Advice page
  // it contains a header, a description, and a grid of articles and advice cards
  // each card contains a title and a brief description
  

  // this page will be design later.. when the backend is ready..
  // for now, it will be a placeholder page with some dummy content
  return (
    <div className="bg-[#e0e8ff] dark:bg-neutral-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-amber-400 mb-4">Article and Advice</h1>
        <p className="text-gray-600 dark:text-white mb-6">
          Welcome to the Article and Advice section. Here, you'll find helpful articles and tips to guide you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800 dark:text-amber-400">Article 1</h2>
            <p className="text-blue-700 dark:text-white mt-2">
              Learn about the latest trends and insights in the industry.
            </p>
          </div>
          <div className="bg-green-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800 dark:text-amber-400">Advice 1</h2>
            <p className="text-green-700 dark:text-white mt-2">
              Get practical advice to improve your workflow and productivity.
            </p>
          </div>
          <div className="bg-yellow-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-800 dark:text-amber-400">Article 2</h2>
            <p className="text-yellow-700 dark:text-white mt-2">
              Explore in-depth guides and tutorials for your projects.
            </p>
          </div>
          <div className="bg-red-100 dark:bg-neutral-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-800 dark:text-amber-400">Advice 2</h2>
            <p className="text-red-700 dark:text-white mt-2">
              Discover tips to overcome common challenges in your field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAndAdvice;