
export const validateUrl = (url: string): boolean => {
  try {
    const isValidUrl = new URL(url);
    if (!isValidUrl) return false;
    return true;
  } catch (e: any) {
    return false;
  }
};
