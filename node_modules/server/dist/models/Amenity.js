"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Amenity_exports = {};
module.exports = __toCommonJS(Amenity_exports);
var AmenityType = /* @__PURE__ */ ((AmenityType2) => {
  AmenityType2[AmenityType2["Garbage"] = 0] = "Garbage";
  AmenityType2[AmenityType2["Kitchen"] = 1] = "Kitchen";
  AmenityType2[AmenityType2["Laundry"] = 2] = "Laundry";
  AmenityType2[AmenityType2["Power"] = 3] = "Power";
  AmenityType2[AmenityType2["Water"] = 4] = "Water";
  return AmenityType2;
})(AmenityType || {});
