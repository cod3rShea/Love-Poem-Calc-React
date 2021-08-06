import React, { useState } from "react";
const LoverNames = () => {
	const [yourName, setYourName] = useState("");
	const [yourCrushName, setYourCrushName] = useState("");

	return (
		<>
			<h2>Enter Two Names:</h2>
			<input
				name="yourName"
				value={yourName}
				placeholder="Your Name"
				onChange={(e) => setYourName(e.target.value)}
			/>
			<input
				name="yourName"
				value={yourCrushName}
				placeholder="Your Crush's Name"
				onChange={(e) => setYourCrushName(e.target.value)}
			/>
			<input
				className="btn btn-primary"
				id="go"
				type="submit"
				value="Get Poem"
				disabled=""
			/>
		</>
	);
};

export default LoverNames;
