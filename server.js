
import express from "express";
import cors from 'cors';

import router from "./routes/legends.js";


const app = express();
const PORT = process.env.PORT || 3000;  // important because Render assigns the port in production
                                        // if process.env.PORT is undefined (running locally) then it defaults to 3000
                                        // Render sets process.env.PORT to a specific number where they expect your web service to be running


// middleware

app.use(express.json());

app.use(cors());  // allow all origins
// or restrict it:
//app.use(cors({ origin: 'https://yourdomain.com' }));

app.use("/api/legends", router);


app.listen(3000);
