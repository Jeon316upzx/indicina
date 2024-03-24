import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { errorResponseHandler } from "./utils/response";


/**
 *  App Setup
 * 
 *  create an express app instance,
 *  using helmet to protect the instance
 *  from security vulnerabilities and allow
 *  allow all requests using cors
 *  
 *  @author Ifeanyi Anuebunwa
 */

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("*", (res: Response, req: Request) => {
  return errorResponseHandler(res, 404, new Error("Path / Route not found"));
});

export default app;
