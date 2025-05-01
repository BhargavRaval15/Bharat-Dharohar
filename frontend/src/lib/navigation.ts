/**
 * Navigation utility functions to simplify navigation in the application
 */

/**
 * Navigate to a specific path using window.location
 * This is a fallback method when React Router's navigation isn't working
 */
export const navigateTo = (path: string): void => {
  window.location.href = path;
};

/**
 * Open a page in a new tab
 */
export const openInNewTab = (path: string): void => {
  window.open(path, '_blank');
};

/**
 * Check if the current path matches a given path
 */
export const isCurrentPath = (path: string): boolean => {
  return window.location.pathname === path;
};

/**
 * Get the current path from the window location
 */
export const getCurrentPath = (): string => {
  return window.location.pathname;
};

export default {
  navigateTo,
  openInNewTab,
  isCurrentPath,
  getCurrentPath
}; 