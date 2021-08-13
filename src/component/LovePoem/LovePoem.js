const LovePercent = (obj) => {
	let data = obj.data;

	const product = data
		.sort(() => Math.random() - Math.random())
		.find(() => true);

	let test = data.length;
	console.log(data);
	if (test > 0) {
		return (
			<>
				<h3>{product.title}</h3>
				<h2>{product.author}</h2>
				<p>{product.lines}</p>
			</>
		);
	}

	return <>test</>;
};

export default LovePercent;
