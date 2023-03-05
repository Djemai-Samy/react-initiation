import React from "react";
import { createRoot } from "react-dom/client";

//Import du composant principal
import App from "./App";

//Sélectionne la div principale pour y rendre l'application
const rootElement = document.getElementById("root");

if (rootElement) {
	const root = createRoot(rootElement);
	//rend le composant App dans la page
	root.render(<App />);
}
