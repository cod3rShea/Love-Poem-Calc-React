const LovePoem = (obj) => {
	console.log("");
	let data = obj.data;
	const poem = data
		.sort(() => Math.random() - Math.random())
		.find(() => true);

	return (
		<>
			<h3>{poem.title}</h3>
			<h2>{poem.author}</h2>
			<p>{poem.lines}</p>
		</>
	);
};

export default LovePoem;
