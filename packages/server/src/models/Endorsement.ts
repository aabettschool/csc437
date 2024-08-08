import { ObjectId } from "mongodb";

export interface Endorsement {
    id: ObjectId;
    profileId: ObjectId;
    created: Date;
    description: String;
}