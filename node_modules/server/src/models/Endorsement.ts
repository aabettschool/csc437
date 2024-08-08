import { ObjectId } from "mongodb";
import { Profile } from "./Profile";

export interface Endorsement {
    id: ObjectId;
    profileId: ObjectId;
    created: Date;
    description: String;
}