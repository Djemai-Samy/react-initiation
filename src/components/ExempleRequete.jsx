import React, { useState, useEffect } from "react";

function ExempleRequete() {
	// état local du composant
	const [data, setData] = useState(null);

	// effectuer une requête HTTP
	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			const data = await response.json();
			setData(data);
		}

		fetchData();
	}, []);

	return <div>{data ? <p>Title: {data.title}</p> : <p>Loading...</p>}</div>;
}

export default ExempleRequete;
