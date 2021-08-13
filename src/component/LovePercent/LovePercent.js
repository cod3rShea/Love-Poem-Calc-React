import React, { useState } from "react";
import LovePercentContent from "../LovePercentContent/LovePercentContent";
import LovePoem from "../LovePoem/LovePoem";

const LovePercent = () => {
	const [yourName, setYourName] = useState("");
	const [yourCrushName, setYourCrushName] = useState("");
	const [yourLovePercent, setYourLovePercent] = useState("");
	const [yourLovePoems, setYourLovePoems] = useState([]);

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
				return setYourLovePoems(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	if (getLovePercent && poemLines) {
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
		</>
	);
};

export default LovePercent;
