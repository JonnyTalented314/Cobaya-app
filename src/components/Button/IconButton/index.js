import { Box } from "@mui/material"
import CustomButton from ".."

export default function IconButton({
  iconLeft,
  iconRight,
  value='',
  sx,
  ...props
}) {
  return (
    <CustomButton
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px:'10px',
        'strong': {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        ...sx,
      }}
    >
      <Box display='flex' alignItems='center'>{iconLeft}</Box>
      <span>{value}</span>
      <Box display='flex' alignItems='center'>{iconRight}</Box>
    </CustomButton>
  )
}