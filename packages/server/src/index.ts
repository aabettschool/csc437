// src/index.ts
import express, { Request, Response } from "express";
import profiles from "./routes/profiles";
import auth, { authenticateUser } from "./routes/auth";
import path from "path";
import fs from "node:fs/promises";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";


app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

// connect to mongo
import { connect } from "./services/mongo";
connect("cluster0");


app.use(express.json());

app.use("/auth", auth);

// use profile routing
app.use("/api/profiles", authenticateUser, profiles);

// Serve static file1/
app.use(express.static(staticDir));

const nodeModules = path.resolve(
    __dirname, "../../../node_modules"
)

app.use("/node_modules", express.static(nodeModules));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

// start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});