import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid } from "@mui/material";
import CustomButton from "../Button";
import ImageBox from "../Image";

import { openModal } from "../../store";
import { HOME_MEANING_ITEMS } from '../../constants'

import AboutImage from '../../assets/images/teams/teams_about_img.svg'

export default function MeaningSection() {
  const dispatch = useDispatch()
  const languages = useSelector(state => state.languages)
  return (
    <Box
      sx={{
        padding: { xs: '20px 20px 34px', sm: '30px' },
      }}
    >
      <Box
        sx={{
          margin: '0 auto'
        }}
      >
        <Container
          sx={{
            padding: 0
          }}
        >
          <Typography
            variant="semibold"
            sx={{
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
              {`${languages['Why Coyaba?']} `}
            </strong>
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          maxWidth: {  xs: '1200px', xl: '1450px' },
          margin: { xs: '20px auto', xl: '68px auto 0' },
          padding: { xs: 0, xl: '0 130px 0 0' }
        }}
      >
        <Grid container columnSpacing={'10px'} sx={{
          flexDirection: { xs: 'column-reverse', md: 'row' }
        }}>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: { xs: '40px', md: 0 }
              }}
            >
              <ImageBox
                maxWidth='476px'
                src={AboutImage}
                alt='about-image'
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={8} mt={{ xs: '30px', lg: 0 }}>
            <Grid container columnSpacing={{ lg: '50px' }} rowSpacing={{ xs: '12px', lg: '40px' }}>
              {HOME_MEANING_ITEMS.map(((item, idx) => (
                <Grid item xs={12} lg={6} key={'meaning-' + idx}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ImageBox
                      src={item.icon}
                      minWidth='40px'
                      minHeight='40px'
                      alt='meaning-icon'
                    />
                    <Typography
                      variant='semibold'
                      sx={{
                        fontSize: { sx: '16px', sm: '20px' },
                        lineHeight: '22px',
                        color: '#284C88',
                        marginLeft: '20px'
                      }}
                    >
                      {languages[item.description]}
                    </Typography>
                  </Box>
                </Grid>
              )))}
            </Grid>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}>
              <CustomButton
                variant='contained'
                bgColor='#284C88'
                sx={{
                  width: { xs: '150px', sm: '200px' },
                  mt: { xs: '40px', sm: '140px',  },

                  '&:hover': {
                    border: '2px solid #4285F4',
                    background: '#4285F4'
                  }
                }}
                onClick={() => {
                  dispatch(
                    openModal({
                      currentModal: 'CONTACT_SALES',
                      modalProps: {}
                  }))
                }}
              >
                {languages['Contact Sales']}
              </CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}