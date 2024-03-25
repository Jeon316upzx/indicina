import { Router } from "express";
import {
  encodeUrlController,
  decodeUrlController,
  statisticsController,
} from "../controllers/url.controller";
const urlRouter = Router();

urlRouter.post("/encode", encodeUrlController);
urlRouter.get("/decode", decodeUrlController);
urlRouter.get("/statistic/:url_path", statisticsController);

export default urlRouter;
