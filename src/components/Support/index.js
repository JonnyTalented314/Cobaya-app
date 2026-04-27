import { useSelector } from "react-redux";
import { Container, Typography, Box, Grid, useMediaQuery } from "@mui/material";
import CustomButton from "../Button";
import CustomInput from "../Input"; 

export default function SupportSection() {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const languages = useSelector(state => state.languages)

  return (
    <Box
      id='support'
      sx={{
        width: '100%',
        background: '#172434'
      }}
    >
      <Container
        sx={{
          padding: { xs: '20px 16px 34px', sm: '44px 30px 20px 39px' }
        }}
      >
        <Typography
          variant="semibold"
          sx={{
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '10px'
          }}
        >
          {languages['Support']}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            marginBottom: { xs: '20px', md: '32px' }
          }}
        >
          <strong>{languages['24/7 support by our Peacekeepers']}</strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontWeight: '700',
            lineHeight: { xs: '20px', md: '25px' },
            color: '#fff',
            marginBottom: { xs: '0', md: '64px' }
          }}
        >
          <strong>
            {`${languages['Our team of Peacekeepers remains available to help you to make most of your Coyaba and all its functions.']}`}<br />
            {`${languages['Our goal, your efficiency.']}`}
          </strong>
        </Typography>
        <Box sx={{
          marginY: { xs: '25px', md: '43px' },
        }}>
          <Grid container columnSpacing={8} sx={{
            alignItems: 'center',
          }}>
            <Grid item xs={12} md={9}>
              <CustomInput
                type="email"
                id="email"
                placeholder={xs ? 
                  languages['How can we help you?'] : 
                  languages['How can we help you? Feel free to ask and we answer within the next 24 hours.']
                }
                height={60}
                sx={{
                  color: '#12274C',
                  border: '1px solid #CED6E8',
                  borderRadius: '10px',
                  fontWeight: 500,
                  fontSize: '20px',
                  background: '#fff'
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={3} display='flex' justifyContent='center'>
              <CustomButton
                variant='contained'
                bgColor={{ xs: 'white', sm: '#12274C' }}
                color={{ xs: '#12274C', sm: 'rgba(243, 247, 252, 0.5)' }}
                sx={{
                  width: '200px',
                  marginTop: { xs: '24px', md: '0' },
                  fontWeight: '700',

                  '&:active': {
                    border: `2px solid #fff`,
                    background: '#fff',
                    color: '#12274C'
                  },
                }}
              >
                {languages['Send']}
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}