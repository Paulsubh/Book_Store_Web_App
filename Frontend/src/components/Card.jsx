import React from 'react';

function Card({ item }) {
    console.log(item);
    return (
        <div className='mt-5 my-5 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                <figure className="relative">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex items-center justify-between">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-between items-center">
                        <div className="text-xl px-2 py-1 rounded-full border-2">₹{item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-full border-3 hover:bg-sky-500 hover:text-white transition duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
