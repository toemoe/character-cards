export const getAssetPath = (path: string): string => {
  if (import.meta.env.DEV) {
    return `/${path}`;
  }
  return `/character-cards/${path}`;
};