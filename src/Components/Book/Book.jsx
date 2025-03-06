import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-2">
        <figure className='bg-slate-200 rounded-none py-8'>
            <img
            src={image}
            className='h-[200px] md:h-[400px]'
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {bookName}
            <div className="badge bg-green-400">{rating}</div>
            </h2>
            <div className='border-t-2 border-dashed'></div>
            <p>{author}</p>
            <div className='flex gap-2'>
                {
                    tags.map((tag, index) => <button key={index} className='btn btn-xs'>{tag}</button>)
                }
            </div>
            <div className="card-actions justify-start">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{yearOfPublishing}</div>
            </div>
            <Link to={`/books/${bookId}'`}><button className='btn bg-green-400'>See Details</button></Link>
        </div>
        </div>
    );
};

export default Book;