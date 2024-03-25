import { UrlModel } from "../models/url.model";
import { UrlType } from "../types";

export const createNewUrlObject = async (data: UrlType): Promise<any> => {
  const newUrlObj = await new UrlModel({
    ...data,
  });

  return newUrlObj.save();
};

export const findUrlObjByShortUrl = async (shortUrl: string): Promise<any> => {
  const urlObj = await UrlModel.findOne({
    shortUrl: shortUrl,
  });
  return urlObj;
};
