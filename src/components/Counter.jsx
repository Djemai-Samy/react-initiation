import { useRef, useState } from "react";

function Counter() {
	const [countState, setCountState] = useState(0);
	const countRef = useRef(0);
	let count = 0;

	const increment = () => {
		setCountState(countState + 1);
		countRef.current++;
		count++;
	};

	return (
		<div>
			<p>countState: {countState}</p>
			<p>countRef: {countRef.current}</p>
			<p>count: {count}</p>
			<button onClick={increment}>Incrementer</button>
		</div>
	);
}
export default Counter;
