import Navbar from '../components/Navbar'
import Contact from '../components/contact'
import React from 'react'
import Footer from '../components/Footer'

export default function contact() {
    return (
        <>

            <div className="py-1.5"><Navbar /></div>

            <div className='min-h-screen'><Contact/></div>

            <Footer />
        </>
    )
}
