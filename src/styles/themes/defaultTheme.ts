import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
  actions: {
    success: '#6DEE77',
    error: '#FE4A49',
    alert: '#FED766',
  },
  colors: {
    red: {
      primary: '#FE4A49',
      secondary: '#EE667A',
      tertiary: '#EE667A',
    },
    blue: {
      primary: '#2AB7CA',
      secondary: '#26ABCF',
      tertiary: '#267ECF',
    },
    yellow: {
      primary: '#FED766',
      secondary: '#EBE161',
      tertiary: '#EBC661',
    },
    green: {
      primary: '#6DEE77',
      secondary: '#4DEB65',
      tertiary: '#6CBE61',
    },
    grey: {
      primary: '#E6E6EA',
      secondary: '#E3ECE9',
      tertiary: '#EAECE4',
    },
    white: {
      primary: '#F4F4F8',
      secondary: '#F4F7F2',
      tertiary: '#F1F6F8',
    },
    black: {
      primary: '#040F0F',
      secondary: '#0A0A0A',
      tertiary: '#020202',
    },
  },
  fonts: {
    mobile: '10px/16px Poppins',
    small: '12px/18px Poppins',
    medium: '14px/21px Poppins',
    large: '16px/25px Poppins',
    subTitle: '22px/27px Montserrat',
    title: '28px/34px Montserrat',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  shadows: {
    primary: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    secondary:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
    tertiary:
      'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
  },
}

export { defaultTheme }
