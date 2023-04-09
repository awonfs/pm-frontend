async function createProject(projectName: string, projectDescription: string) {
  try {
    const response = await fetch("http://raspberrypi:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: projectName,
        content: projectDescription,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}

export default createProject;
