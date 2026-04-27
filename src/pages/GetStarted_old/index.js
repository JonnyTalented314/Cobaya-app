import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";

import ContactSalesForm from "../../components/ContactSalesForm";

import PublicBg from '../../assets/images/backgrounds/public-background.svg'

export default function GetStartedPage () {
  const languages = useSelector(state => state.languages)

  return (
    <Box sx={{
      height: { md: 'calc(100vh - 170px)' },
      backgroundImage: `url(${PublicBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pt: '2%'
          }}>
          <Typography
            color='white'
            variant="h5"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '25px',  md: '40px' },
              lineHeight: { xs: '31px', md: '49px' },
            }}
          >
            <Typography
              color='secondary'
              variant="title"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '25px',  md: '40px' },
                lineHeight: { xs: '31px', md: '49px' },
              }}
            >
              {languages['Get Started']}
            </Typography>
            {`${languages[' for the takeoff?']}`}
          </Typography> 
          <Typography
            color='white'
            sx={{
              fontWeight: 700,
              fontSize: { xs: '16px', md: '20px' },
              lineHeight: { xs: '25px', md: '52px' },
              mt: '18px'
            }}
          >
            <strong>{languages['With Coyaba']}</strong>
            <SupText>TM</SupText>
            <strong> {languages['you have all your applications (and more) of your working day in one.']}</strong>
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: '30px',  lg: '70px' }}
          sx={{
            mt: { xs: '20px', md: '40px' },
            pb: '40px'
          }}
        >
          <Box
            sx={{
              minWidth: { md: '610px' },
              width: { xs: 'auto', md: '646px' },
              borderRadius: '20px',
              background: '#284C88',
              padding: { xs: '15px', md: '30px' },
            }}
          >
            <Typography
              variant="semibold"
              sx={{
                fontSize: '20px',
                lineHeight: '40px',
              }}
            >
              {languages['Talk with our Sales Peacekeepers']}
            </Typography>
            <Box
              sx={{
                paddingX: { xs: '10px', sm: '20px' },
                mt: '27px'
              }}
            >
              <ContactSalesForm languages={languages} color='white' />
            </Box>
          </Box>
          <Stack
            direction={'column'}
            spacing={{ xs: '20px',  md: '33px' }}
          >
            <Typography
              variant="semibold"
              sx={{
                color: '#4285F4',
                fontSize: { xs: '20px', md: '30px' },
                mt: '33px'
              }}
            >
              {languages['Why Coyaba?']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['Your Efficiency OS']}
              <SupText>TM</SupText>
              <span> {languages['for a smarter and safer work environment.']}</span>
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['The place to further also the interactions.']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['Build for all companies and teams']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['Customizable to meet your needs whatever your organization and goals']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['Imagine all systems speaking the same language!']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                color: '#fff',
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px'
              }}
            >
              {languages['24/7 support by our Peacekeepers']}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

const SupText = styled('sup')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '8px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '12px'
  },
}))