const getProject = async (projectId: String) => {
	try {
		const response = await fetch(`http://raspberrypi:5000/post/${projectId}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export default getProject;
