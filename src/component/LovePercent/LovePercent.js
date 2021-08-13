import React, { useState } from "react";
import LovePercentContent from "../LovePercentContent/LovePercentContent";
import LovePoem from "../LovePoem/LovePoem";

const LovePercent = () => {
	const [yourName, setYourName] = useState("");
	const [yourCrushName, setYourCrushName] = useState("");
	const [yourLovePercent, setYourLovePercent] = useState("");
	const [yourLovePoems, setYourLovePoems] = useState([]);
	const [yourSwitch, setYourSwitch] = useState(false);
	const [yourNameMissing, setYourNameMissing] = useState("");

	console.log("name", yourName);
	console.log("yourname", yourCrushName);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (yourName !== "" && yourCrushName !== "") {
			let calcQueryURL =
				"https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
				yourName +
				"&sname=" +
				yourCrushName;
			console.log("yourName2", yourName);
			getLovePercent(calcQueryURL);
			setYourName("");
			setYourCrushName("");
		} else {
			console.log("you most enter two names");
			setYourNameMissing("please enter both names");
		}
	};

	const getLovePercent = (url) => {
		fetch(url, {
			method: "GET",
			headers: {
				"x-rapidapi-key": process.env.REACT_APP_PERCENT_API_KEY,
				"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				poemLines(data);
				return setYourLovePercent(data);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	function poemLines(data) {
		let percent = data.percentage;
		let url = `https://poetrydb.org/linecount/${percent}`;
		fetch(url, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setYourSwitch(true);
				return setYourLovePoems(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	if (yourSwitch) {
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
					name="yourCrushName"
					value={yourCrushName}
					placeholder="Your Crush's Name"
					onChange={(e) => setYourCrushName(e.target.value)}
				/>
				<button type="submit" className="btn" onClick={handleSubmit}>
					Get Poem
				</button>
				<LovePercentContent data={yourLovePercent} />
				<LovePoem data={yourLovePoems} />
			</>
		);
	}

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
			{yourNameMissing}
		</>
	);
};

export default LovePercent;
