import React from 'react';
import './App.css';
import Scores from './components/Scores/Scores';

export default function App() {
	return (
		<React.StrictMode>
			<div className="App">
				<div className='container'>
					<Scores />
				</div>
			</div >
		</React.StrictMode>
	);
}


