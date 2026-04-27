import { styled } from '@mui/material/styles';

export default function ColorText({ color, children }) {
  return (
    <Text color={color}>{children}</Text>
  )
}

const Text = styled('span')(({ theme, color }) => ({
  color
}))