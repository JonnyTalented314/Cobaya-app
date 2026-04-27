export const TypographyThemeStyles = {
  defaultProps: {
    variantMapping: {
      title: 'span',
      semibold: 'p',
      sectionTitle: 'p',
      bold: 'p'
    },
  },
  styleOverrides: {
    body1: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '45px',
      fontWeight: 'bold',
      lineHeight: '55px',
    },
    h5: {
      fontWeight: '600',
      fontFamily: 'Gilroy Semibold',

      '@media (max-width:768px)': {
        fontSize: '24px',
        lineHeight: '29px',
      },
      '@media (min-width:768px)': {
        fontSize: '40px',
        lineHeight: '49px',
      },
    },
    h6: {
      fontWeight: '600',
      fontFamily: 'Gilroy Semibold',

      '@media (max-width:768px)': {
        fontSize: '20px',
        lineHeight: '25px',
      },
      '@media (min-width:768px)': {
        fontSize: '30px',
        lineHeight: '39px',
      },
    },
    paragraph: {
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '21px',
    }
  },
}
