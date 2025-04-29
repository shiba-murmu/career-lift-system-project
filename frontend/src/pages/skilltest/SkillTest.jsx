import React, { useState } from "react";

function SkillTest() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [expertiseLevel, setExpertiseLevel] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [preferredRole, setPreferredRole] = useState("");

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node JS",
    "Express JS",
    "Python",
    "Java",
    "SQL",
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 dark:bg-neutral-900 dark:text-white rounded-lg shadow-lg" style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-[#90caf9]">Skill Test</h1>
      </div>
      <div className="text-gray-600 dark:text-white">
        <p className="mb-4">
          This is the skill test page. You need to select your skills and answer
          the questions to get the best suitable job based on your skills.
        </p>
        <p className="mb-6">
          Please select your skills from the list below and answer the
          questions.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 ">Select Your Skills:</h2>
          <ul className="grid grid-cols-2 gap-4 ">
            {skills.map((skill) => (
              <li
                key={skill}
                className={`p-3 border dark:text-black rounded-lg cursor-pointer ${
                  selectedSkills.includes(skill)
                    ? "bg-green-100 border-green-400 dark:bg-blue-500 dark:border-blue-400"
                    : "bg-white border-gray-300"
                } hover:shadow-md`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6 text-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Questions:</h2>
          <div className="mb-4">
            <label className="block  font-medium mb-2">
              What is your level of expertise in the selected skills?
            </label>
            <input
              type="text"
              value={expertiseLevel}
              onChange={(e) => setExpertiseLevel(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="e.g., Beginner, Intermediate, Expert"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              What is your preferred programming language?
            </label>
            <input
              type="text"
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="e.g., JavaScript, Python"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">
              What is your preferred job role?
            </label>
            <input
              type="text"
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="e.g., Frontend Developer, Data Scientist"
            />
          </div>
        </div>
        <button
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => {
            alert(
              `Selected Skills: ${selectedSkills.join(
                ", "
              )}\nExpertise Level: ${expertiseLevel}\nPreferred Language: ${preferredLanguage}\nPreferred Role: ${preferredRole}`
            );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SkillTest;
