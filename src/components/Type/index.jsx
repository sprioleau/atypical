import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { fontProperties } from "../../constants";

const Type = ({ mouse }) => {
	const [text, setText] = React.useState("Type...");
	// const zonesString = "atypical";

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const setProperty = (name, value) => Number(document.documentElement.style.setProperty(name, value));

	const { wght, slnt, CASL } = fontProperties;

	const xPercentage = mouse.x / window.innerWidth;
	const yPercentage = mouse.y / window.innerHeight;

	React.useEffect(() => {
		setProperty("--font-weight", Math.floor((wght.max - wght.min) * xPercentage + wght.min));
		setProperty("--font-slant", Math.floor((slnt.max - slnt.min) * yPercentage + slnt.min));
		setProperty("--font-casual", Math.ceil(((CASL.max - CASL.min) * xPercentage + CASL.min) / CASL.step) * CASL.step);
	}, [mouse, setProperty]);

	return (
		<>
			<TextareaAutosize autoFocus value={text} onChange={handleChange} />
			{/* <div className="zones">
				<p className="zone zone-1">{zonesString}</p>
				<p className="zone zone-2">{zonesString}</p>
				<p className="zone zone-3">{zonesString}</p>
				<p className="zone zone-4">{zonesString}</p>
			</div> */}
		</>
	);
};

export default Type;
