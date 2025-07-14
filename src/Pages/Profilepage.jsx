import React from 'react';
import { useState } from 'react';
import StudentTb from '../components/StudentTb/StudentTb.jsx';
import StudentDetails from '../components/StudentDetails/StudentDetails.jsx';
// import '../styles/Profilepage.css';
import '../index.css'
const Profilepage = () => {
  const [selectedStudent, setselectedStudent] = useState(null);
  return (
    <div className='student-profile-page'>
      <h1>Student Profiles</h1>
      <div className="profile-content">
        <StudentTb onSelectStudent={setselectedStudent} />
        {selectedStudent ? (
          <StudentDetails student={selectedStudent} />
        ) : (
          <div className="placeholder">
            Select a student to view details
          </div>
        )}
      </div>
    </div>
  )
};

export default Profilepage;