// day - 3 And day - 4

const express = require("express");
const { message } = require("prompt");
const app = express();

app.use(express.json());
const notes = [];
// create a note
app.post("/note", (req, res) => {
  const titleCOn = req.body;
  notes.push(titleCOn);
  res.json({
    message: "created post sucessfully",
    titleCOn,
  });
});

// show all notes 

app.get("/note",(req,res)=>{
res.json(notes)
})

// delete one note 

app.delete("/note/:ind",(req,res)=>{
  const indId = req.params.ind
   delete notes[indId]
   res.json({
    message:"delete sucessfully"
   })

})

//update one note

app.patch("/note/:ind",(req,res)=>{
  const indId =req.params.ind
  const {title} = req.body
  notes[indId].title = title
 
  res.json({
    message:"sucessfully"

  })
})

app.listen(3000, () => {
  console.log("run in 3000 port number");
});
