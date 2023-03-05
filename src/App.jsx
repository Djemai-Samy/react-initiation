//Import des composants
import Header from "./components/containers/Header/Header";
import Texte from "./components/ui/Texte/Texte";

// Importer le style
import "./style.css";

function App() {
	// Fonction à executer lors du clique
	function handleClick() {
		alert("Evnement clique déclanché!");
	}

	return (
		<div>
			{/* Afficher un composant*/}
			<Header />

			{/* Envoyer des paramètres à un composant*/}
			<Texte color="green" bold={true}>
				Je suis un paragraphe.
			</Texte>
			<Texte color="red" bold={false}>
				Je suis un autre paragraphe.
			</Texte>

			{/* Lier la fonction avec le gestionnaire d'événement*/}
			<button onClick={handleClick}>Cliquez ici</button>
		</div>
	);
}

export default App;
