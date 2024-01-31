// src/useFetch.jsx
import { useEffect, useState } from 'react';
import fetchData from '@app/shared/helpers/fetchData';

const useFetch = (endpoint: string): any => {
	const [data, setData] = useState();

	const getData = async () => {
		const res = await fetchData(endpoint);
		setData(res);
	};

	useEffect(() => {
		getData();
	}, [endpoint]);

	return data;
};

export default useFetch;
