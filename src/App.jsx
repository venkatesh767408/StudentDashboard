import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  to="/" path={<Loginpage />}>

        </Route>
        <Route  to="/home" path={<Homepage />}>

        </Route>
        <Route to="profile" path={<Profilepage />}></Route>
        <Route to="courses" path={<Coursespage />}></Route>
        <Route to="feedback" path={<Feedbackpage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App