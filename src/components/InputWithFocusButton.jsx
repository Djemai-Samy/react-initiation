import { useRef } from "react";

function InputWithFocusButton() {
	const inputRef = useRef(null);

	const onClick = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} />
			<button onClick={onClick}>Focus</button>
		</div>
	);
}
export default InputWithFocusButton;
