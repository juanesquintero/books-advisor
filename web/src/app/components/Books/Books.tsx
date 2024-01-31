import React, { useState, useEffect } from 'react';
import './Books.scss';
import SearchBar from './components/SearchBar/SearchBar';
import BookCard from './components/BookCard/BookCard';
import { IBook } from './Books.types';
import { API_BOOKS_ENDPOINT } from '@app/shared/constants';
import fetchData from '@src/app/shared/helpers/fetchData';

const Books: React.FC = () => {
	const [books, setBooks] = useState<IBook[]>([]);
	useEffect(() => {
		const getBooks = async () => {
			const fetchedBooks = await fetchData(API_BOOKS_ENDPOINT);
			setBooks(fetchedBooks);
		};

		getBooks();
	}, []);
	return (
		<>
			<SearchBar onSearch={setBooks}></SearchBar>
			{books && books.length > 0 ? (
				books.map((book: IBook) => (
					<div key={book.title} className='books__item'>
						<BookCard {...book}></BookCard>
					</div>
				))
			) : (
				<p>No books to show :( </p>
			)}
		</>
	);
};

export default Books;
