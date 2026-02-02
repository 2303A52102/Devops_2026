import React from "react";

function StudentCard({ name, rollNo, marks }) {
  const total = marks.reduce((sum, m) => sum + m, 0);
  const average = total / marks.length;

  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 60) grade = "C";
  else grade = "D";

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Roll No: {rollNo}</p>
      <p>Marks: {marks.join(", ")}</p>
      <p>Total: {total}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default StudentCard;
