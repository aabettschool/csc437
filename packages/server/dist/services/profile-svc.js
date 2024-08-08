"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var profile_svc_exports = {};
__export(profile_svc_exports, {
  default: () => profile_svc_default
});
module.exports = __toCommonJS(profile_svc_exports);
var import_mongoose = require("mongoose");
var import_mongodb = require("mongodb");
const ProfileSchema = new import_mongoose.Schema(
  {
    id: { type: String, required: true, trim: true },
    nameFirst: { type: String, required: true, trim: true },
    nameLast: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    noisePreferenceIds: [import_mongodb.ObjectId],
    cleanliness: { type: Number, required: true },
    maxRoomates: { type: Number, required: true },
    maxHousemates: { type: Number, required: true },
    budget: { type: Number, required: false },
    endorsmentIds: [import_mongodb.ObjectId],
    zipCodes: [Number],
    livingSpaceIds: [import_mongodb.ObjectId]
  },
  { collection: "user_profiles" }
);
const ProfileModel = (0, import_mongoose.model)("Profile", ProfileSchema);
function index() {
  return ProfileModel.find();
}
function get(id) {
  return ProfileModel.find({ id }).then((list) => list[0]).catch((err) => {
    throw `${id} Not Found`;
  });
}
function create(profile) {
  console.log("CREATING....");
  console.log(profile);
  const p = new ProfileModel(profile);
  return p.save();
}
function update(id, profile) {
  return ProfileModel.findOne({ id }).then((found) => {
    if (!found)
      throw `${id} Not Found`;
    else
      return ProfileModel.findByIdAndUpdate(
        found._id,
        profile,
        {
          new: true
        }
      );
  }).then((updated) => {
    if (!updated)
      throw `${id} not updated`;
    else
      return updated;
  });
}
var profile_svc_default = { index, get, create, update };
