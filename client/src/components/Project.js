import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Item,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";

const Project = (props) => {
  const [open, setOpen] = React.useState(false);
  const [projectName, setProjectName] = useState();
  const [formDev, setFormDev] = useState();

  const [devList, setDevList] = useState([]);
  const [devIdList, setDevIdList] = useState([]);

  useEffect(() => {
    getAllDevelopers();
  }, [props.project_id]);

  const getAllDevelopers = async () => {
    try {
      let allDevelopersArray = [];
      let allDevelopersIdArray = [];
      const allDevelopersResponse = await fetch(`/users/students`);
      const allDevelopersResponseJson = await allDevelopersResponse.json();
      allDevelopersArray.push("< >");
      allDevelopersIdArray.push(-1);
      for (let i = 0; i < allDevelopersResponseJson.length; i++) {
        allDevelopersArray.push(allDevelopersResponseJson[i].username);
        allDevelopersIdArray.push(allDevelopersResponseJson[i].user_id);
      }
      setDevList(allDevelopersArray);
      setDevIdList(allDevelopersIdArray);
      setProjectName(props.name);
    } catch (err) {
      console.log(err);
    }
  };

  const Devs = devList.map((dev) => dev);

  const submit = () => {
    fetch(`/projects/${props.project_id}/add_developer`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formDev,
      }),
    })
      .then((res) => res.json())
      .then((res) => {});

    setOpen(false);
  };

  const handleChange = (e) => {
    setFormDev(e.target.value);
  };

  return (
    <Item
      style={{
        border: "1px solid #193D62",
        borderRadius: "12px",
        padding: "10px",
        color: "#193D62",
      }}
    >
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content style={{ color: "#193D62" }}>
        <Item.Header as="a">{props.name}</Item.Header>
        <Item.Meta>Project Metadata</Item.Meta>
        <Item.Description>{props.description}</Item.Description>

        <Item.Extra>
          <Link to={`/kanban/${props.project_id}`}>
            <Button style={{ backgroundColor: "#193D62", color: "white" }}>
              Kanban Board
            </Button>
          </Link>
          <Modal
            size="tiny"
            style={{ height: "250px", margin: "auto auto" }}
            closeIcon
            open={open}
            trigger={
              <Button
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  backgroundColor: "#193D62",
                  color: "white",
                }}
              >
                Add Collaborators
              </Button>
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Header content="Link Developer" />
            <Modal.Content maxHeight="20px">
              <Form>
                <Form.Field>Project: {projectName}</Form.Field>
                <Form.Field>
                  <label>Add Collaborator</label>
                  {/* <input
                    name="formName"
                    placeholder="Username"
                    value={formState.formName}
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
                    name="formStatus"
                    onChange={(e) => handleChange(e)}
                  >
                    {Devs.map((dev, key) => (
                      <option key={key} value={dev}>
                        {dev}
                      </option>
                    ))}
                  </select>
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions maxHeight="5px">
              <Button color="green" onClick={submit}>
                <Icon name="checkmark" /> Submit
              </Button>
            </Modal.Actions>
          </Modal>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Project;
