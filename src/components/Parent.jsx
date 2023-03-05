import { createContext } from "react";
import Enfant from "./Enfant";

export const MonContexte = createContext();

function Parent() {
	return (
		<MonContexte.Provider value="Hello world!">
			<Enfant />
		</MonContexte.Provider>
	);
}

export default Parent;
