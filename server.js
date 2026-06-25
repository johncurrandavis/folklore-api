
import express from "express";
import cors from 'cors';

import legendsRouter from "./routes/legends.js";


const app = express();
const PORT = process.env.PORT || 3000;  // important because Render assigns the port in production

app.use(express.json());
app.use(cors());  // allow all origins
// or restrict it:
//app.use(cors({ origin: 'https://yourdomain.com' }));

app.use("/api/legends", legendsRouter);

app.listen(3000);
