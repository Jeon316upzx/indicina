export const extractShortUrlCode = (url: string): string | null => {
  const regex = /http:\/\/short\.est\/([^\/]+)/;
  const match = url.match(regex);
  return match && validateShortCode(match[1]) ? match[1] : null;
};


export const validateShortCode = (code: string)=>{
    return code.length === 6
}