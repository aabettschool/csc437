import { ObjectId } from "mongodb";

export interface NoisePreference {
    id: ObjectId
    startTime: Date;
    endTime: Date;
    isQuiet: boolean;
}