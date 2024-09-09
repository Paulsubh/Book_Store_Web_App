import React from 'react';
import booksimg from '../assets/Booksimg.jpg';

function Banner() {
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='order-2 md:order-1 w-full md-w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold'>
            Discover Your Next Great Read: <span className='text-sky-500'>Bestsellers, Hidden Gems, and Timeless Classics.</span>
          </h1>
          <p className='text-0.2xl font-bold'>
            Welcome to your ultimate online bookstore, where every page turned is an adventure waiting to be explored.
            Dive into a curated collection of bestsellers, uncover hidden gems, and revisit timeless classics that ignite your passion for reading.
            Whether you're a fiction lover, a non-fiction enthusiast, or a seeker of rare finds, our store brings the world of books to your fingertips.
            Start your journey today and discover your next great read!
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:bg-slate-900">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow text-slate-800" placeholder="Email" />
          </label>
        </div>
        <button className="btn mt-6 btn btn-accent">Get started</button>
      </div>

      <div className='order-1 w-full md-w-1/2'>
        <img src={booksimg} className='w-92 h-92' alt="" />
      </div>
    </div>
  </>
  );
}

export default Banner;
