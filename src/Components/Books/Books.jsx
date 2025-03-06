import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import { motion } from 'framer-motion';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/public/booksData.json')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books data!', error);
            });
    }, []);

    return (
        <div className='mt-10'>
            <h2 className='text-center text-4xl'>Books</h2>
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 50 }}
            >
                {books.map(book => (
                    <motion.div
                        key={book.bookId}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * books.indexOf(book) }}
                    >
                        <Book book={book} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Books;
