const LovePoem = (obj) => {
	let data = obj.data;
	const poem = data
		.sort(() => Math.random() - Math.random())
		.find(() => true);
	return (
		<>
			<h3>{poem.title}</h3>
			<h2>{poem.author}</h2>
			<ul>
				{poem.lines.map(function (line) {
					return <li>{line}</li>;
				})}
			</ul>
		</>
	);
};

export default LovePoem;
