import { Response } from "express";

export const errorResponseHandler = (
  res: Response,
  statusCode: number,
  error: Error
) => {
  return res.status(statusCode).json({
    success: false,
    error: error.message,
  });
};

export const successResponseHandler = (
  res: Response,
  statusCode: number,
  data: any
) => {
  return res.status(statusCode).json({
    success: true,
    data: data,
  });
};


export const redirectRequestHandler = (
  res: Response,
  statusCode: number,
) => {
  return res.status(statusCode)
};


