export type Theme = 'light'

export const theme = {
  get(): Theme {
    return 'light'
  },

  set(_theme: Theme): void {
    // no-op (single theme)
  },

  toggle(): Theme {
    return 'light'
  },

  init(): void {
    // no-op (single theme)
  },

  isDark(): boolean {
    return false
  },

  isLight(): boolean {
    return true
  },
}

export default theme
