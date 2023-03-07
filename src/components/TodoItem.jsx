//Déclarer et destructurer le paramètre props
export default function TodoItem({ task, onDelete, onValidate }) {
	//Formatter la date pour afficher: HH:MM - JJ/MM/AA
	const dateObj = new Date(task.date);
	const heure = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	const dateFormatted = dateObj.toLocaleDateString("fr-FR");
	const heureFormatted = `${heure.toString()}:${minutes.toString()}`;

	return (
		<div
			style={{
				backgroundColor: task.completed
					? "hsla(150, 90%, 70%, 0.4)"
					: "hsla(37, 100%, 80%, 0.6)",
			}}
		>
			<h3>{task.title}</h3>
			<p>{`${heureFormatted} - ${dateFormatted}`}</p>

			{/* Lier la fonction de validation recues dans les props avec la clé onValidate*/}
			<button disabled={task.completed} onClick={onValidate}>
				Complete
			</button>

			{/* Lier la fonction de suppression recues dans les props avec la clé onDelete*/}
			<button onClick={onDelete}>Delete</button>
		</div>
	);
}
