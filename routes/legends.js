
import express from "express";

import { legends } from "../data/legends.js"


const router = express.Router();

router.get("/", (req, res) => {
  res.json(legends);
});


router.get("/:id", (req, res) => {
  const legend = legends.find(
    l => l.id === Number(req.params.id)
  );

  if (!legend) {
    return res.status(404).json({
      message: "Legend not found"
    });
  }

  res.json(legend);
});


router.post("/", (req, res) => {

  const legend = {
    id: legends.length + 1,
    ...req.body
  };

  legends.push(legend);

  res.status(201).json(legend);
});


export default router;



/*
app.get("/", (req, res) => { res.send("Folklore API is running"); });


app.get("/api/legends", (req, res) => { res.json(legends); });


app.get("/api/legends/:id", (req, res) => {
  const legend = legends.find(l => l.id === Number(req.params.id));
  if (!legend) { return res.status(404).json({ message: "Legend not found" }); }
  res.json(legend);
});


app.post("/api/legends", (req, res) => {
  const legend = { id: legends.length + 1, ...req.body };
  legends.push(legend);
  res.status(201).json(legend);
});


app.put("/api/legends/:id", (req, res) => {
  const legend = legends.find(legend => legend.id === Number(req.params.id));
  if (!legend) { return res.status(404).json({ message: "Legend not found" }); }
  legend.name = req.body.name;
  res.json(legend);
});


app.delete("/api/legends/:id", (req, res) => {
  const index = legends.findIndex(legend => legend.id === Number(req.params.id));
  if (index === -1) { return res.status(404).json({message: "Legend not found" }); }
  legends.splice(index, 1);
  res.json({ success: true });
});


app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
*/

