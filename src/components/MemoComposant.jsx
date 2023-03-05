import { useMemo, useState } from "react";

function MemoComposant(props) {
	const [data1, setData1] = useState([1]);
	const [data2, setData2] = useState([1]);

	//Fonction executée quand data1 ou data2 changent
	const sum1 = (() => {
		console.log("Calculating sum1...");
		return data1.reduce((acc, curr) => acc + curr, 0);
	})();

	//Fonction executée que lorsque data2 change
	const sum2 = useMemo(() => {
		console.log("Calculating sum2...");
		return data2.reduce((acc, curr) => acc + curr, 0);
	}, [data2]);

	return (
		<div>
			<p>The sum1 of the elements is: {sum1}</p>
			<button onClick={() => setData1([...data1, sum1])}>Update data1</button>

			<p>The sum2 of the elements is: {sum2}</p>
			<button onClick={() => setData2([...data2, sum2])}>Update data2</button>
		</div>
	);
}

export default MemoComposant;
