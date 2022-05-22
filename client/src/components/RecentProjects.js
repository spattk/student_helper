import React, { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import Project from "./Project";

const RecentProjects = () => {
  const [recentProjects, setRecentProjects] = useState([]);

  const getRecentProjects = async () => {
    try {
      const response = await fetch("http://localhost:5001/projects");
      const jsonData = await response.json();
      setRecentProjects(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentProjects();
  }, []);

  return (
    <div style={{ border: "1px solid red" }}>
      <div style={{ textAlign: "center" }}>
        <b>Recent Projects</b>
      </div>
      <div style={{ margin: "10px" }}>
        <Item.Group>
          {recentProjects.map((recentProject) => (
            <Project
              key={recentProject.project_id}
              name={recentProject.project_name}
              description={recentProject.project_description}
              project_id={recentProject.project_id}
            />
          ))}
        </Item.Group>
      </div>
    </div>
  );
};

export default RecentProjects;
