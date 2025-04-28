import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-6">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-blue-600">About Us</h1>
            <p className="text-lg text-gray-600 mt-2">
              Learn more about who we are and what we do.
            </p>
          </header>

          {/* Introduction Section */}
          <section className="mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
              <p className="text-gray-600 mt-4">
                Career Lift is an online platform dedicated to helping students
                discover their ideal career paths. We aim to bridge the gap
                between students and career opportunities by providing valuable
                resources and guidance.
              </p>
              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Career Lift"
                className="mt-6 rounded-lg shadow-md text-center"
                style={{width: '100%', height: 'auto'}}
              />
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-8">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
              <p className="text-gray-600 mt-4">
                Our vision is to become the most trusted and widely used
                platform for students to find their career paths. We strive to
                empower students to make informed decisions about their future.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-8">
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
              <p className="text-gray-600 mt-4">
                Our mission is to provide students with the tools, resources,
                and opportunities they need to explore and prepare for their
                careers. We are committed to supporting students every step of
                the way.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-3xl font-bold text-blue-600">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Empowerment: Helping students take charge of their future.</li>
                <li>Integrity: Building trust through transparency and honesty.</li>
                <li>Innovation: Continuously improving to meet student needs.</li>
                <li>Collaboration: Partnering with organizations to create opportunities.</li>
              </ul>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center mt-12">
            <h2 className="text-3xl font-bold text-blue-600">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 mt-4">
              Join Career Lift today and take the first step toward your dream
              career.
            </p>
            <Link to="/signup" className="mt-6 inline-block">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700">
                Sign Up Now
              </button>
            </Link>
            <p className="text-gray-600 mt-4">or</p>
            <Link to="/login" className="mt-6 inline-block">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700">
                Log In
              </button>
            </Link>
           
          </section>
        </div>
      </div>
    </>
  );
}

export default About;