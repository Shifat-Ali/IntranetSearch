import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import elasticRouter from "./routes/elastic.js";
import scrapeRouter from "./routes/scrape.js";
import crawlRouter from "./routes/crawling.js";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();

connectDB();
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/elastic-search", elasticRouter);
app.use("/scrape", scrapeRouter);
app.use("/web-crawler", crawlRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
