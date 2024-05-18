import { ObjectId } from "mongodb";
export interface Profile {
    id: string;
    nameFirst: string;
    nameLast: string;
    age: number;
    noisePreferenceIds: Array<ObjectId>;
    cleanliness: number;
    maxRoomates: number;
    maxHousemates: number;
    budget: number;
    endorsmentIds: Array<ObjectId>;
    zipCodes: Array<number>;
    livingSpaceIds: Array<ObjectId>
}