import { theme, type Theme } from './theme'

// Re-export Theme type for convenience
export type { Theme } from './theme'

/**
 * Theme utility functions for easy access throughout the application
 */

/**
 * Toggle between dark and light themes
 * @returns {Theme} The new theme after toggling
 */
export function toggleTheme(): Theme {
  return theme.toggle()
}

/**
 * Get the current active theme
 * @returns {Theme} Current theme ('dark' | 'light')
 */
export function getCurrentTheme(): Theme {
  return theme.get()
}

/**
 * Set a specific theme
 * @param {Theme} newTheme - Theme to set ('dark' | 'light')
 */
export function setTheme(newTheme: Theme): void {
  theme.set(newTheme)
}

/**
 * Check if dark mode is currently active
 * @returns {boolean} True if dark mode is active
 */
export function isDarkMode(): boolean {
  return theme.isDark()
}

/**
 * Check if light mode is currently active
 * @returns {boolean} True if light mode is active
 */
export function isLightMode(): boolean {
  return theme.isLight()
}

/**
 * Initialize theme system (call this once on app startup)
 */
export function initializeTheme(): void {
  theme.init()
}

/**
 * Get CSS variable value for current theme
 * @param {string} variableName - CSS variable name (without '--')
 * @returns {string} CSS variable value
 */
export function getCSSVariable(variableName: string): string {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${variableName}`)
      .trim()
  }
  return ''
}

/**
 * Get current color palette as object
 * @returns {Object} Object with current theme colors
 */
export function getCurrentColorPalette() {
  return {
    primary: getCSSVariable('color-primary'),
    secondary: getCSSVariable('color-secondary'),
    accent: getCSSVariable('color-accent'),
    background: getCSSVariable('color-background'),
    surface: getCSSVariable('color-surface'),
    textPrimary: getCSSVariable('color-text-primary'),
    textSecondary: getCSSVariable('color-text-secondary'),
    border: getCSSVariable('color-border'),
    error: getCSSVariable('color-error'),
    warning: getCSSVariable('color-warning'),
    success: getCSSVariable('color-success'),
  }
}

/**
 * Hook-friendly theme state object
 */
export const themeUtils = {
  toggle: toggleTheme,
  current: getCurrentTheme,
  set: setTheme,
  isDark: isDarkMode,
  isLight: isLightMode,
  init: initializeTheme,
  getCSSVar: getCSSVariable,
  getColors: getCurrentColorPalette,
}

export default themeUtils
