/**
 * Prefixes an asset path with the app's base URL so it works locally and on GitHub Pages.
 * Place files in the Vite `public` folder (e.g., `public/media/...`) and pass the relative path.
 */
export const assetPath = (path: string) => {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
};
