import { Colors } from './colors';

export const TextAreaFieldThemeStyles = {
  styleOverrides: {
    root: {
      width: '100%',
      '& .MuiInputBase-root': {
        borderRadius: 5,
        fontSize: 16,
        lineHeight: '24px',
        textTransform: 'none',
        padding: 10,
        color: Colors.Maximum_blue_purple,
        border: `1px solid ${Colors.lavender_blue}`,
        "&:focus-within": {
          borderColor: Colors.slate_blue,
          color: Colors.slate_blue,
        },
        '&:before, :after, :hover:not(.Mui-disabled):before': {
          borderBottom: 0,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
      },
    },
  },
};
