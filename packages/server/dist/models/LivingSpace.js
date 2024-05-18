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
var LivingSpace_exports = {};
module.exports = __toCommonJS(LivingSpace_exports);
var LivingSpaceType = /* @__PURE__ */ ((LivingSpaceType2) => {
  LivingSpaceType2[LivingSpaceType2["Apartment"] = 0] = "Apartment";
  LivingSpaceType2[LivingSpaceType2["Condominium"] = 1] = "Condominium";
  LivingSpaceType2[LivingSpaceType2["House"] = 2] = "House";
  LivingSpaceType2[LivingSpaceType2["Townhouse"] = 3] = "Townhouse";
  LivingSpaceType2[LivingSpaceType2["Trailer"] = 4] = "Trailer";
  return LivingSpaceType2;
})(LivingSpaceType || {});
