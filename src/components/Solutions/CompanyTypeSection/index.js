import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SolutionsCompanyTypeCard from "../SolutionsCompanyTypeCard";

import PublicBg from '../../../assets/images/backgrounds/public-background.svg'

import { 
  COMPANY_TYPES,
} from "../../../constants";
import CustomButton from "../../Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SolutionsCompanyTypeSection({ languages }) {
  const locale = useSelector(state => state.locale)

  return (
    <Box sx={{
      backgroundImage: `url(${PublicBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%'
    }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box>
            <Typography
              color='white'
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: '705px',
                marginTop: '27px',
                fontSize: { xs: '25px',  md: '40px' },
                lineHeight: { xs: '31px', md: '49px' },
              }}
            >
              {`${languages['Discover our solutions to handle your challenges']} `}
              <Typography
                color='primary'
                variant="title"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '25px',  md: '40px' },
                  lineHeight: { xs: '31px', md: '49px' },
                }}
              >
                {languages['successfully']}
              </Typography>
            </Typography> 
          </Box>
          <Box my={{ xs: '30px', md: '60px' }}>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant={'contained'}
                bgColor={{ xs: '#4285F4', md: '#23365F'}}
                sx={{
                  width: { xs: '150px', sm: '200px' },

                  '&:active': {
                    border: '1px solid #4285F4',
                    background: '#4285F4'
                  },
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
            
          </Box>
          <Box mb={{ xs: '30px', md: '72px'}}>
            <Typography
              color='white'
              fontWeight={'700'}
              fontSize={{ xs: '25px',  md: '40px' }}
            >
              <strong>{languages['Company Type']}</strong>
            </Typography>
          </Box>
          <Box sx={{
            width: { xs: '95%', lg: 'auto' },
            paddingX: { xs: '20px', lg: '70px' },
          }}>
            <Grid container spacing={'20px'} display={{ xs: 'none', lg: 'flex' }}>
              {COMPANY_TYPES.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.title}>
                  <SolutionsCompanyTypeCard
                    item={item}
                    languages={languages}
                  />
                </Grid>
              ))}
            </Grid>
            <Stack
              spacing={2.5}
              direction='row'
              sx={{
                display: { xs: 'flex', lg: 'none' },
                overflowX: 'auto',
              }}
            >
              {COMPANY_TYPES.map((item, index) => (
                <Box key={index}>
                  <SolutionsCompanyTypeCard
                    item={item}
                    languages={languages}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              paddingY: '40px',
              textAlign: 'center'
            }}
          >
            <Typography
              color='white'
              sx={{
                fontWeight: '700',
                fontSize: { xs: '16px',  md: '20px' },
                marginRight: '10px',
                lineHeight: '25px'
              }}
            >
              <strong>{languages['No Free plan available. Amazed?']}</strong>
            </Typography>
            <Typography
              color='white'
              sx={{
                fontWeight: '700',
                fontSize: { xs: '16px',  md: '20px' },
                marginRight: '10px',
                lineHeight: '25px'
              }}
            >
              <strong>{languages['Your data can not be secured for free.']}</strong>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}