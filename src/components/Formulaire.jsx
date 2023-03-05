import { useState } from "react";

function Formulaire() {
	// Déclarer la variable d'état et sont setter
	const [texte, setTexte] = useState("");

	// Variable d'état pour l'erreur initialisée à vide
	const [texteError, setTexteError] = useState("");

	// Fonction executée pour chaque frappe
	function handleTexteChange(e) {
		// Récupere la valeur du champs
		const texteEntre = e.target.value;
		// Assigne la nouvelle valeur à la variable
		setTexte(texteEntre);

		// Vider les erreurs
		setTexteError("");

		// Gestion des erreurs
		if (texteEntre.length < 3) {
			setTexteError("Le texte est trop court!");
		}
		if (texteEntre.length > 10) {
			setTexteError("Le texte est trop long!");
		}
	}

	//Fonction executée lors d'un clique
	function viderTexte() {
		// Vider la variable d'état
		setTexte("");

		// Vider les erreurs
		setTexteError("");
	}

	return (
		<div>
			<h2>Formulaire controlé</h2>

			{/* Afficher la valeur de la variable */}
			<p>{texte}</p>

			{/* Lier la fonction de mise à jour et la valeur de la variable */}
			<input onChange={handleTexteChange} value={texte} />

			{/* Afficher le message d'erreur */}
			<p>{texteError}</p>

			{/* Bouton pour vider le texte */}
			<button onClick={viderTexte}>Vider le texte</button>
		</div>
	);
}
export default Formulaire;
