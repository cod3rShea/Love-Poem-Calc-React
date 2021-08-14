const LovePercentContent = (obj) => {
	let data = obj.data;
	console.log("ovepercentcontent");
	return (
		<>
			<li>{data.fname}</li>
			<li>{data.sname}</li>
			<li>{data.percentage}</li>
			<li>{data.result}</li>
		</>
	);
};

export default LovePercentContent;
