"use strict";

import express from "express";
import routes from "../routes/diaryRoute";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

routes(app);

export default app;