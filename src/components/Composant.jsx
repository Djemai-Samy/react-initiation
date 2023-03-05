import React, { useState, useEffect } from "react";

function Composant() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("Component mounted");

		document.title = `${count} fois`;

		window.addEventListener("resize", handleResize);

		// la fonction de nettoyage
		return () => {
			console.log("Component unmounted");
			window.removeEventListener("resize", handleResize);
		};
	}, [count]);

	function handleResize() {
		console.log("Window resized");
	}

	return (
		<div>
			<p>Vous avez cliqué {count} fois</p>
			<button onClick={() => setCount(count + 1)}>Cliquez ici</button>
		</div>
	);
}

export default Composant;
