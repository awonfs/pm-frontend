const deleteProject = async (projectId: number) => {
  try {
    const response = await fetch(`http://raspberrypi:5000/post/${projectId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export default deleteProject;
