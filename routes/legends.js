
import express from "express";


const legendsRouter = express.Router();

const legends = [
  {
    id: 1,
    category: "worms",
    place: "Loch Ness",
    region: "Highlands",
    title: "The Loch Ness Monster",
    description: "A creature said to inhabit Loch Ness in the Scottish Highlands. Often described as large and long-necked, the first modern sighting was in 1933. Some believe it to be a surviving plesiosaur from the Jurassic period."
  },

  {
    id: 2,
    category: "mermaids",
    place: "Zennor",
    region: "Cornwall",
    title: "The Mermaid of Zennor",
    description: "A mermaid legend tells of a beautiful singer who lured a local man, Mathey Trewella, to live with her beneath the waves. A carved bench end in Zennor church is said to depict the mermaid."
  },

  {
    id: 3,
    category: "hounds",
    place: null,
    region: "Suffolk",
    title: "Black Shuck",
    description: "A ghostly black dog said to roam the countryside of East Anglia, particularly in Suffolk. It is often described as a large, spectral hound with glowing red eyes and is considered an omen of death."
  },

  {
    id: 4,
    category: "worms",
    place: "Lambton",
    region: "County Durham",
    title: "The Lambton Worm",
    description: "According to the legend, a young  man named John Lambton caught a small worm while fishing and discarded it in a well. The worm grew into a monstrous creature that terrorized the local area until John returned to slay it."
  }

];


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

