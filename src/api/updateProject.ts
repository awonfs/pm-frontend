async function updateProject(
  id: string,
  projectName: string,
  projectDescription: string
) {
  try {
    const response = await fetch(`http://raspberrypi:5000/post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName,
        projectDescription,
      }),
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default updateProject;
