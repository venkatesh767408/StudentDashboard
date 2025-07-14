import React, { useState } from 'react';
import StudentTb from '../components/StudentTb/StudentTb.jsx';
import StudentDetails from '../components/StudentDetails/StudentDetails.jsx';
import Navbar from '../components/Navbar';
import '../index.css'; // Optional, depending on your styles

const Profilepage = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Profile Page</h1>

      <div className='student-profile-page'>
        <h2 style={{ textAlign: 'center' }}>Student Profiles</h2>

        <div className="profile-content" style={{ display: 'flex', padding: '1rem' }}>
          <StudentTb onSelectStudent={setSelectedStudent} />

          {selectedStudent ? (
            <StudentDetails student={selectedStudent} />
          ) : (
            <div className="placeholder" style={{ marginLeft: '2rem', padding: '1rem' }}>
              Select a student to view details
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profilepage;
