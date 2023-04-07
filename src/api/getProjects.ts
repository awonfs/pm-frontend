const getProjects = async () => {
	try {
		const response = await fetch("http://raspberrypi:5000/posts");
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getProjects;
