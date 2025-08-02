const express = require("express");
const { message } = require("prompt");
const connectDB = require("./src/db/db");
const noteModels = require("./src/models/notes.model");
const app = express();

connectDB();

app.use(express.json());

app.post("/note", async (req, res) => {
  const { title, content } = req.body;

  await noteModels.create({
    title,
    content,
  });
  res.json({
    message: "data aa chuka hai",
  });
});

app.get("/note", async (req, res) => {
  const dhundha = await noteModels.find();
  res.json(dhundha);
});

app.delete("/note/:id", async (req, res) => {
  const indId = req.params.id;
  await noteModels.findOneAndDelete({
    _id: indId,
  });
  res.json("deleted sucess");
});

app.patch("/note/:id", async (req, res) => {
  const indId = req.params.id;
  const { content } = req.body;

  await noteModels.findOneAndUpdate(
    {
      _id: indId,
    },
    { content: content }
  );
  res.json({
    message: "update sucessfully",
  });
});

app.listen(3000, () => {
  console.log("server started ");
});
