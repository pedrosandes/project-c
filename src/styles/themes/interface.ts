import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    actions: {
      success: string
      error: string
      alert: string
    }
    colors: {
      red: {
        primary: string
        secondary: string
        tertiary: string
      }
      blue: {
        primary: string
        secondary: string
        tertiary: string
      }
      yellow: {
        primary: string
        secondary: string
        tertiary: string
      }
      green: {
        primary: string
        secondary: string
        tertiary: string
      }
      grey: {
        primary: string
        secondary: string
        tertiary: string
      }
      white: {
        primary: string
        secondary: string
        tertiary: string
      }
      black: {
        primary: string
        secondary: string
        tertiary: string
      }
    }
    fonts: {
      mobile: string
      small: string
      medium: string
      large: string
      subTitle: string
      title: string
    }
    fontWeight: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
    shadows: {
      primary: string
      secondary: string
      tertiary: string
    }
  }
}
