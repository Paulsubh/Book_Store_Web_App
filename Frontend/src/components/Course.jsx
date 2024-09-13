import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Course() {
    const[Book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try{
                const res=await axios.get("https://book-store-web-app-vmh8.onrender.com/books");
                console.log(res.data)
                setBook(res.data)
            }catch(error){
                console.log(error)
            }
        }
        getBook();
    },[])
    return (<>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl font-bold md:text-3xl'>
                    We're Happy to <span className='text-sky-500'>have you!😇</span></h1>
                    <p className='mt-12'>
                    "Our books are crafted to empower readers of all levels with practical knowledge and insights across a variety of subjects. 
                    From beginner-friendly introductions to advanced, specialized topics, each book is designed to provide a comprehensive and engaging reading experience. 
                    With expert authors, clear explanations, and real-world applications, you'll gain the tools and understanding needed to excel in your field."
                    </p>
                    <Link to="/">
                    <button className="btn btn-accent mt-5">Back</button>
                    </Link>
            </div>
            <div className='mt-12 grid gri-cols-1 md:grid-cols-4 ease-in-out'>
                {
                    Book.map((item)=>(
                        <Card key = {item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
    )
}

export default Course;
