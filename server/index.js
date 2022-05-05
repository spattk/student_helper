const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

app.get("/users", async (req,res) =>{
  try{
      const allUsers = await pool.query("select * from users");
      res.json(allUsers.rows);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/projects", async (req,res) =>{
  try{
      const allProjects = await pool.query("select * from projects");
      res.json(allProjects.rows);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/projects/:id", async (req,res) =>{
  try{
      const {id} = req.params;
      const project = await pool.query("select * from projects where project_id = $1",[
          id
      ]);

      res.json(project.rows[0]);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/groups", async (req,res) =>{
  try{
      const allGroups = await pool.query("select * from groupprojectmapping");
      res.json(allGroups.rows);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/groups/:id", async (req,res) =>{
  try{
      const {id} = req.params;
      const group = await pool.query("select * from groupprojectmapping where group_id = $1",[
          id
      ]);

      res.json(group.rows[0]);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/groups/:id/grade", async (req,res) =>{
  try{
      const {id} = req.params;
      const group = await pool.query("select grade from groupprojectmapping where group_id = $1",[
          id
      ]);

      res.json(group.rows[0]);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/groups/professor/:id", async (req,res) =>{
  try{
      const {id} = req.params;
      const group = await pool.query("select * from groupprojectmapping where project_id in (select project_id from projects where professor_id = $1)",[
          id
      ]);

      res.json(group.rows[0]);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/stories", async (req,res) =>{
  try{
      const allStories = await pool.query("select * from stories");
      res.json(allStories.rows);
  } catch(err) {
      console.error(err.message);
  }
});

app.get("/stories/:id", async (req,res) =>{
  try{
      const {id} = req.params;
      const story = await pool.query("select * from stories where story_id = $1",[
          id
      ]);

      res.json(story.rows[0]);
  } catch(err) {
      console.error(err.message);
  }
});


app.get("/users/:id/stories", async (req,res) =>{
  try{
      const {id} = req.params;
      const stories = await pool.query("select * from stories where story_id in (select story_id from projectstorymapping where developer_id = $1)",[
          id
      ]);

      res.json(stories);
  } catch(err) {
      console.error(err.message);
  }
});
app.listen(5001, () => {
  console.log("server has started on port 5001");
});
