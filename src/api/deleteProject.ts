import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const deleteProject = async (projectId: number) => {
  try {
    const response = await fetch(`http://raspberrypi:5000/post/${projectId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default deleteProject;
