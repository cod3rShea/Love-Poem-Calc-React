const LovePercent = (obj) => {
	let data = obj.data;

	let test = data.length;
	console.log(data);
	if (test > 0) {
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
	}

	return <>test</>;
};

export default LovePercent;
