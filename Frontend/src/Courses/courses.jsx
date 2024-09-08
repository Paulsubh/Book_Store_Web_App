import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function courses() {
    return (<>
        <div className="py-1.5"><Navbar /></div>
        <div className='min-h-screen'>
            <Course />
        </div>
        <Footer />
    </>
    )
}

export default courses;
