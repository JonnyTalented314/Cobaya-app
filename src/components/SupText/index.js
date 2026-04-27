import { styled } from '@mui/material/styles';

export default function SupText({ color, size, children }) {
  return (
    <Text color={color} size={size}>{children}</Text>
  )
}

const Text = styled('sup')(({ theme, color, size }) => ({
  color: color,
  fontSize: size + 'px',
  fontFamily: 'Gilroy Semibold',

  [theme.breakpoints.down('md')]: {
    fontSize: (size - 8) + 'px',
  },
  [theme.breakpoints.up('md')]: {

  }
}))