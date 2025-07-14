import React from "react";
import './StudentDetails.css';

const StudentDetails = ({ student }) => {
    return (
        <div className="details-container">
            <h2>Student Details</h2>
            <table className="details-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{student.name}</td>
                    </tr>
                    <tr>
                        <th>Branch</th>
                        <td>{student.branch}</td>
                    </tr>
                    <tr>
                        <th>Roll Number</th>
                        <td>{student.rollNumber}</td>
                    </tr>
                    <tr>
                        <th>Year</th>
                        <td>{student.year}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{student.email}</td>
                    </tr>
                    <tr>
                        <th>Contact</th>
                        <td>{student.contact}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default StudentDetails;