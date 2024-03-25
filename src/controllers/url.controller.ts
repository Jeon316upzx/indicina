import { Request, Response } from "express";
import {
  errorResponseHandler,
  redirectRequestHandler,
  successResponseHandler,
} from "../utils/response";
import { validateUrl } from "../validators/url.validator";
import { encodeUrl } from "../utils/encode";
import { config } from "../validators/env.validator";
import {
  createNewUrlObject,
  findUrlObjByShortUrl,
  updateUrlStatistics,
} from "../services/url.services";
import { extractShortUrlCode } from "../utils/extractShortCode";

const { DOMAIN } = config;

export const encodeUrlController = async (req: Request, res: Response) => {
  try {
    // extract originalUrl from request body
    const { originalUrl } = req.body;

    // validate url data
    const isValidUrl = validateUrl(originalUrl);
    if (!isValidUrl) errorResponseHandler(res, 400, new Error("Invalid Url"));

    // generate url short code
    const encodedUrl: string = encodeUrl(6);

    //extract userAgent
    let userAgentList: string[];
    let userAgent = req.headers["user-agent"];
    userAgentList.push(userAgent);

    // extract ip address
    let geoLocationList: string[];
    let geoLocation = req.ip;
    geoLocationList.push(geoLocation);
    const createdUrlModel = await createNewUrlObject({
      originalUrl: originalUrl,
      shortUrl: encodedUrl,
      userAgents: userAgentList,
      geoLocation: geoLocationList,
    });

    if (!createdUrlModel)
      errorResponseHandler(res, 400, new Error("Url Shortening Failed"));
    const shortUrl = DOMAIN + createdUrlModel.shortUrl;
    successResponseHandler(res, 201, { shortUrl });
  } catch (e: any) {
    errorResponseHandler(res, 500, new Error(e));
  }
};

export const decodeUrlController = async (req: Request, res: Response) => {
  try {
    const shortUrl = req.params.shortUrl;
    const isValidUrl = validateUrl(shortUrl);
    if (!isValidUrl) errorResponseHandler(res, 400, new Error("Invalid Url"));
    const extractedQuery = extractShortUrlCode(shortUrl);
    if (!extractedQuery)
      errorResponseHandler(res, 400, new Error("Invalid Url"));
    const foundShortUrl = await findUrlObjByShortUrl(extractedQuery);
    if (!foundShortUrl)
      errorResponseHandler(res, 404, new Error("Url Object Not Found"));

    //extract userAgent
    let userAgentList: string[];
    let userAgent = req.headers["user-agent"];
    userAgentList.push(userAgent);

    // extract ip address
    let geoLocationList: string[];
    let geoLocation = req.ip;
    geoLocationList.push(geoLocation);

    const data = {
      shortUrl: foundShortUrl.shortUrl,
      visits: foundShortUrl.visits++,
      userAgents: userAgentList,
      geoLocation: geoLocationList,
    };
    await updateUrlStatistics(data);

    const redirectUrl = `${DOMAIN}${foundShortUrl.shortUrl}`;
    redirectRequestHandler(res, redirectUrl, 302);
  } catch (e: any) {
    errorResponseHandler(res, 500, new Error(e));
  }
};

export const statisticsController = (req: Request, res: Response) => {};
