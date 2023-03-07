import "./style.css"; //Import du style globale

//Import des composants basiques de navigation
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//Import des composants pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/pages/User";

export default function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about">A propos</Link>
				<Link to="/user/1">User 1</Link>
				<Link to="/user/2">User 2</Link>
			</nav>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/user/:id" element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}
