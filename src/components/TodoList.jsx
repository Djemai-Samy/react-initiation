// Import des composants nécessaires
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

// Import du hook useState
import { useEffect, useState } from "react";

export default function TodoList() {
	//Déclaration de la variable d'état et de son setteur
	const [tasks, setTasks] = useState([]);

	//Utiliser le hook useEffect pour charger la liste depuis le localStorage
	//Le tableau de dépandences car nous voulons l'executer qu'une seule fois
	useEffect(() => {
		// Récuperer et mettre à jour la liste depuis le localStorage
		const localStorageTodos = JSON.parse(localStorage.getItem("todos")) || [];
		setTasks(localStorageTodos);
	}, []);

	// Fonction pour mettre à jour le local storage
	function updateLocalStorage(newTasks) {
		localStorage.setItem("todos", JSON.stringify(newTasks));
	}

	// Déclaration de la fonction pour ajouter une tache à la iste
	const addTask = (task) => {
		// Déclarer une variable contenant la nouvelle tâche
		const newTask = { title: task, date: Date.now(), completed: false };

		// Créer un nouveau tableau contenant toutes les tache ainsi que la nouvelle
		const newTasks = [...tasks, newTask];

		// Utiliser le fonction setteur pour mettre à jour la liste de tâches
		setTasks(newTasks);

		// Utiliser la fonction pour mettre a jour la liste
		updateLocalStorage(newTasks);
	};

	// Déclarer la fonction pour enlever la tâche de la liste
	const removeTask = (position) => {
		// Créer un nouveau tableau contenant toutes les taches
		const newTasks = [...tasks];

		//Utiliser splice pour supprimer la tache de la nouvelle liste
		newTasks.splice(position, 1);

		// utiliser le fonction setteur pour mettre à jour la liste de tâches
		setTasks(newTasks);

		// Utiliser la fonction pour mettre a jour la liste
		updateLocalStorage(newTasks);
	};

	// Fonction pour mettre à jour la liste de tâches
	function validateTask(position) {
		// Créez une copie du tableau original
		const newTasks = [...tasks];

		// Mettre à jour l'élément
		newTasks[position].completed = true;

		// Mettre à jour l'état du tableau
		setTasks(newTasks);

		// Utiliser la fonction pour mettre a jour la liste
		updateLocalStorage(newTasks);
	}
	return (
		<div>
			<h1>Todo List</h1>

			{/*Envoyer la fonction qui permet d'ajouter une tache au composant*/}
			<TodoForm addTask={addTask} />
			<div>
				{/*transformer la liste de tâches en liste d'éléments JSX*/}
				{/*Envoyer la fonction de suppression dans la clé onDelete*/}
				{/* Envoyer la fonction de validation dans la clé onValidate*/}
				{tasks.map((task, position) => (
					<TodoItem
						key={task.date}
						task={task}
						onDelete={() => {
							removeTask(position);
						}}
						onValidate={() => {
							validateTask(position);
						}}
					/>
				))}
			</div>
		</div>
	);
}
