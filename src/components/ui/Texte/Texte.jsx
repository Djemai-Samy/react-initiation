//Composant paramétré recevant un objet
export default function Texte(props) {
	return (
		<p
			className="texte"
			style={{
				//Utilisation des props pour définir le style
				color: props.color,
				fontWeight: props.bold ? "bold" : "default",
			}}
		>
			{/* Utiliser children pour afficher le texte*/}
			{props.children}
		</p>
	);
}
