import express, {Request, Response} from "express";
import profiles from "../services/profile-svc"
// This is the type that the promise will resolve to
import { Profile } from "models/Profile";


const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    profiles
        .index()
        .then((list: Profile[]) => res.json(list))
        .catch((err) => res.status(500).send(err));
});

router.get("/:id", (req: Request, res: Response) => {
    const {id} = req.params
    profiles
    .get(id).then((profile: Profile) => 
        res.json(profile)).catch((err)=> 
        res.status(404).end())
});

// Handle post request
router.post("/", (req: Request, res: Response) => {
    const newProfile = req.body
  
    profiles
    .create(newProfile)
    .then((profile: Profile) => res.status(201).send(profile))
    .catch((err) => res.status(500).send(err));
  });

// Handle put request
router.put("/:id", (req: Request, res: Response) => {
    // takes user id from url like post
    const { id } = req.params;
    const newProfile = req.body;
  
    // send result json like like get
    profiles
      .update(id, newProfile)
      .then((profile: Profile) => res.json(profile))
      .catch((err) => res.status(404).end());
});

export default router;