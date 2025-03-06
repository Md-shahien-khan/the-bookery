import React from 'react';
import bannerImg from '../../assets/images/banner2.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div 
            className='h-[400px] md:h-[560px] flex items-center justify-center bg-cover bg-center' 
            style={{backgroundImage: `url(${bannerImg})`}}
        >
            <div className='text-white text-center'>
                <h2 className='text-3xl md:text-7xl font-bold'>The Bookery</h2>
                <p className='text-xs md:text-lg w-2/4 mx-auto'>Welcome to The Bookery, your one-stop destination for all things books! Whether you're a passionate reader or looking for the perfect gift, we offer a wide variety of genres, from timeless classics to the latest bestsellers.</p>
                <button className='btn mt-2'><Link>Buy Now</Link></button>
            </div>
        </div>
    );
};

export default Banner;
