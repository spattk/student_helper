import React, { Component, useEffect, useState } from "react";
import RecentProject from "./RecentProject";
import { Image, Item } from "semantic-ui-react";

const RecentProjects = () => {
  const [recentProjects, setRecentProjects] = useState([]);

  const getRecentProjects = async () => {
    try {
      const response = await fetch("http://localhost:5001/projects");
      const jsonData = await response.json();
      setRecentProjects(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentProjects();
  }, []);

  return (
    <div style={{ border: "1px solid red"}}>
      <div style={{ textAlign: "center" }}>
        <b>Recent Projects</b>
      </div>
      <div style={{margin:'10px'}}>
      <Item.Group>
        {recentProjects.map(recentProject=> (
            <RecentProject key={recentProject.project_id} name={recentProject.project_name} description={recentProject.project_description} />
        ))}
      </Item.Group>
      </div>
    </div>
  );
};

export default RecentProjects;
