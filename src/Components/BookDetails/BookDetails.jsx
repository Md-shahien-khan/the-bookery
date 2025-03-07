import { q } from 'framer-motion/client';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToLs';

const BookDetails = () => {
    const {bookId} = useParams();
    // console.log(bookId);
    // bookId is coming as a string
    const id = parseInt(bookId);
    const data = useLoaderData();
    // console.log(data);

    const book = data.find(eachBook => eachBook.bookId === id);
    const {bookId : currentBookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;

    // handle mark as read
    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
    }
    return (
        <>
        <h2 className='text-2xl md:text-4xl text-center'>Book Details</h2>
        <div className='my-8 flex flex-col lg:flex-row  gap-x-10'>
            {/* left div img */}
            <div className='lg:w-6/12 border-2'>
                <img className='w-full h-[650px]' src={image} alt="" />
            </div>
            {/* right div info */}
            <div className='lg:w-6/12'>
                <h2 className='text-4xl font-bold'>{bookName}</h2>
                <p className='text-gray-600'>By : {author}</p>
                <div className='border-t-2 border-dashed mt-3'></div>
                <h2 className='text-gray-500 font-bold pt-2'>{category}</h2>
                <div className='border-t-2 border-dashed mt-3'></div>
                <p><span className='font-bold'>Review : </span>{review}</p>
                <div className='flex gap-3'>
                    {
                        tags.map(tag => <button className='btn bg-green-400'>{tag}</button>)
                    }
                </div>
                <div className='border-t-2 border-dashed mt-5 mb-5'></div>
                <p className='text-gray-500'>Number of page : <span className='font-bold text-black'>{totalPages}</span></p>
                <p className='text-gray-500'>Publisher : <span className='font-bold'>{publisher}</span></p>
                <p className='text-gray-500'>Year of Publish : <span className='font-bold'>{yearOfPublishing}</span></p>
                <p className='text-gray-500'>Rating : <span className='font-bold'></span>{rating}</p>
                {/* button */}
                <div className='flex gap-2 mt-3'>
                    <button  onClick={() => handleMarkAsRead(bookId)} className='btn btn-primary text-white'>Mark as read</button>
                    <button onClick={() => handleAddToWishList(bookId)} className='btn btn-accent text-white'>Wish List</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default BookDetails;