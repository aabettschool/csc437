import { Profile } from "models/Profile";
import { Schema, Model, Document, model } from "mongoose";
import { ObjectId } from "mongodb";

const ProfileSchema = new Schema<Profile>(
  {
    id: { type: String, required: true, trim: true },
    nameFirst: { type: String, required: true, trim: true },
    nameLast: { type: String, required: true, trim: true },
    age: {type: Number, required: true},
    noisePreferenceIds: [ObjectId],
    cleanliness: {type: Number, required: true},
    maxRoomates:  {type: Number, required: true},
    maxHousemates:  {type: Number, required: true},
    budget: {type: Number, required: false},
    endorsmentIds: [ObjectId],
    zipCodes: [Number],
    livingSpaceIds: [ObjectId]
  },
  { collection: "user_profiles" }
);

// Build model from schema
const ProfileModel = model<Profile>("Profile", ProfileSchema);

// Gets a single profile
function index(): Promise<Profile[]> {
    return ProfileModel.find();
}

// Gets all profiles
function get(id: String): Promise<Profile> {
    return ProfileModel.find({id })
        .then((list) => list[0])
        .catch((err) => {
            throw `${id} Not Found`;
      });
}

// Creates new profile  
function create(profile: Profile): Promise<Profile> {
    const p = new ProfileModel(profile);
    return p.save();
}

// Updates profile
// new: true means to return new value
function update(
    id: String,
    profile: Profile
): Promise<Profile> {
    return ProfileModel.findOne({id})
    .then((found) => {
        if(!found) throw `${id} Not Found`;
        else 
            return ProfileModel.findByIdAndUpdate(
                found._id,
                profile, {
                    new: true
                }
            );
    }).then((updated) => {
        if(!updated) throw `${id} not updated`;
        else return updated as Profile
    })
}

export default { index, get, create, update };

/*let profiles: Array<Profile> = [
    {
        "id": "1",
        "nameFirst": "Aaron",
        "nameLast": "Bettencourt",
        "age": 23,
        "noisePreferenceIds": [],
        "cleanliness": 5,
        "maxRoomates": 0,
        "maxHousemates": 3,
        "budget": 1,
        "endorsmentIds": [],
        "zipCodes": [95076],
        "livingSpaceIds": [],
    },    
    {
        id: "2",
        nameFirst: "Daron",
        nameLast: "Dettencourt",
        age: 32,
        noisePreferenceIds: [],
        cleanliness: 1,
        maxRoomates: 0,
        maxHousemates: 3,
        budget: 1,
        endorsmentIds: [],
        zipCodes: [95076],
        livingSpaceIds: [],
    }
]

export function get(id: string): Profile | undefined {
    return profiles.find((t) => t.id === id)
}

export default {get};*/