import "../styles/styles.scss";

import React from "react";
import Type from "./Type";
import useMouse from "@react-hook/mouse-position";

function App() {
	const ref = React.useRef(null);
	const mouse = useMouse(ref, {
		enterDelay: 100,
		leaveDelay: 100,
	});

	return (
		<div className="app" ref={ref}>
			<Type mouse={mouse} />
		</div>
	);
}

export default App;
