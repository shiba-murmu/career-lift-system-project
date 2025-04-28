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
    <div
      className="skilltest-container"
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="skilltest-header"
        style={{ marginBottom: "20px", textAlign: "center" }}
      >
        <h1
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Skill Test
        </h1>
      </div>
      <div
        className="skilltest-body"
        style={{ fontFamily: "'Raleway', sans-serif", color: "#666" }}
      >
        <p>
          This is the skill test page. You need to select your skills and answer
          the questions to get the best suitable job based on your skills.
        </p>
        <p>
          Please select your skills from the list below and answer the
          questions.
        </p>
        <div className="skilltest-skills" style={{ marginTop: "20px" }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Select Your Skills:
          </h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {skills.map((skill) => (
              <li
                key={skill}
                style={{
                  padding: "10px",
                  marginBottom: "5px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: selectedSkills.includes(skill)
                    ? "#d1e7dd"
                    : "#fff",
                  cursor: "pointer",
                }}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="skilltest-questions" style={{ marginTop: "20px" }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Questions:
          </h2>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              What is your level of expertise in the selected skills?
            </label>
            <input
              type="text"
              value={expertiseLevel}
              onChange={(e) => setExpertiseLevel(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
              placeholder="e.g., Beginner, Intermediate, Expert"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              What is your preferred programming language?
            </label>
            <input
              type="text"
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
              placeholder="e.g., JavaScript, Python"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              What is your preferred job role?
            </label>
            <input
              type="text"
              value={preferredRole}
              onChange={(e) => setPreferredRole(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
              placeholder="e.g., Frontend Developer, Data Scientist"
            />
          </div>
        </div>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
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
