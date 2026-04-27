import { Colors } from './colors';

export const InputThemeStyles = {
  styleOverrides: {
    root: {
      height: 50,
      borderRadius: 10,
      fontSize: 16,
      lineHeight: '24px',
      textTransform: 'none',
      padding: 10,
      width: '100%',
      color: Colors.black,
      border: `1px solid ${Colors.black}`,
      '&:before, :after, :hover:not(.Mui-disabled):before': {
        borderBottom: 0,
      },
    },
  },
};
