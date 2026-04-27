import { Container, Link, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { useSelector } from "react-redux";

const Wrapper = styled(Container)`
  margin: 0 auto;
  padding: 150px 24px 24px;
  text-align: center;
`;

export default function PageNotFound() {
  const locale = useSelector(state => state.locale)
  return (
    <Wrapper>
      <Typography
        variant="h5"
        color='white'
        sx={{
          fontSize: { xs: '24px', sm: '40px' },
        }}
      >
        SORRY, THAT PAGE DOESN’T EXIST!
      </Typography>
      <Typography
        color='white'
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          marginTop: '20px'
        }}
      >
        WE COULDN&lsquo;T FIND THE PAGE YOU WERE LOOKING FOR.
      </Typography>
      <Link href={`${locale && `/${locale}`}/home`} color='primary' underline="none" sx={{
        marginTop: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <HomeIcon color="primary" />
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            marginLeft: '5px'
          }}
        >
          Go Home
        </Typography>
      </Link>
    </Wrapper>
  );
}
