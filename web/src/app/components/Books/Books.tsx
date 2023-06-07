import React from 'react';
import './Books.scss';
import SearchBar from './components/SearchBar/SearchBar';
import BookCard from './components/BookCard/BookCard';
import useFetch from '@src/app/shared/hooks/useFetch';
import { IBook } from './Books.types';

const Books: React.FC = () => {
	const books = useFetch('/books/best-sellers');
	return (
		<>
			<SearchBar></SearchBar>
			{books && books.length > 0 ? (
				books.map((book: IBook) => (
					<div key={book.title} className='books__item'>
						<BookCard {...book}></BookCard>
					</div>
				))
			) : (
				<></>
			)}
		</>
	);
};

export default Books;
