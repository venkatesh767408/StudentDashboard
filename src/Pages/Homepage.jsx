import React from 'react';
import Header from '../components/Header'; // ✅ FIXED: You missed this!
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="image-side">
          <img
            src="https://jecrcuniversity.edu.in/wp-content/uploads/2023/02/7-THINGS-TO-MAKE-STUDENTS-LIFE-EASIER.jpg"
            alt="Student Life"
            className="student-round-img"
          />
        </div>
        <div className="text-side">
          <h1>Welcome to the Student Portal</h1>
          <p>Your journey to learn, grow and shine starts here. Explore courses, track your profile, and share feedback.</p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
