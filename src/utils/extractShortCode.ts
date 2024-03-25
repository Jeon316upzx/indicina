export const extractShortUrlCode = (url: string): string | null => {
  const regex = /http:\/\/short\.est\/([^\/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};
