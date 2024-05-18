import { ObjectId } from "mongodb";
import { Profile } from "./Profile";

export interface Endorsment {
    id: ObjectId;
    profileId: ObjectId;
    created: Date;
    description: String;
}