import { Router } from "express";
import {
  encodeUrlController,
  decodeUrlController,
  statisticsController,
} from "../controllers/url.controller";
const urlRouter = Router();

urlRouter.post("/encode", encodeUrlController);
urlRouter.get("/decode/:shortUrl", decodeUrlController);
urlRouter.get("/statistic/:url", decodeUrlController);

export default urlRouter;
