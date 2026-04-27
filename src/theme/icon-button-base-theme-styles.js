import { Colors } from './colors'

export const IconButtonBaseThemeStyles = {
    styleOverrides: {
        root: {
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
                background: Colors.PrimeBlue,
                boxShadow: 'none',
            },
        },
    },
}
