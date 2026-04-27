import { BackgroundColors, Colors, TextColors } from './colors'

export const ButtonThemeStyles = {
  styleOverrides: {
    root: {
      borderRadius: 6,
      padding: '8px 16px',
      height: 40,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '24px',
      textTransform: 'none',
      '&.MuiButton-sizeSmall': {
          fontSize: 14,
          padding: '4px 16px',
          height: 34,
      },
    },
  },
  variants: [
    {
      props: { variant: 'contained', color: 'primary' },
      style: {
        background: Colors.PrimaryBlueLightDark,
        color: TextColors.white,
        cursor: 'pointer',
        borderRadius: '60px',
        fontWeight: 700,
        textTransform: 'none',
        height: '50px',
        '&:disabled': {
            backgroundColor: BackgroundColors.lightGrey,
            color: TextColors.default,
        },
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            background: Colors.PrimeBlue,
        },
      },
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        color: Colors.dark_grey,
        border: '2px solid',
        borderColor: Colors.dark_grey,
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
            border: '2px solid',
        },
        '&:disabled': {
            color: TextColors.lightGrey,
        },
      },
    },
    {
      props: { variant: 'contained', color: 'secondary' },
      style: {
        textTransform: 'none',
        backgroundColor: Colors.SecondPurple,
        color: TextColors.black,
        '&:hover': {
          backgroundColor: BackgroundColors.darkGrey,
        },
      },
    },
  ],
}
