import { useState } from "react";

function Compteur() {
	const [leCompteur, setLeCompteur] = useState(0);

	// 1. Fonction executée lors du clique sur -1
	function handleDecrementation() {
		// 1.1. Fonction pour modifier la variable
		setLeCompteur(leCompteur - 1);
	}

	// 2. Fonction executée lors du clique sur +1
	function handleIncrementation() {
		// 2.1. Fonction pour modifier la variable
		setLeCompteur(leCompteur + 1);
	}

	return (
		<div>
			<h2>Le Compteur</h2>
			{/* 3. Lire la variable*/}
			<p>{leCompteur}</p>

			{/* 4. Lier la fonction de decrementation*/}
			<button onClick={handleDecrementation}>-1</button>

			{/* 5 Lier la fonction d'incrementation*/}
			<button onClick={handleIncrementation}>+1</button>
		</div>
	);
}
export default Compteur;
