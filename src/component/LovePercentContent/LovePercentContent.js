const LovePercentContent = (obj) => {
	let data = obj.data;
	return (
		<>
			<li>Your Name: {data.fname}</li>
			<li>Your Crushes Name: {data.sname}</li>
			<li>Match Percent: {data.percentage}</li>
			<li>{data.result}</li>
		</>
	);
};

export default LovePercentContent;
