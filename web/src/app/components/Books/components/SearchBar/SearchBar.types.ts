import { IBook } from '../../Books.types';

export interface SearchBarProps {
	onSearch: (newBooks: IBook[]) => void;
}
