import React from 'react';
import Home from "./Home/home";
import Courses from './Courses/courses';
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Contact from '../src/Contact/contact';
function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </>

  )
}

export default App;
