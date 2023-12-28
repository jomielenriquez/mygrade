// GradeLookup.js
import React, { useState } from 'react';
import gradesData from './grades.json';

const GradeLookup = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [grade, setGrade] = useState('');

  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);
  };

  const handleLookupGrade = () => {
    const student = gradesData.students.find(
      (s) => s.studentNumber === studentNumber
    );

    if (student) {
      setGrade(student.grade);
    } else {
      setGrade('Student not found');
    }
  };

  return (
    <div>
      <label>
        Enter Student Number:
        <input
          type="text"
          value={studentNumber}
          onChange={handleStudentNumberChange}
        />
      </label>
      <button onClick={handleLookupGrade}>Lookup Grade</button>
      <div>
        <strong>Grade: {grade}</strong>
      </div>
    </div>
  );
};

export default GradeLookup;
