import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Container, Typography, Box, Grid } from "@mui/material";
import CustomButton from "../../Button";
import SolutionsSectionCard from "../../SolutionsSectionCard";
import ImageBox from "../../Image";

import { HOME_BUILD_FOR_EVERYONE_MENU } from '../../../constants'
import SolutionCardImage from '../../../assets/images/solutions/solution-image.svg'
import { setHeaderTheme } from "../../../store";

export default function HomeBuildForEveryOneSection() {
  const dispatch = useDispatch()
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(HOME_BUILD_FOR_EVERYONE_MENU[0])
  const [selectedSubMenu, setSelectedSubMenu] = useState(selectedMenu.subMenu[0])

  const handleClickGetStarted = () => {
    dispatch(setHeaderTheme('dark'))
  }

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
          color: '#fff',
          mb: '10px'
        }}
      >
        {languages['Built for everyone']}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#fff',
          marginBottom: { xs: '20px', sm: 0 }
        }}
      >
        <strong>{`${languages['Build for all companies and teams']}`}</strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '25px', sm: '52px' } ,
          color: '#fff',
          marginBottom: '20px'
        }}
      >
        <strong>{languages['Simplify your processes and increase your collective efficiency.']}</strong>
      </Typography>
      <Stack 
        direction="row"
        spacing={{ xs: 6, sm: 10 }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: '#162e58',
          borderRadius: '10px',
          height: '60px',
          paddingX: { xs: '20px', sm: '53px' },
          overflowX: 'auto'
        }}
      >
        {HOME_BUILD_FOR_EVERYONE_MENU.map(menu => (
          <Typography
            key={menu.title}
            variant="semibold"
            sx={{
              fontSize: { xs: '12px', sm: '16px' },
              color: selectedMenu.title === menu.title ? '#12274C' : '#fff',
              borderRadius: '8px',
              background: selectedMenu.title === menu.title ? '#DDEAFB' : 'transparent',
              padding: '10px 20px',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}
            onClick={() => {
              setSelectedMenu(menu)
              setSelectedSubMenu(menu.subMenu[0])
            }}
          >
            {languages[menu.title]}
          </Typography>
        ))}
      </Stack>
      <Box sx={{
        display: { xs: 'none', sm: 'block' },
        marginTop: '20px',
      }}>
        <Grid container columnSpacing={{ xs: 3, md: 8}}>
          <Grid item xs={4} display='flex'>
            <Box sx={{
              width: '100%',
              pl: { xs: '12px', sm: '28px' }
            }}>
              {selectedMenu.subMenu.map(subMenu => (
                <Typography
                  variant="semibold"
                  key={subMenu.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px',
                    color: selectedSubMenu.title === subMenu.title ? subMenu.color : '#fff',
                    paddingY: '12px',
                    cursor: 'pointer',
                    '&:hover': {
                      color: subMenu.color,
                    }
                  }}
                  onClick={() => setSelectedSubMenu(subMenu)}
                >
                  {languages[subMenu.title]}
                </Typography>
              ))}
            </Box>
            <Box sx={{
              background: '#3D5A8C',
              width: '1px',
              height: '320px',
              mt: '40px'
            }}/>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{
              overflowY: 'auto',
              maxHeight: '320px',
              background: '#162e58',
              padding: '40px 20px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Grid container columnSpacing={{ xs: 1, md: 3 }}>
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontSize: '18px',
                      color: '#fff',
                      lineHeight: '22px'
                    }}
                  >
                    {languages[selectedSubMenu.description]}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <ImageBox src={SolutionCardImage} sx={{ width: '100%' }} alt='solution-icon-img' />
                </Grid>
              </Grid>
              <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: '45px',
              }}>
                <Link to={`${locale && `/${locale}`}${selectedSubMenu.href}`}>
                  <CustomButton
                    variant='outlined'
                    bgColor={selectedSubMenu.color}
                    sx={{
                      background: '#fff',
                      width: '200px',
                      border: `1px solid ${selectedSubMenu.color}`,
                    }}
                    onClick={handleClickGetStarted}
                  >
                    {languages['Get Started']}
                  </CustomButton>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Stack
        spacing={2.5}
        direction='row'
        sx={{
          display: { xs: 'flex', sm: 'none' },
          overflowX: 'auto',
          marginTop: '20px',
        }}
      >
        {selectedMenu.subMenu.map((item, index) => (
          <Box key={index}>
            <SolutionsSectionCard
              item={item}
              languages={languages}
              imgWidth='270px'
              contentMinHeight='485px'
            />
          </Box>
        ))}
      </Stack>
    </Container>
  )
}