import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Coursespage from './Pages/Coursespage';
import Feedbackpage from './Pages/Feedbackpage';
import Loginpage from './Pages/Login';
import Profilepage from './Pages/Profilepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/feedback" element={<Feedbackpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
