import React from 'react';
import './BookCard.scss';
import Button from '@src/app/common/Button/Button';
import Tag from '@src/app/common/Tag/Tag';
import { IBookCardProps } from './BookCard.types';

const BookCard: React.FC<IBookCardProps> = (book: IBookCardProps) => {
	const { title, description, contributor, author, price, publisher } = book;
	return (
		<section className='book-card'>
			<div>
				<h5>{title}</h5>
				<p>{description}</p>
				<Tag label='Contributor' value={contributor} />
				<Tag label='Author' value={author} />
			</div>

			<div className='book-card-column'>
				<Tag label='Price' value={price} />
				<Tag label='Publisher' value={publisher} />
				<Button
					text='Detail'
					style='outline-dark'
					icon='eye'
					size='sm'
					className='mt-5'
				/>
			</div>
		</section>
	);
};

export default BookCard;
