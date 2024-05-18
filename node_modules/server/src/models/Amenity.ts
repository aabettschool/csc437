import { ObjectId } from "mongodb";

enum AmenityType {
    Garbage,
    Kitchen,
    Laundry,
    Power,
    Water
}

export interface Amenity {
    id: ObjectId;
    type: AmenityType;
}