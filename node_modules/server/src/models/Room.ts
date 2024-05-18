import { ObjectId } from "mongodb";

export interface Room {
    id: ObjectId;
    costPerPerson: number;
    targetOccupancy: number;
    occupants: Array<ObjectId>;
    label: String;
}