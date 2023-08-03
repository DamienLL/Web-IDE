

import React, { useState } from "react";
import Terminal from "./Terminal"; 

const TerminalButton = () => {
	const [showTerminal, setShowTerminal] = useState(false);

	const toggleTerminal = () => {
		setShowTerminal((prevState) => !prevState);
	};

	return (
		<div>
			<button className="py-1 px-2 my-2 rounded bg-blue-400 flex mx-auto items-center text-slate-50" onClick={toggleTerminal}>Terminal</button>
			{showTerminal && <Terminal />}
		</div>
	);
};

export default TerminalButton;
