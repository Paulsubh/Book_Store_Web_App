import React from 'react';
import Home from "./Home/home"
import Courses from './Courses/courses';
import {Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Contact from './Contact/contact';
import { useAuth } from './Context/AuthProvider';
import { Toaster } from '../node_modules/react-hot-toast/dist/index';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Toaster />
      </div>

    </>

  )
}

export default App;
