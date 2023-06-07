import React, { useState } from 'react';
import './SearchBar.scss';
import Button from '@src/app/common/Button/Button';
import Input from '@src/app/common/Input/Input';
import { SearchBarProps } from './SearchBar.types';
import fetchData from '@app/shared/helpers/fetchData';
import { API_BOOKS_ENDPOINT } from '@app/shared/constants';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [publisher, setPublisher] = useState<string>('');

	const updateBooks = async (path: string) => {
		onSearch(await fetchData(path));
	};

	const handleOnSearch = async () => {
		let path = API_BOOKS_ENDPOINT;
		if (publisher.trim()) {
			path += `?publisher=${publisher}`;
		}
		await updateBooks(path);
	};

	const handleInputChange = async (e) => {
		const text = e.target.value;
		setPublisher(text);
		if (!text.trim()) {
			await updateBooks(API_BOOKS_ENDPOINT);
		}
	};
	return (
		<section className='search-bar'>
			<span className='search-bar-column'>
				<strong>Publisher:</strong>
				<Input
					className='search-bar__input'
					type='text'
					size='sm'
					onChange={handleInputChange}
				/>
				<Button
					text='Search'
					style='light'
					size='sm'
					className='m-3'
					onClick={handleOnSearch}
				/>
			</span>
		</section>
	);
};

export default SearchBar;
