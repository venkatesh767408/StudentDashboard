import React from "react";
import './StudentTb.css';


const students = [
    { name: 'KrishnaPriya', branch: 'CSE', rollNumber: '101', year: '1', email: 'priya@example.com', contact: '1234567890' },
    { name: 'Bhargavi', branch: 'ECE', rollNumber: '102', year: '3', email: 'bharu@example.com', contact: '9876543210' },
    { name: 'Sravani', branch: 'ME', rollNumber: '103', year: '1', email: 'sravani@example.com', contact: '5555555555' },
    { name: 'Raji', branch: 'CS', rollNumber: '104', year: '2', email: 'raji@example.com', contact: '1234567890' },
    { name: 'Vasavi', branch: 'ECE', rollNumber: '105', year: '3', email: 'vasu@example.com', contact: '9876543210' },
    { name: 'Senorita', branch: 'ME', rollNumber: '106', year: '1', email: 'sen@example.com', contact: '5555555555' },
    { name: 'Ashwin', branch: 'CS', rollNumber: '107', year: '2', email: 'ashwin@example.com', contact: '1234567890' },
    { name: 'Uday', branch: 'ECE', rollNumber: '108', year: '3', email: 'uday@example.com', contact: '9876543210' },
    { name: 'Akhil', branch: 'ME', rollNumber: '109', year: '1', email: 'akhil@example.com', contact: '5555555555' },
    { name: 'Arun', branch: 'CS', rollNumber: '110', year: '2', email: 'arun@example.com', contact: '1234567890' },
    { name: 'Johny', branch: 'ECE', rollNumber: '111', year: '3', email: 'johny@example.com', contact: '9876543210' },
    { name: 'Karun', branch: 'ME', rollNumber: '112', year: '1', email: 'pusaluri@example.com', contact: '5555555555' },
]

const StudentTb = ({ onSelectStudent }) => {
    return (
        <div className="table-container">
            <h2>Student List</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Roll Number</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} onClick={() => onSelectStudent(student)} className="clickable-row">
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td>{student.rollNumber}</td>
                            <td>{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default StudentTb;