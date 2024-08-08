import {Profile, Endorsement} from "server/models";

// ?: may be undefined
export interface Model {
    profile?: Profile;
    endorsement?: Endorsement;
}

// Export empty object
export const init: Model = {};