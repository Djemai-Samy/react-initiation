//Import des composants
import Texte from "../../ui/Texte/Texte";

//Import des classes dans un objet
import classes from "./Header.module.css";

// Composant ReactJS: Une fonction qui retourne des éléments JSX
export default function Header() {
	//Déclarer des variables et constante locales
	const texte = "Je suis un paragraphe.";
	let isJour = true;
	return (
		<header className={classes.container}>
			<h1
				className={classes.texte}
				style={{
					padding: "1em",
					fontWeight: "bold",
					color: isJour ? "royalblue" : "orange",
				}}
			>
				{/* Utiliser condition ternaires dans le JSX*/}
				{isJour ? "Bonjour" : "Bonsoir"} !
			</h1>
			<Texte color="white" bold={false}>
				{/* Utiliser du javascript dans le JSX*/}
				{texte}
			</Texte>
		</header>
	);
}
