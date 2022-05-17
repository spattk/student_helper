import React, { useEffect, useState } from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import "../App.css";
import Footer from "./Footer";
import MenuHeader from "./MenuHeader";
import StoryCard from "./StoryCard";
import VerticalNavigation from "./VerticalNavigation";
import { useParams } from "react-router-dom";

const Kanban = (props) => {
  const styles = [
    {
      backgroundColor: "#f8ad9d",
    },
    {
      backgroundColor: "#f6bd60",
    },
    {
      backgroundColor: "#2ec4b6",
    },
    {
      backgroundColor: "#0077b6",
    },
  ];

  let { id } = useParams();
  const [project, setProject] = useState([]);
  const [projectStories, setProjectStories] = useState([]);
  // const [todoStories, setTodoStories] = useState([]);
  // const [devStories, setDevStories] = useState([]);
  // const [reviewStories, setReviewStories] = useState([]);
  // const [releasedStories, setReleasedStories] = useState([]);

  const getProjectDetails = async () => {
    try {
      const projectResponse = await fetch(
        `http://localhost:5001/projects/${id}`
      );
      const projectJsonData = await projectResponse.json();
      setProject(projectJsonData);

      const projectStoriesResponse = await fetch(
        `http://localhost:5001/projects/${id}/stories`
      );
      const storyJsonData = await projectStoriesResponse.json();
      setProjectStories(storyJsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, [id]);

  // console.log(project);
  // console.log(projectStories);
  var kanbanBoardArray = [[]];
  kanbanBoardArray[0] = projectStories.filter(
    (projectStory) => projectStory.status == "TODO"
  );
  kanbanBoardArray[1] = projectStories.filter(
    (projectStory) => projectStory.status == "IN_PROGRESS"
  );
  kanbanBoardArray[2] = projectStories.filter(
    (projectStory) => projectStory.status == "IN_REVIEW"
  );
  kanbanBoardArray[3] = projectStories.filter(
    (projectStory) => projectStory.status == "COMPLETED"
  );

  return (
    <Container fluid={true}>
      <MenuHeader />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalNavigation />
          </Grid.Column>
          <Grid.Column width={12}>
            <h2
              style={{
                marginTop: "10px",
                textAlign: "center",
                border: "1px dashed black",
                padding: "10px",
              }}
            >
              {project.project_name} Kanban Board
            </h2>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>TODO</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    {kanbanBoardArray[0].map((story, index) => (
                      <StoryCard
                        key={index}
                        content={story.story_description}
                        card_style={styles[0]}
                      />
                    ))}
                    {/* <StoryCard
                      content="Add auto-generated IDs to DB in the insert APIs"
                      card_style={styles[0]}
                    /> */}

                    {/* <StoryCard
                      content="Kanban board story create API"
                      card_style={styles[0]}
                    />

                    <StoryCard
                      content="/project/:p_id/stories API"
                      card_style={styles[0]}
                    />

                    <StoryCard
                      content="Swagger Documentation API integration"
                      card_style={styles[0]}
                    />

                    <StoryCard
                      content="Github latest commit fetch API"
                      card_style={styles[0]}
                    /> */}
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>DEV</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    {kanbanBoardArray[1].map((story, index) => (
                      <StoryCard
                        key={index}
                        content={story.story_description}
                        card_style={styles[1]}
                      />
                    ))}

                    {/* <StoryCard
                      content="Integration of project ID with the Kanban Board"
                      card_style={styles[1]}
                    />

                    <StoryCard
                      content="Login and Authentication flow with setting up of session"
                      card_style={styles[1]}
                    />

                    <StoryCard
                      content="Hyperlink and control flow within the text."
                      card_style={styles[1]}
                    /> */}
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>QA/REVIEW</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    {kanbanBoardArray[2].map((story, index) => (
                      <StoryCard
                        key={index}
                        content={story.story_description}
                        card_style={styles[2]}
                        text_style={{ color: "white" }}
                      />
                    ))}

                    {/* <StoryCard
                      content="Kanban board UI including Dev, StoryID, Story Points"
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Create stories API"
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Update story status API (TODO -> DEV)"
                      card_style={styles[2]}
                      text_style={{ color: "white" }}
                    /> */}
                  </Card.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                  <h4 style={{ textAlign: "center" }}>RELEASED</h4>
                  <Card.Group
                    style={{ border: "1px dashed grey", borderRadius: "10px" }}
                  >
                    {kanbanBoardArray[3].map((story, index) => (
                      <StoryCard
                        key={index}
                        content={story.story_description}
                        card_style={styles[3]}
                        text_style={{ color: "white" }}
                      />
                    ))}

                    {/* <StoryCard
                      content="Client Side Routing"
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="Kanban board base UI"
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    />

                    <StoryCard
                      content="GET APIs with Postman v2.1 Collections"
                      card_style={styles[3]}
                      text_style={{ color: "white" }}
                    /> */}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Footer></Footer>
    </Container>
  );
};

export default Kanban;
