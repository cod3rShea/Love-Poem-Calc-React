import React, { useState } from "react";

const LoverNames = () => {
	const [yourName, setYourName] = useState("");
	const [yourCrushName, setYourCrushName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (yourName && yourCrushName) {
			let calcQueryURL =
				"https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
				yourName +
				"&sname=" +
				yourCrushName;
			getLovePercent(calcQueryURL);
			setYourName("");
			setYourCrushName("");
		} else {
			console.log("you most enter two names");
		}
	};

	const getLovePercent = (test) => {
		fetch(test, {
			method: "GET",
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_PERCENT_API_KEY,
				"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			},
		})
			.then((response) => response.json()) // Getting the actual response data
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

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
			<button type="submit" className="btn" onClick={handleSubmit}>
				Get Poem
			</button>
		</>
	);
};

export default LoverNames;
