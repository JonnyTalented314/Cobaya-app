import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import ImageBox from "../../Image";

import AboutImage from '../../../assets/images/teams/teams_about_img.svg'

export default function TeamsAboutSection({ languages }) {
  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: '700px' },
        background: '#fff',
      }}
    >
      <Container
      >
        <Box 
          py={{ xs: '20px', sm: '63px' }}
        >
          <Box>
            <Typography
              color='primary.dark'
              variant="sectionTitle"
            >
              {`${languages["What’s Coyaba?"]}`}
            </Typography>
          </Box>
          <Grid
            container
            columnSpacing={'50px'}
            flexDirection={{ xs: 'column-reverse', sm: 'row' }}
            mt={{ xs: '20px', sm: '93px' }}
          >
            <Grid item xs={12} sm={7}>
              <Box mt={{ xs: '20px', sm: 0 }}>
                <Typography
                  maxWidth={{ sm: '600px' }}
                  variant="semibold"
                  color='primary.dark'
                  fontSize={{ xs: '14px',  md: '16px' }}
                  lineHeight={{ xs: '20px', sm: '31px' }}
                >
                  {languages['Coyaba is your everyday efficiency toolkit (Efficiency Operating System) for a']}
                  <BoldText> {languages['smarter']} </BoldText>
                  {languages['and']}
                  <BoldText> {languages['safer']} </BoldText>
                  {languages['work environment, that helps you gain time, reduce stress and headaches.']}
                </Typography>
                <Typography
                  variant="semibold"
                  color='primary.dark'
                  fontSize={{ xs: '14px',  md: '16px' }}
                  lineHeight={{ xs: '20px', sm: '31px' }}
                  mt={{ xs: '20px', sm: '30px' }}
                >
                  {languages['Coyaba will']}
                  <BoldText> {languages['coax you into lazy cleverness']} </BoldText>
                  {languages['where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.']}
                </Typography>
                <Typography
                  variant="semibold"
                  color='primary.dark'
                  fontSize={{ xs: '14px',  md: '16px' }}
                  lineHeight={{ xs: '20px', sm: '31px' }}
                  mt={{ xs: '20px', sm: '30px' }}
                >
                  {languages['Coyaba in the South American language of Arawak means']}
                  <BoldText> {languages['“a place of rest”']} </BoldText>
                  {languages['and is usually referred to as paradise.']}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} display='flex' flexDirection={'column'} alignItems='center'>
              <ImageBox 
                maxWidth='500px'
                src={AboutImage}
                alt='about-section-img'
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const BoldText = styled('strong')(({ theme, layout, pathname }) => ({
  color: '#4285F4',
  fontSize: '16px',

  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
}))