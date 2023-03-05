import Composant from "./components/Composant";
import Counter from "./components/Counter";
import ExempleRequete from "./components/ExempleRequete";
import InputWithFocusButton from "./components/InputWithFocusButton";
import MemoComposant from "./components/MemoComposant";
import Parent from "./components/Parent";
import "./style.css";

const App = () => {
	return (
		<>
			<div className="container">
				<h1>ReactJS: Les hooks!</h1>
			</div>
			<div className="container">
				<h2>useContexte</h2>
				<Parent />
			</div>
			<div className="container">
				<h2>useEffect</h2>
				<Composant />
			</div>
			<div className="container">
				<h2>Exemple requete</h2>
				<ExempleRequete />
			</div>
			<div className="container">
				<h2>useRef</h2>
				<InputWithFocusButton />
			</div>
			<div className="container">
				<h2>Exemple Counter</h2>
				<Counter />
			</div>
			<div className="container">
				<h2>useMemo</h2>
				<MemoComposant />
			</div>
		</>
	);
};
export default App;
