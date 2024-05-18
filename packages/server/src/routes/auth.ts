import dotenv from "dotenv";

import express, {
    NextFunction,
    Request,
    Response
} from "express";

import jwt from "jsonwebtoken";

import credentials from "../services/credential-svc";

const router = express.Router();

dotenv.config();
const TOKEN_SECRET: string = process.env.TOKEN_SECRET || "NOT_A_SECRET";

router.post("/register", (req: Request, res: Response) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).send("Bad request: Invalid input data.");
    } else {
        credentials
        .create(username, password)
        .then((creds) => generateAccessToken(creds.username))
        .then((token)=> {
            res.status(201).send({token: token});
        });
    }
});

router.post("/login", (req: Request, res: Response) => {
    const { username, password } = req.body; // from form
    console.log(username);
    console.log(password);
    if (!username || !password) {
      res.status(400).send("Bad request: Invalid input data.");
    } else {
      console.log("verifying");
      credentials.verify(username, password)
        .then((goodUser: string) => generateAccessToken(goodUser))
        .then((token) => res.status(200).send({ token: token }))
        .catch((error) => res.status(401).send("Unauthorized"));
    }
  });

function generateAccessToken(
    username: string
  ): Promise<String> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { username: username },
        TOKEN_SECRET,
        { expiresIn: "1d" },
        (error, token) => {
          if (error) {
            reject(error) 
            console.log("token is ", token);
          } else resolve(token as string);
        }
      );
    });
  }

  export function authenticateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authHeader = req.headers["authorization"];
    // Getting the 2nd part of the auth header (the token)
    let token = undefined;
    if (authHeader != undefined) {
      token = authHeader.split(" ")[1];
    }
    console.log("this is the AUTH HEADER!")
    console.log(token);
    console.log(authHeader);
    if (!token) {
      console.log("NOT A TOKEN!")
      res.status(401).end();
    } else {
      jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
        if (decoded) next();
        else res.status(401).end();
      });
    }
  }

  export default router