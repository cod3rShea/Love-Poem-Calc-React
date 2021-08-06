const LoverNames = () => {
	return (
		<>
			<h2>Enter Two Names:</h2>
			<input
				id="f-name"
				type="text"
				class="name"
				spellcheck="false"
				placeholder="Your Name"
			/>
			<input
				id="l-name"
				type="text"
				class="name"
				spellcheck="false"
				placeholder="Your crush"
			/>
			<input
				class="btn btn-primary"
				id="go"
				type="submit"
				value="Get Poem"
				disabled=""
			/>
		</>
	);
};

export default LoverNames;
