import env from '@src/config/enviroment';
import axios from 'axios';

const fetchData = async (endpoint: string) => {
	try {
		const { data } = await axios.get(env.apiPath + endpoint, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return data.data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export default fetchData;
