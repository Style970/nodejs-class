const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from student", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

//insert
app.post('/', (req,resp)=>{
  const data= req.body;
  con.query("INSERT INTO student SET ?",data,(error,result,fields)=>{
    if(error) throw error;
    resp.send(result);
  })
});

//update
app.put("/:id",(req,resp)=>{
  const data= [req.body.name,req.body.email,req.body.password,req.params.id];
  con.query("UPDATE student SET name = ?, email = ?, password = ? WHERE id = ?",
  data,(error,results,fields)=>{
    if(error) throw error;
    resp.send(results)
  });
});

//delete
app.delete("/:id",(req,resp)=>{
  con.query("DELETE FROM student WHERE id ="+req.params.id,(error,results,fields)=>{
    if(error) throw error;
    resp.send(results)
  });
});

app.listen("5000");