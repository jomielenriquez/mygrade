// GradeLookup.js
import React, { useState } from 'react';
import gradesData from './grades.json';
import "./App.css";

const GradeLookup = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [midtermGrade, setMidtermGrade] = useState('');
  const [finalGrade, setFinalGrade] = useState('');
  const [semesterGrade, setSemesterGrade] = useState('');
  const [semesterNumericGrade, setSemesterNumericGrade] = useState('');
  const [termResult, setTermResult] = useState('');

  const handleStudentNumberChange = (e) => {
    setStudentNumber(e.target.value);
  };

  const handleLookupGrade = () => {
    const student = gradesData.students.find(
      (s) => s.studentNumber === studentNumber
    );

    if (student) {
      // Assuming the JSON structure includes "midtermGrade" and "finalGrade"
      setMidtermGrade(student.midtermGrade || 'N/A');
      setFinalGrade(student.finalGrade || 'N/A');

      // Add logic to calculate semester grade (if available)
      // This is just a placeholder; you should replace it with your actual logic
      setSemesterGrade(student.semGRADE || 'N/A');
      setSemesterNumericGrade(student.NumericGrade || 'N/A')

      setTermResult(student.Remarks || 'N/A');
    } else {
      // Clear values if student not found
      setMidtermGrade('');
      setFinalGrade('Student not found');
      setSemesterGrade('');
      setSemesterNumericGrade('');
      setTermResult('');
    }
  };

  return (
    <div>
        <div className="search">
            <input
                type="text"
                placeholder='Enter student number'
                value={studentNumber}
                onChange={handleStudentNumberChange}
            />
            <button className="submit" onClick={handleLookupGrade}>Lookup Grade</button>
        </div>

        <div className="result">
            <table>
                <tr>
                    <td><strong>Midterm Grade:</strong></td>
                    <td className='gradeValue'>{midtermGrade}</td>
                </tr>
                <tr>
                    <td><strong>Final Grade:</strong></td>
                    <td className='gradeValue'>{finalGrade}</td>
                </tr>
                <tr>
                    <td><strong>Semester Grade:</strong></td>
                    <td className='gradeValue'>{semesterGrade}</td>
                </tr>
                <tr>
                    <td><strong>Numeric Grade:</strong></td>
                    <td className='gradeValue'>{semesterNumericGrade}</td>
                </tr>
                <tr>
                    <td><strong>Term Result:</strong></td>
                    <td className={termResult === "Passed" ? "cssPassed" : "cssFail"}><strong>{termResult}</strong></td>
                </tr>
            </table>
        </div>
    </div>
  );
};

export default GradeLookup;