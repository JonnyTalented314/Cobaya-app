import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Stack, Container, Typography, Box, Grid, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import CustomButton from "../Button";
import ImageBox from "../Image";

export default function DiscoverSection({ 
  menuItems = [],
  title,
  activeColor = '#4285F4',
  tabBgColor = '#fff',
  page,
  buttonVariant = 'outlined', 
  sx 
}) {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(menuItems[0])

  return (
    <Container
      sx={{
        padding: { xs: '20px 16px 34px', sm: '10px 30px' },
        ...sx
      }}
    >
      {title && (
        <Typography
          variant="semibold"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontSize: '12px',
            lineHeight: '36px',
            textTransform: 'uppercase',
            color: '#12274C',
            mb: '10px'
          }}
        >
          {languages[title]}
        </Typography>
      )}
      <Typography
        variant="h5"
        sx={{
          color: '#12274C',
          marginBottom: '20px'
        }}
      >
        <strong>
          {`${languages["Discover your"]} `}
          <BlueTitleText color={activeColor}>
            {languages["Efficiency OS"]}
            <BluePurpleTextSup>TM</BluePurpleTextSup>
          </BlueTitleText>
        </strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '25px', sm: '36px' },
          color: '#12274C',
          marginBottom: '20px'
        }}
      >
        <strong>{languages['Create a workspace and discover all functions to increase your efficiency with your teams.']}</strong>
      </Typography>
      <Stack 
        direction="row"
        spacing={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: tabBgColor,
          justifyContent: 'space-between',
          borderRadius: '10px',
          height: '60px',
          paddingX: { xs: 0, sm: '53px' },
          overflowX: 'auto',
          overflowY: 'hidden'
        }}
      >
        {menuItems.map(menu => (
          <Typography
            key={menu.title}
            variant="semibold"
            sx={{
              fontSize: { xs: '12px', sm: '16px' },
              color: selectedMenu.title === menu.title ? '#F3F7FC' : '#12274C',
              borderRadius: '8px',
              background: selectedMenu.title === menu.title ? activeColor : 'transparent',
              padding: { xs: '4px 7px', sm: '10px 20px' },
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onClick={() => setSelectedMenu(menu)}
          >
            {languages[menu.title]}
          </Typography>
        ))}
      </Stack>
      <Box sx={{
        marginTop: '20px',
      }}>
        <Grid container columnSpacing={4} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid item xs={12} sm={6}>
            <Box maxWidth={{ sm: '506px' }} pt={'20px'}>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '20px' },
                  fontWeight: '700',
                  color: '#12274C',
                  marginBottom: { xs: '8px', sm: '30px' }
                }}
              >
                <strong>{languages['Create a workspace and discover all functions to increase your efficiency with your teams.']}</strong>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '16px' },
                  color: '#12274C',
                  marginBottom: { xs: '8px', sm: '30px' }
                }}
              >
                {languages[selectedMenu.description]}
              </Typography>
              <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                  <CustomButton
                    variant={ xs ? 'contained' : buttonVariant }
                    bgColor={activeColor}
                    active
                    sx={{
                      width: { xs: '150px', sm: '200px' },
                      mt: { xs: '30px', sm: '80px' },
                      border: `1px solid ${activeColor}`
                    }}
                  >
                    {languages['Get Started']}
                  </CustomButton>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} display={'flex'} justifyContent={'center'}>
            <ImageBox
              maxWidth='530px'
              src={selectedMenu.image} alt='toolkit-img' 
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

const BlueTitleText = styled('span')(({ theme, color }) => ({
  color: color
}))

const BluePurpleTextSup = styled('sup')(({ theme, color }) => ({
  color: color,
  fontWeight: 600,
  fontSize: '25px',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {

  }
}))