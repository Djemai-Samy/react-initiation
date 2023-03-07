import { useState } from "react";

// 1. Déclarer les props dans les paramètres de la fonction
export default function TodoForm(props) {
	// 2. Déclarer un variables d'état pour stocker les entrées de l'utilisateur
	const [task, setTask] = useState("");

	//2. Fonction pour mettre à jour la variable contenant les entrées de l'utilisateur
	function handleTask(event) {
		setTask(event.target.value);
	}

	// 3. Fonction executée quand l'utilisateur clique sur le bouton
	function validate() {
		// 3. Utiliser la fonction reçue dans les props pour ajouter la tâche à liste
		props.addTask(task);
	}
	return (
		<div>
			<input type="text" placeholder="Entrez une tache" onChange={handleTask} />

			{/* 3. Lier le clique du bouton avec la fonction validate*/}
			<button onClick={validate}>Ajouter la tache</button>
		</div>
	);
}
