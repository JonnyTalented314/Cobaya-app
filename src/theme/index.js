import { createTheme } from '@mui/material'
import { ButtonThemeStyles } from './button-theme-styles'
import { Colors, TextColors } from './colors'
import { IconButtonBaseThemeStyles } from './icon-button-base-theme-styles'
import { TypographyThemeStyles } from './typography-theme-styles'

const mainTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1600,
      xxl: 1920
    },
  },
  typography: {
    fontFamily: ['Gilroy'].join(','),
    title: {
      fontFamily: 'Gilroy Semibold',
      fontWeight: '600',
      
      '@media (max-width:768px)': {
        fontSize: '24px',
        lineHeight: '29px',
      },
      '@media (min-width:768px)': {
        fontSize: '40px',
        lineHeight: '49px',
      },
    },
    sectionTitle: {
      fontFamily: 'Gilroy Bold',
      fontWeight: '700',

      '@media (max-width:768px)': {
        fontSize: '24px',
        lineHeight: '35px',
      },
      '@media (min-width:768px)': {
        fontSize: '40px',
        lineHeight: '52px',
      },
    },
    bold: {
      fontFamily: 'Gilroy Bold',
      fontWeight: '700',
    },
    semibold: {
      fontFamily: 'Gilroy Semibold',
      fontWeight: '600',
    }
  },
  palette: {
    primary: {
      main: Colors.PrimeBlue,
      light: Colors.PrimeLightBlue,
      dark: Colors.PrimeDarkBlue,
      darkLight: Colors.PrimeDarkLightBlue,
      contrastText: TextColors.white,
      pink: Colors.PrimePink
    },
    secondary: {
      main: Colors.SecondPurple,
      contrastText: TextColors.white,
    },
    text: {
      primary: Colors.PrimeDarkBlue,
      secondary: Colors.white,
    },
  },
  components: {
    MuiButton: ButtonThemeStyles,
    MuiTypography: TypographyThemeStyles,
    MuiIconButton: IconButtonBaseThemeStyles,
  },
})

export default mainTheme
