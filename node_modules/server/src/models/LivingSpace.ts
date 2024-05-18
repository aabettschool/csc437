import { ObjectId } from "mongodb";
enum LivingSpaceType {
    Apartment,
    Condominium,
    House,
    Townhouse,
    Trailer
}

export interface LivingSpace {
    id: ObjectId;
    label: string;
    rooms: Array<ObjectId>;
    type: LivingSpaceType;
    bathroom: Array<ObjectId>;
    amenities: Array<ObjectId>;
    amenityCost: number;
}