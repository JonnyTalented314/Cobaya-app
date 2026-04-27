import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Typography, Box, Grid, useMediaQuery } from "@mui/material";
import CustomButton from "../../Button";
import ImageBox from "../../Image";
import ColorText from "../../ColorText";

import ConnectorImage from '../../../assets/images/home/connectors_computers_image.svg';

export default function HomeConnectorSection({ isSectionTitle = false ,activeColor = '#34A853', padding = '10px 30px' }) {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  return (
    <Container sx={{
      padding: { xs: '20px 16px 34px', sm: padding }
    }}>
      <Typography
        variant="semibold"
        sx={{
          display: { xs: !isSectionTitle && 'none', sm: 'block' },
          fontSize: '12px',
          lineHeight: '36px',
          textTransform: 'uppercase',
          color: '#12274C',
          marginBottom: '10px'
        }}
      >
        {languages['Connectors']}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#12274C',
        }}
      >
        <strong>{`${languages['Imagine all systems']} `}</strong>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#12274C',
          marginBottom: { xs: '15px', sm: '30px' }
        }}
      >
        <strong>
          {`${languages[' speaking the']} `}
          <ColorText color={activeColor}>
            {languages["same language!"]}
          </ColorText>
        </strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '25px', sm: '36px' },
          color: '#12274C',
        }}
      >
        <strong>{languages['Instant import of data from all your applications (homemade or well-known)']}</strong>
      </Typography>
      <Box sx={{
        marginTop: { xs: '20px', sm: 0 },
      }}>
        <Grid container columnSpacing={2} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
          <Grid item xs={12} sm={7}>
            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: '400',
                lineHeight: { xs: '20px', sm: '22px' },
                color: '#12274C',
                marginTop: { sm: '40px' }
              }}
            >
              {languages['Search into our library of native connectors. If you don’t find it, no worries, build your own connector well fitted with your system.']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                fontSize: { xs: '16px', sm: '18px' },
                lineHeight: '22px',
                color: activeColor,
                marginTop: '50px',
              }}
            >
              {languages['CONNECT TO: JIRA, CLICKUP, ASANA, MONDAY,...']}
            </Typography>
            <Typography
              variant="semibold"
              sx={{
                fontSize: { xs: '16px', sm: '18px' },
                lineHeight: '22px',
                color: activeColor,
              }}
            >
              {languages['IMPORT: EXCEL, CSV FILE and MUCH MORE']}
            </Typography>
            <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: '36px', sm: '80px' },
            }}>
              <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                <CustomButton
                  variant={ xs ? 'outlined' : 'outlined' }
                  bgColor={activeColor}
                  sx={{
                    width: { xs: '150px', sm: '200px' },
                    border: `1px solid ${activeColor}`
                  }}
                >
                  {languages['Get Started']}
                </CustomButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} display='flex' flexDirection={'column'} alignItems='center'>
            <Typography
              sx={{
                display: { xs: 'block', sm: 'none' },
                fontSize: { xs: '14px', sm: '18px' },
                fontWeight: '400',
                lineHeight: { xs: '20px', sm: '22px' },
                color: '#12274C',
                mb: '20px'
              }}
            >
              {languages['Search into our library of native connectors. If you don’t find it, no worries, build your own connector well fitted with your system.']}
            </Typography>
            <ImageBox
              maxWidth='545px'
              src={ConnectorImage}
              alt='connector'
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
