import { useContext } from "react";
import { MonContexte } from "./Parent";

function Enfant() {
	const texte = useContext(MonContexte);

	return <p>{texte}</p>;
}
export default Enfant;
