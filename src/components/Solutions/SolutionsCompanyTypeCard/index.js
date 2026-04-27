import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../../Button";

export default function SolutionsCompanyTypeCard({ item, languages }) {
  const locale = useSelector(state => state.locale)
  return (
    <Box
      sx={{
        background: '#FFFFFF',
        borderRadius: '30px 30px 10px 10px',
        paddingX: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '366px'
      }}
    >
      <Box
        sx={{
          width: item.iconWidth,
          height: '90px',
          display: 'flex',
          justifyContent: 'center',
          alginItems: 'flex-end'
        }}
      >
        <CardIcon src={item.icon} alt={item.title} />
      </Box>
      <Typography
        color={'#12274C'}
        sx={{
          fontWeight: 700,
          fontSize: '20px',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginTop: '24px',
          marginBottom: '12px'
        }}
      >
        <strong>{languages[item.title]}</strong>
      </Typography>
      <Typography
        color={'#12274C'}
        sx={{
          fontSize: '14px',
          lineHeight: '17px',
          textAlign: 'center'
        }}
      >
        {languages[item.description]}
      </Typography>
      <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
        <CustomButton
          variant={'outlined'}
          bgColor={item.buttonColor}
          sx={{
            width: '175px',
            marginTop: '32px',
          }}
        >
          {languages['Get Started']}
        </CustomButton>
      </Link>
    </Box>
  )
}

const CardIcon = styled.img`
  width: '100%'
`