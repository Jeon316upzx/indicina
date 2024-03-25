import supertest from "supertest";
import app from "../src/app";
import { UrlModel } from "../src/models/url.model";

import { ORIGINAL_URL, SHORTURL } from "./mockData/index.mock";
import { config } from "../src/validators/env.validator";
import mongoose from "mongoose";
import { extractShortUrlCode } from "../src/utils/extractShortCode";

const { DATABASE_URL } = config;
const request = supertest(app);

let shortUrl: string = "";

beforeAll(async () => {
  await mongoose.connect(DATABASE_URL);
  await UrlModel.findOneAndDelete({ shortUrl: SHORTURL });
});

test("Should encode a Url -> POST /encode", async () => {
  return request
    .post("/api/encode")
    .send({
      originalUrl: ORIGINAL_URL,
    })
    .expect(201)
    .then((res) => {
      shortUrl = res.body.data.shortUrl;
    });
});

test("Should decode a Url -> GET /decode", async () => {
  return request.get(`/api/decode?shortUrl=${shortUrl}`).expect(302);
});

test("Should get the statistics of a Url -> GET /statistic/{url_path}", async () => {
  const extractedPath = extractShortUrlCode(shortUrl);
  return request
    .get(`/api/statistic/${extractedPath}`)
    .expect(200)
    .then((res) => {
      const visits = res.body.data.visits;
      const userAgents = res.body.data.userAgents;
      const url = res.body.data.shortUrl;
      const geolocation = res.body.data.geoLocation;
      expect(visits).toBeGreaterThanOrEqual(0);
      expect(url).toBe(extractedPath);
      expect(geolocation.length).toBeGreaterThan(0);
      expect(userAgents.length).toBeGreaterThan(0);
    });
});

afterAll(async () => {
  await mongoose.connection.close();
});
