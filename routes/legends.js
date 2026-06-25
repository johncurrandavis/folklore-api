
import express from "express";


const legendsRouter = express.Router();

const legends = [];


legendsRouter.get("/", (req, res) => {
  res.json(legends);
});


legendsRouter.get("/:id", (req, res) => {
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


legendsRouter.post("/", (req, res) => {

  const legend = {
    id: legends.length + 1,
    ...req.body
  };

  legends.push(legend);

  res.status(201).json(legend);
});


export default legendsRouter;
