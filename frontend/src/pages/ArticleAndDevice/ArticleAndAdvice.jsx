import React from 'react';

function ArticleAndAdvice() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Article and Advice</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the Article and Advice section. Here, you'll find helpful articles and tips to guide you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800">Article 1</h2>
            <p className="text-blue-700 mt-2">
              Learn about the latest trends and insights in the industry.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800">Advice 1</h2>
            <p className="text-green-700 mt-2">
              Get practical advice to improve your workflow and productivity.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-yellow-800">Article 2</h2>
            <p className="text-yellow-700 mt-2">
              Explore in-depth guides and tutorials for your projects.
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-red-800">Advice 2</h2>
            <p className="text-red-700 mt-2">
              Discover tips to overcome common challenges in your field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAndAdvice;