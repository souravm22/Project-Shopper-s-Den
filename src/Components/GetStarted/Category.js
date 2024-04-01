import React from 'react';
import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Footer from './Footer';

function Category() {
  const [item, setItem] = useState([]);
  const [show, setShow] = useState(true);
  let navigate = useNavigate();

  async function fetchData() {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    setItem(data.products);
    setShow(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show only 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const lapi = item.filter((x) => x.category === 'laptops');
  const smartph = item.filter((x) => x.category === 'smartphones');
  const groc = item.filter((x) => x.category === 'groceries');
  const frag = item.filter((x) => x.category === 'fragrances');
  

  return (
    <>
      <div>
        <Navbar />
        <div className=' py-3 w-full text-center bg-slate-400 text-black dark:bg-slate-900 dark:text-white text-xl'>
            Hey user, Click on the images to view the products...
        </div>
        <div>
          <div className=' w-full text-center font-extrabold text-3xl  py-3 bg-slate-400 text-black dark:bg-slate-900 dark:text-white'>LAPTOPS</div>
          <Slider {...sliderSettings}>
            {lapi.map((x) => (
              <div
                
                className='mx-2 bg-slate-50 shadow-lg hover:border-4 dark:bg-black my-0 flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 p-1 w-[calc((100% - 40px) / 3)] h-[400px] dark:text-white'
              >
                {/* <div className='overflow-y-hidden absolute top-0 left-0 w-full text-sm z-4 bg-orange-500 text-black py-1 px-2 rounded-tr-md rounded-bl-md font-extrabold uppercase'>
                  {x.category}
                </div> */}
                <div onClick={() => navigate(`/prod/${x.id}`)}
                key={x.id} className='w-full mt-0 flex mb-2'>

                  <img className='w-full h-[250px] object-contain mt-0' src={x.thumbnail} alt={x.title} />
                </div>
                <div className='text-xl dark:text-white text-black font-madimi font-extrabold uppercase'>{x.title}</div>
                <div className='text-xl dark:text-white text-black font-serif font-bold'>Brand: {x.brand}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Price: {x.price}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Rating: {x.rating}</div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <div className=' w-full text-center font-extrabold text-3xl  py-3 bg-slate-400 text-black dark:bg-slate-900 dark:text-white'>SMARTPHONES</div>
          <Slider {...sliderSettings}>
            {smartph.map((x) => (
              <div
                
                className='mx-2 bg-slate-50 shadow-lg hover:border-4 dark:bg-black my-0 flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 p-1 w-[calc((100% - 40px) / 3)] h-[400px] dark:text-white'
              >
                {/* <div className='overflow-y-hidden absolute top-0 left-0 w-full text-sm z-4 bg-orange-500 text-black py-1 px-2 rounded-tr-md rounded-bl-md font-extrabold uppercase'>
                  {x.category}
                </div> */}
                <div onClick={() => navigate(`/prod/${x.id}`)}
                key={x.id} className='w-full mt-0 flex mb-2'>

                  <img className='w-full h-[250px] object-contain mt-0' src={x.thumbnail} alt={x.title} />
                </div>
                <div className='text-xl dark:text-white text-black font-madimi font-extrabold uppercase'>{x.title}</div>
                <div className='text-xl dark:text-white text-black font-serif font-bold'>Brand: {x.brand}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Price: {x.price}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Rating: {x.rating}</div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <div className=' w-full text-center font-extrabold text-3xl  py-3 bg-slate-400 text-black dark:bg-slate-900 dark:text-white'>GROCERIES</div>
          <Slider {...sliderSettings}>
            {groc.map((x) => (
              <div
                
                className='mx-2 bg-slate-50 shadow-lg hover:border-4 dark:bg-black my-0 flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 p-1 w-[calc((100% - 40px) / 3)] h-[400px] dark:text-white'
              >
                {/* <div className='overflow-y-hidden absolute top-0 left-0 w-full text-sm z-4 bg-orange-500 text-black py-1 px-2 rounded-tr-md rounded-bl-md font-extrabold uppercase'>
                  {x.category}
                </div> */}
                <div onClick={() => navigate(`/prod/${x.id}`)}
                key={x.id} className='w-full mt-0 flex mb-2'>

                  <img className='w-full h-[250px] object-contain mt-0' src={x.thumbnail} alt={x.title} />
                </div>
                <div className='text-xl dark:text-white text-black font-madimi font-extrabold uppercase'>{x.title}</div>
                <div className='text-xl dark:text-white text-black font-serif font-bold'>Brand: {x.brand}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Price: {x.price}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Rating: {x.rating}</div>
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <div className=' w-full text-center font-extrabold text-3xl  py-3 bg-slate-400 text-black dark:bg-slate-900 dark:text-white'>FRAGNANCES</div>
          <Slider {...sliderSettings}>
            {frag.map((x) => (
              <div
                
                className='mx-2 bg-slate-50 shadow-lg hover:border-4 dark:bg-black my-0 flex flex-col cursor-pointer hover:scale-105 transition-all duration-300 p-1 w-[calc((100% - 40px) / 3)] h-[400px] dark:text-white'
              >
                {/* <div className='overflow-y-hidden absolute top-0 left-0 w-full text-sm z-4 bg-orange-500 text-black py-1 px-2 rounded-tr-md rounded-bl-md font-extrabold uppercase'>
                  {x.category}
                </div> */}
                <div onClick={() => navigate(`/prod/${x.id}`)}
                key={x.id} className='w-full mt-0 flex mb-2'>

                  <img className='w-full h-[250px] object-contain mt-0' src={x.thumbnail} alt={x.title} />
                </div>
                <div className='text-xl dark:text-white text-black font-madimi font-extrabold uppercase'>{x.title}</div>
                <div className='text-xl dark:text-white text-black font-serif font-bold'>Brand: {x.brand}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Price: {x.price}</div>
                <div className='text-xl dark:text-white text-black font-bold'>Rating: {x.rating}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Category;
