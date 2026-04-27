import { useSelector } from "react-redux";
import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel'
import CustomButton from "../../Button";

import { HOME_MEANING_CAROUSEL_ITEMS } from '../../../constants'
import { Link } from "react-router-dom";

export default function HomeMeaningSection() {
  const languages = useSelector(state => state.languages)
  return (
    <Container sx={{
      padding: { xs: '20px 16px 34px', sm: '10px 30px' }
    }}>
      <Typography
        variant="semibold"
        sx={{
          display: { xs: 'none', sm: 'block' },
          fontSize: '12px',
          lineHeight: '36px',
          textTransform: 'uppercase',
          color: '#12274C',
          marginBottom: '10px'
        }}
      >
        {languages['Meaning']}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#12274C',
          marginBottom: '10px'
        }}
      >
        <strong>
          {`${languages["What's a"]} `}
          <BlueTitleText>
            {languages["Efficiency OS"]}
            <BluePurpleTextSup>TM</BluePurpleTextSup>
          </BlueTitleText>
        </strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '22px', sm: '36px' },
          color: '#12274C',
        }}
      >
        <strong>
          {languages["With Coyaba"]}
          <sup style={{ fontSize: '10px' }}>TM</sup>
          {` ${languages['you have all your applications (and more) of your working day in one.']}`}
        </strong>
      </Typography>
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: { xs: '20px', sm: '52px' },
          color: '#12274C',
          mt: { xs: '24px', sm: '12px' }
        }}
      >
        <strong>{languages['Create a workspace and discover all functions to increase your efficiency with your teams.']}</strong>
      </Typography>
      <Box>
        <Carousel>
        {
          HOME_MEANING_CAROUSEL_ITEMS.map( (item, i) => <CarouselItem key={i} item={item} /> )
        }
        </Carousel>
      </Box>
    </Container>
  )
}

function CarouselItem({item}) {
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)
  return (
    <Box sx={{
      width: '100%',
      height: '439px'
    }}>
      <Grid container columnSpacing={{ sm: 2 }}>
        <Grid item xs={12} sm={6} display='flex' flexDirection={'column'} justifyContent='space-between' py={{ xs: '20px' , sm: '36px' }}>
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '18px' },
              lineHeight: { xs: '20px', sm: '22px' },
              color: '#12274C',
            }}
          >{languages[item.description]}</Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant='contained'
                bgColor={{ xs:'#4285F4', sm: '#23365F' }}
                sx={{
                  width: { xs: '150px', sm: '200px' },
                  mt: { xs: '40px', sm:  '150px' },

                  '&:hover': {
                    border: '2px solid #4285F4',
                    background: '#4285F4'
                  }
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display='flex' justifyContent='center'>
          <Box
            sx={{
              maxWidth: { xs: '400px', sm: '100%' }
            }}
          >
            {item.image}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const BluePurpleTextSup = styled('sup')(({ theme }) => ({
  color: '#4285F4',
  fontWeight: 600,
  fontSize: '25px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {

  }
}))

const BlueTitleText = styled('span')`
  color: #4285F4;
`;