import { useParams } from "react-router-dom";
export default function User() {
	const parametres = useParams();

	return (
		<div>
			<h1>User {parametres.id}</h1>
		</div>
	);
}
