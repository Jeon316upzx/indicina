import mongoose from "mongoose";

const urlModel = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    unique: true,
    required: true,
  },
  visits: {
    type: Number,
    default: 0,
  },
  userAgents: [String],
  geoLocation: [String],
});


export const UrlModel = mongoose.model("url", urlModel)