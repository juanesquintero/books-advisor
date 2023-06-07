export interface IBook {
	id: string;
	title: string;
	description: string;
	contributor: string;
	author: string;
	contributor_note: string;
	price: string;
	age_group: string;
	publisher: string;
	isbns: Record<string, string>[];
	ranks_history: Record<string, string>[];
	reviews: Record<string, string>[];
}
