import { useState } from "react";

function Composant() {
	const [laVariable, setLaVariable] = useState("Valeur initiale");

	// Afficher la variable a chaque rendu:
	console.log("Composant rendu: ", laVariable);

	// Fonction executée lors du clique
	function handleChangeLaVariable() {
		// Utiliser la fonction pour modifier la variable
		setLaVariable("Valeur modifiée");

		// Afficher la variable après l'avoir changé
		console.log("Après changement: ", laVariable);
	}

	return (
		<div>
			<h2>Variables D'état</h2>
			{/* Lire la variable */}
			<p>{laVariable}</p>

			{/* Lier la fonction avec la bouton */}
			<button onClick={handleChangeLaVariable}>Cliquez ici pour changer le texte</button>
		</div>
	);
}

export default Composant;
