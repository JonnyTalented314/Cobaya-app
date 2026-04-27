export const TableThemeStyles = {
  styleOverrides: {
    root: {
      borderCollapse: 'separate',
      // borderSpacing: '0px 10px',
    },
  },
};

export const TableBodyThemeStyles = {
  styleOverrides: {
    root: {
      borderRadius: 5,
      fontSize: 16,
      lineHeight: '24px',
      textTransform: 'none',
      padding: 10,
      width: '100%',
      '& .MuiTableRow-root': {
        borderRadius: 10,
      },
      '& .MuiTableCell-root': {
        border: 0,
      },
    },
  },
};
