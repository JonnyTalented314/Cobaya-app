import { Box, Typography } from "@mui/material";

import IconRating from '../../../assets/images/icons/icon-rating.svg'
import CustomButton from "../../Button";
import ImageBox from "../../Image";

export default function EmailConfirmModal({ languages, closeModal }) {
  return (
    <Box sx={{
      maxWidth: '500px',
      borderRadius: '20px 20px',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      padding: { xs: '32px 32px 38px', sm: '32px 60px 22px' }
    }}>
      <ImageBox
        src={IconRating}
        sx={{
          width: { xs: '60px', sm: '100px' },
          height: { xs: '60px', sm: '100px' },
        }}
        alt='icon-rating'
      />
      <Typography 
        variant="semibold"
        sx={{
          fontSize: { xs: '30px', sm: '40px' },
          lineHeight: { xs: '30px', sm: '40px' },
          color: { xs: 'primary.main', sm:'primary.dark' },
          mt: '18px'
        }}
      >
        {languages['Thanks!']}
      </Typography>
      <Typography 
        variant="semibold"
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          lineHeight: '20px',
          color: { xs: 'primary.dark', sm: 'primary.darkLight' },
          mt: '16px',
          textAlign: 'center'
        }}
      >
        {languages['Our Peacekeepers will be in touch.']}
      </Typography>
      <CustomButton
        variant="contained"
        bgColor='#4285F4'
        sx={{
          width: '140px',
          mt: '47px',
          display: { xs: 'flex', sm: 'none' }
        }}
        onClick={closeModal}
      >
        {languages['Close']}
      </CustomButton>
    </Box>
  )
}