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

      res.json(stories.rows);
  } catch(err) {
      console.error(err.message);
  }
});

app.post("/projects",async(req,res) => {
    try{
        const {project_id,project_name,project_description,github_url,video_url,funding_url,project_status,domain,professor_id} = await req.body;  

        const newProject = await pool.query(
            "INSERT INTO projects (project_id,project_name,project_description,github_url,video_url,funding_url,status,domain,professor_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *", 
            [project_id,project_name,project_description,github_url,video_url,funding_url,project_status,domain,professor_id]
        );

        res.json(newProject.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

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

app.post("/stories",async(req,res) => {
    try{
        const {story_id,story_name,story_description,story_points,status}  = await req.body;

        const newStory = await pool.query(
            "INSERT INTO stories (story_id,story_name,story_description,story_points,status) VALUES($1,$2,$3,$4,$5) RETURNING *", 
            [story_id,story_name,story_description,story_points,status]
        );

        res.json(newStory.rows[0]);
    } catch(err) {
        console.error(err.message);
    }
})

app.put("/stories/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {story_name,story_description,story_points,status}  = await req.body;
        const updateStory = await pool.query("UPDATE stories SET story_name = $1, story_description = $2, story_points = $3, status = $4 WHERE story_id = $5",
        [story_name,story_description,story_points,status,id]
        ); 

        res.json("Story was updated"); 
    } catch(err) {
        console.error(err.message);
    }
})


app.put("/projects/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {project_name,project_description,github_url,video_url,funding_url,status,domain,professor_id}  = await req.body;
        const updateStory = await pool.query("UPDATE projects SET project_name = $1, project_description = $2, github_url = $3, video_url = $4, funding_url = $5, status = $6, domain = $7, professor_id = $8 WHERE project_id = $9",
        [project_name,project_description,github_url,video_url,funding_url,status,domain,professor_id,id]
        ); 

        res.json("Project was updated"); 
    } catch(err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

