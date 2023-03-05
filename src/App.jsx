import Composant from "./components/Composant";
import Compteur from "./components/Compteur";
import Formulaire from "./components/Formulaire";
import "./style.css";

const App = () => {
	return (
		<>
			<div className="container">
				<Composant />
			</div>
			<div className="container">
				<Compteur />
			</div>
			<div className="container">
				<Formulaire />
			</div>
		</>
	);
};
export default App;
