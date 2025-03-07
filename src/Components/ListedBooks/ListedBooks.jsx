import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList,  }from '../../Utility/addToLs'; 
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        // Get Read List from localStorage
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

        // Get Wish List from localStorage
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishBookList);
    }, [allBooks]);

    const handleSort = sortType => {
        setSort(sortType);

        // Sort Read List
        if (sortType === 'No of pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }

        // Sort Wish List
        if (sortType === 'No of pages') {
            const sortedWishList = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
            setWishList(sortedWishList);
        }

        if (sortType === 'Ratings') {
            const sortedWishList = [...wishList].sort((a, b) => a.rating - b.rating);
            setWishList(sortedWishList);
        }
    };

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort by: ${sort}` : 'Sort by'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}>
                        <a>Ratings</a>
                    </li>
                    <li onClick={() => handleSort('No of pages')}>
                        <a>No of pages</a>
                    </li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                {/* Read List Tab */}
                <TabPanel>
                    <h2 className="text-2xl">Books I read: {readList.length}</h2>
                    {readList.map(book => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </TabPanel>

                {/* Wish List Tab */}
                <TabPanel>
                    <h2 className="text-2xl">My wish list: {wishList.length}</h2>
                    {wishList.map(book => (
                        <Book key={book.bookId} book={book}></Book>
                    ))}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
