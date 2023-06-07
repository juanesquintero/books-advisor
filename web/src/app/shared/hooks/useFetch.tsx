// src/useFetch.jsx

import env from '@src/config/enviroment';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint: string): any => {
	const [data, setData] = useState();

	const getData = async () => {
		try {
			const { data } = await axios.get(env.apiPath + endpoint, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setData(data.data);
		} catch (err) {
			console.log('err', err);
		}
	};

	useEffect(() => {
		getData();
	}, [endpoint]);

	return data;
};

export default useFetch;
