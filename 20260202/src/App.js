import React from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rahul",
      rollNo: 101,
      marks: [85, 78, 90]
    },
    {
      name: "Anita",
      rollNo: 102,
      marks: [92, 88, 95]
    }
  ];

  return (
    <div className="app">
      <h1>Student Marks Card</h1>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          rollNo={student.rollNo}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;
