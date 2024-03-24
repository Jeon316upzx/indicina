export type EnvConfig = {
  PORT: number;
  JWT_SECRET: string;
  DATABASE_URL: string;
  BASE_URL: string;
};

export type UrlModel = {
  originalUrl: string;
  shortUrl: string;
  visits: number;
  userAgents: string[];
  geoLocation: string[];
};
