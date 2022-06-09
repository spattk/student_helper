import React, { useEffect, useState } from "react";
import { Button, Form, Header, Icon, Item, Modal } from "semantic-ui-react";
import Project from "./Project";

const RecentProjects = (props) => {
  const [recentProjects, setRecentProjects] = useState([]);

  const getRecentProjects = async () => {
    try {
      const response = await fetch(`/projects`);
      const jsonData = await response.json();
      setRecentProjects(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentProjects();
    setAllProfessors();
  }, []);

  const [profs, setProfs] = useState([]);
  const Profs = profs.map((prof) => prof);

  const setAllProfessors = async () => {
    try {
      const response = await fetch(`/users/professors`);
      const profs = await response.json();
      console.log(profs);
      let allProfs = ["select-prof"];
      profs.forEach((prof) => allProfs.push(prof.username));
      setProfs(allProfs);
    } catch (err) {
      console.log(err);
    }
  };

  const [open, setOpen] = React.useState(false);
  const [formState, setFormState] = useState({
    formId: "",
    formName: "",
    formDesc: "",
    formGitURL: "",
    formVideoURL: "",
    formFundingURL: "",
    formStatus: "",
    formDomain: "",
    formProfID: "",
    formGroup: "",
  });
  const submit = () => {
    fetch("/projects", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_name: formState.formName,
        project_description: formState.formDesc,
        github_url: formState.formGitURL,
        video_url: formState.formVideoURL,
        funding_url: formState.formFundingURL,
        project_status: formState.formStatus,
        domain: formState.formDomain,
        professor_username: formState.formProfID,
        group_name: formState.formGroup
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getRecentProjects();
      });
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundColor: "#F3F4F5" }}>
      <Modal
        closeIcon
        open={open}
        trigger={
          <Button
            style={{
              float: "right",
              margin: "10px",
              marginRight: "20px",
              paddingTop: "10px",
              backgroundColor: "#193D62",
              color: "white",
            }}
          >
            Add Project
          </Button>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header content="Add New Project" />
        <Modal.Content scrolling>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input
                name="formName"
                placeholder="Name"
                value={formState.formName}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input
                name="formDesc"
                placeholder="Description"
                value={formState.formDesc}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Github URL</label>
              <input
                name="formGitURL"
                placeholder="Github URL"
                value={formState.formGitURL}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Video URL</label>
              <input
                name="formVideoURL"
                placeholder="Video URL"
                value={formState.formVideoURL}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Funding URL</label>
              <input
                name="formFundingURL"
                placeholder="Funding URL"
                value={formState.formFundingURL}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Status</label>
              <input
                name="formStatus"
                placeholder="Status"
                value={formState.formStatus}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Domain</label>
              <input
                name="formDomain"
                placeholder="Domain"
                value={formState.formDomain}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Professor Username</label>
              {/* <input
                name="formProfID"
                placeholder="Professor ID"
                value={formState.formProfID}
                onChange={handleChange}
              /> */}
              <select
                style={{
                  width: "45%",
                  fontSize: "12px",
                  padding: "7px",
                  backgroundColor: props.bg_color,
                  color: props.text_color,
                }}
                id={props.story_id}
                name="formProfID"
                onChange={(e) => handleChange(e)}
              >
                {Profs.map((prof, key) => (
                  <option key={key} value={prof}>
                    {prof}
                  </option>
                ))}
              </select>
            </Form.Field>
            <Form.Field>
              <label>Group Name</label>
              <input
                name="formGroup"
                placeholder="GroupName"
                value={formState.formGroup}
                onChange={handleChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={submit}>
            <Icon name="checkmark" /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          marginTop: "10px",
          textAlign: "center",
          marginLeft: "10px",
          marginRight: "10px",
          border: "1px solid black",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h2>All Projects</h2>
      </div>
      <div style={{ margin: "10px", marginBottom: "70px" }}>
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
