import { IBook } from './../../Books.types';

export type IBookCardProps = Omit<IBook, 'id'>;
