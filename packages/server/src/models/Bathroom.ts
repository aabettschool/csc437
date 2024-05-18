import { ObjectId } from "mongodb";

export interface Bathroom {
    id: ObjectId;
    full: boolean;
    label: String;
}