import Button from '@mui/material/Button';

export default function CustomButton({
  children,
  bgColor = '#fff',
  color = '#fff',
  active = false,
  variant,
  ...props
}) {
  const sx = {
    background: variant === 'outlined' ? 'transparent' : bgColor,
    minWidth: { xs: '120px', md: '150px' },
    height: { xs: '45px', md: '45px' },
    fontWeight: 700,
    fontSize: { xs: '14px', md: '18px' },
    lineHeight: { xs: '16px', sm: '18px' },
    color: variant === 'outlined' ? bgColor : color,
    border: `2px solid ${bgColor}`,
    borderRadius: '40px',
    padding: '0 4px',

    '&:hover': {
      border: `2px solid ${bgColor}`,
      background: bgColor,
      color: color
    },

    '&:focus': {
      outline: 'none',
    },

    '&:active': {
      border: `2px solid ${bgColor}`,
      background: bgColor,
      color: color
    },

    '&:disabled': {
      background: '#fff',
      color: bgColor
    },
    ...props.sx
  };
  return (
    <Button
      {...props}
      sx={sx}
    >
      <strong>{children}</strong>
    </Button>
  )
}