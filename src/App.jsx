import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AboutPage from './pages/about/AboutPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<AboutPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
