import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card.jsx';
import axios from 'axios'


function FreeBook() {
  const [Book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5001/books");
        setBook(res.data.filter((data) => data.category === "Free"))
        console.log(res.setBook);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div>
            <h1 className='font-bold text-xl pb-2'>Free Books!</h1>
            <p>Discover a diverse collection of free books on our website, from captivating fiction to insightful non-fiction and practical guides.
              Start reading today and expand your horizons with just a click—completely free!
            </p>
          </div>

          <div>
            <Slider {...settings}>
              {Book.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }

  export default FreeBook;
