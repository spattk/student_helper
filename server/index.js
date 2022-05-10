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

app.get("/users/students", async (req,res) =>{
  try{
      const allStudents = await pool.query("select * from users where role='student'");
      res.json(allStudents.rows);
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

app.post("/users",async(req,res) => {
    try{
        const {user_id,username,password,email,first_name,last_name,phone,role,auth_token,department}  = await req.body;

        const newStory = await pool.query(
            "INSERT INTO users (user_id,username,password,email,first_name,last_name,phone,role,auth_token,department) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *", 
            [user_id,username,password,email,first_name,last_name,phone,role,auth_token,department]
        );

        res.json(newStory.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.post("/groupprojectmapping",async(req,res) => {
    try{
        const {group_id,project_id,grade}  = await req.body;

        const newStory = await pool.query(
            "INSERT INTO groupprojectmapping (group_id,project_id,grade) VALUES($1,$2,$3) RETURNING *", 
            [group_id,project_id,grade]
        );

        res.json(newStory.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.post("/studentgroupmapping",async(req,res) => {
    try{
        const {user_id,group_id,is_user_owner,is_active_group}  = await req.body;

        const newStory = await pool.query(
            "INSERT INTO studentgroupmapping (user_id,group_id,is_user_owner,is_active_group) VALUES($1,$2,$3,$4) RETURNING *", 
            [user_id,group_id,is_user_owner,is_active_group]
        );

        res.json(newStory.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.post("/projectstorymapping",async(req,res) => {
    try{
        const {project_id,story_id,developer_id}  = await req.body;

        const newStory = await pool.query(
            "INSERT INTO projectstorymapping (project_id,story_id,developer_id) VALUES($1,$2,$3) RETURNING *", 
            [project_id,story_id,developer_id]
        );

        res.json(newStory.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5001, () => {
  console.log("server has started on port 5001");
});

