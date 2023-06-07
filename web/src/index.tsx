import React from 'react';
import ReactDOM from 'react-dom/client';
import '@src/index.scss';
import '@src/config/i18n';
import App from '@app/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Books } from './app/components';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='books' element={<Books />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
