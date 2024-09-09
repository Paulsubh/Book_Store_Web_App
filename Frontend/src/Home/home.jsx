import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeBook from '../components/FreeBook'
import Footer from '../components/Footer'

function home() {
    return (
        <>
            <div className="py-5"><Navbar /></div>
            <div className='min-h-screen'><Banner />
            <FreeBook /></div>
            <Footer />
        </>
    )
}

export default home;
