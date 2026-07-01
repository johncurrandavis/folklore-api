
import express from "express";

import { legends } from "../data/legends.js"


const router = express.Router();

// GET  /api/legends  return all legends
router.get("/", (_, res) => { res.json(legends); });

// GET  /api/legends/:id  return a single legend by id
router.get("/:id", (req, res) => {
  const legend = legends.find(lgnd => lgnd.id === Number(req.params.id));
  if (!legend) { return res.status(404).json({ message: "Legend not found." }); }
  res.json(legend);
});

// POST  /api/legends  create a new legend
router.post("/", (req, res) => {
  const legend = { id: legends.length + 1, ...req.body };
  legends.push(legend);
  res.status(201).json(legend);
});

// PUT  /api/legends/:id  update a legend by id
router.put("/api/legends/:id", (req, res) => {
  const legend = legends.find(lgnd => lgnd.id === Number(req.params.id));
  if (!legend) { return res.status(404).json({ message: "Legend not found." }); }
  legend.name = req.body.name;
  res.json(legend);
});

// DELETE  /api/legends/:id  delete a legend by id
router.delete("/api/legends/:id", (req, res) => {
  const index = legends.findIndex(lgnd => lgnd.id === Number(req.params.id));
  if (index === -1) { return res.status(404).json({ message: "Legend not found." }); }
  legends.splice(index, 1);
  res.json({ success: true });
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

