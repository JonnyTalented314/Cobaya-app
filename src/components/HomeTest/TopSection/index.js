import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles';
import CustomButton from '../../Button';
import ColorText from '../../ColorText';

import BannerImg2 from '../../../assets/images/backgrounds/home-banner-2.svg'

const ANCHOR_LINKS = [
  {
    title: 'By Tool',
    id: 'toolkit',
    width: '90px'
  },
  {
    title: 'By Team',
    id: 'coyabaForAll',
    width: '90px'
  },
  {
    title: 'By Case Study',
    id: 'caseStudies',
    width: '110px'
  },
]

export default function HomeTopSection() {
  const languages = useSelector(state => state.languages)

  const onClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container sx={{
      height: { sm: 'calc(100vh - 50px)' },
      minHeight: '700px',
      display: 'flex',
      justifyContent: { xs: 'center', md: 'flex-start' },
      px: { xs: '16px', sm: '67px' },
      // position: 'relative',
      zIndex: 10
    }}>
      <Box
        sx={{
          marginTop: '10%',
          maxWidth: { sm: '600px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 10
          }}
        >
          <Typography
            color='primary.dark'
            sx={{
              fontSize: { xs: '20px', sm: '30px' },
              lineHeight: { xs: '25px', sm: '35px' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <strong>{`${languages['Welcome to Coyaba']}`}</strong>
          </Typography>
          <Typography
            variant="h5"
            color='primary.dark'
            sx={{
              textAlign: { xs: 'center', sm: 'left' },
              maxWidth: { sm: '570px' },
              mt: '10px'
            }}
          >
            <strong>
              {`${languages['Your workspace that increases']} `}
              <ColorText color='#4285F4'>
                {languages['productivity']}
              </ColorText>
              {` ${languages['and saves you']} `}
              <ColorText color='#4285F4'>{`${languages['time']} `} </ColorText>
              {'& '}
              <ColorText color='#4285F4'>{`${languages['money']} `}</ColorText>
            </strong>
          </Typography>
          <Typography
            color='primary.dark'
            sx={{
              maxWidth: { sm: '530px' },
              fontSize: { xs: '16px', sm: '20px' },
              textAlign: { xs: 'center', sm: 'left' },
              lineHeight: { xs: '20px', sm: '22px' },
              marginTop: { xs: '28px', sm: '50px' }
            }}
          >
            {languages['Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.']}
          </Typography>
        </Box>
        <BannerImage2 src={BannerImg2} alt="banner-image" />
        <Box
          sx={{
            position: 'relative',
            zIndex: 10
          }}
        >
          <Typography
            variant='bold'
            color='primary.dark'
            sx={{
              lineHeight: { xs: '30px', sm: '37px' },
              fontSize: { xs: '24px', sm: '30px' },
              marginTop: { xs: '0px', sm: '110px' }
            }}
          >
            {languages['How do you wish to discover Coyaba?']}
          </Typography>
          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: '8px', sm: '13px' }}
            sx={{
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              margin: { xs: '20px 0 40px', sm: '10px 0' },
            }}
          >
            {ANCHOR_LINKS.map((link => (
              <CustomButton
                key={link.id}
                variant='contained'
                bgColor='#23365F'
                sx={{
                  minWidth: { xs: 'auto', sm: '150px' },
                  border: '2px solid #23365F',
                  borderRadius: '10px',

                  '&:hover': {
                    border: '2px solid #4285F4',
                    background: '#4285F4'
                  },
                }}
                onClick={() => onClickScroll(link.id)}
              >
                {languages[link.title]}
              </CustomButton>
            )))}
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

const BannerImage2 = styled('img')(({ theme }) => ({
  width: 'auto',
  objectFit: 'cover',
  right: 0,
  zIndex: 1,

  [theme.breakpoints.down('sm')]: {
    maxHeight: '450px',
    width: '100%',
    objectFit: 'contain',
    marginTop: '30px'
  },
  [theme.breakpoints.up('sm')]: {
    height: '90vh',
    maxHeight: '880px',
    position: 'absolute',
    top: '5%',
    right: '7%'
  }
}))