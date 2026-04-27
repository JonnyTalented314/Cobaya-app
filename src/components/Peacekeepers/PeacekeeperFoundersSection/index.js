import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

import MarijaAvatar from '../../../assets/images/teams/Marija_white_Coyaba.svg'
import ThomasAvatar from '../../../assets/images/teams/Thomas_white_Coyaba.svg'
import IconHeartFrance from '../../../assets/images/icons/icon-heart-france.svg'
import IconHeartLithuania from '../../../assets/images/icons/icon-heat-lithuania.svg'
import ImageBox from "../../Image";

export default function TeamsFounderSection({ languages }) {
  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: '700px' },
      }}
    >
      <Container
      >
        <Box 
          py={{ xs: '20px', sm: '63px' }}
        >
          <Box>
            <Typography
              variant="sectionTitle"
            >
              {`${languages["The Founders"]}`}
            </Typography>
          </Box>
          <Box
            px={{ md: '80px' }}
            mt={{ xs: '20px', sm: '55px' }}
          >
            <Grid
              container
              columnSpacing={'50px'}
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', sm: 'start' }}
            >
              <Grid item xs={12} sm={6} position='relative'>
                <Box
                  maxWidth='400px'
                >
                  <ImageBox src={MarijaAvatar}  alt='about-section-img' />
                  <Typography
                    variant="semibold"
                    fontSize={{ xs: '14px',  md: '16px' }}
                    lineHeight='20px'
                    mt={{ xs: '20px', sm: '25px' }}
                    textAlign='center'
                  >
                    {languages['LSE educated with over 10 years of experience in digital departments of various industries, is quite lazy and therefore searches for ways to get things done with the least effort, however, hates lousy work.']}
                  </Typography>
                </Box>
                <IconHeartLithuaniaWrapper>
                  <ImageBox src={IconHeartLithuania} alt='icon-lithuania' />
                  <Typography
                    variant="semibold"
                    fontSize={{ xs: '16px', sm: '25px' }}
                    pr='30px'
                  >
                    Marija
                  </Typography>
                </IconHeartLithuaniaWrapper>
              </Grid>
              <Grid item xs={12} sm={6} position='relative'>
                <Box
                  maxWidth='400px'
                  mt={{ xs: '20px', sm: '100px' }}
                >
                  <ImageBox src={ThomasAvatar} alt='about-section-img' />
                  <Typography
                    variant="semibold"
                    fontSize={{ xs: '14px',  md: '16px' }}
                    lineHeight='20px'
                    textAlign='center'
                    mt='20px'
                  >
                    {languages['With over 15 years of experience in large industries and in running his own startups, is the creative and functional mind behind Coyaba.']}
                  </Typography>
                </Box>
                <IconHeartFranceWrapper>
                  <ImageBox src={IconHeartFrance} alt='icon-france' />
                  <Typography
                    variant="semibold"
                    fontSize={{ xs: '16px', sm: '25px' }}
                    pr='30px'
                  >
                    Thomas
                  </Typography>
                </IconHeartFranceWrapper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const IconHeartFranceWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',

  'img': {
    width: '20px',
    height: '20px',
    marginRight: '4px',
  },

  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    left: 50,
    top: 80,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '0px',

    'img': {
      width: '30px',
      height: '30px',
    },
  },
}))

const IconHeartLithuaniaWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',

  'img': {
    width: '26px',
    height: '26px',
    marginRight: '2px',
  },

  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    right: 0,
    top: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: '0px',

    'img': {
      width: '36px',
      height: '36px'
    },
  },
}))