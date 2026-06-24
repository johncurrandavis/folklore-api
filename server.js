
import express from "express";


const app = express();
const PORT = process.env.PORT || 3000;  // important because Render assigns the port in production

app.use(express.json());

const legends = [
  {
    id: 1,
    name: "Black Shuck",
    county: "Suffolk"
  }
];

app.get("/", (req, res) => {
  res.send("Folklore API is running");
});

app.get("/api/legends", (req, res) => {
  res.json(legends);
});

app.post("/api/legends", (req, res) => {

  const legend = {
    id: legends.length + 1,
    ...req.body
  };

  legends.push(legend);

  res.status(201).json(legend);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
