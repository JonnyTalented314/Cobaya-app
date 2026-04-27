import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { FaArrowRight } from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SolutionsSectionCard({ languages, item, imgWidth = '100%', contentMinHeight }) {
  const locale = useSelector(state => state.locale)
  const [isHover, setIsHover] = useState(false)

  return (
    <Box
      sx={{
        width: '100%',
        background: '#F5F9FF',
        borderRadius: '32px',
      }}
    >
      <Box
        sx={{
          padding: '18px 24px 26px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: contentMinHeight,
        }}
      >
        <ImageWrapper src={item.image} alt={item.title} imgWidth={imgWidth} />
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            mt: '20px',
            color: item.color,
          }}
        >
          <strong>{languages[item.title]}</strong>
        </Typography>
        <Box
          sx={{
            marginTop: '8px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: '#12274C',
              lineHeight: '17px',
              textAlign: 'center',
              transition: 'color 0.2s 0.1s',
              '&:hover': {
                color: item.color,
              }
            }}
          >
            {languages[item.description]}
          </Typography>
        </Box>
      </Box>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        sx={{
          background: item.color,
          borderRadius: '0px 0px 30px 30px',
          padding: '16px',
          cursor: 'pointer',
        }}
      >
        {/* <Link to={`${locale && `/${locale}`}${item?.href}`}> */}
        <Link to={`${locale && `/${locale}`}/getstarted`}>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                color: 'white',
                lineHeight: '17px',
                fontWeight: '700',
                mr: '4px'
              }}
            >
              <strong>{languages['Get Started']}</strong>
            </Typography>
            <Typography
              sx={{
                display: 'inherit',
                color: 'white',
                marginLeft: isHover ? '7px' : '0',
                transition: 'margin 0.1s 0.1s'
              }}
            >
              <FaArrowRight size={15} />
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

const ImageWrapper = styled.img`
  width: ${({ imgWidth }) => imgWidth };
  object-fit: cover;
`