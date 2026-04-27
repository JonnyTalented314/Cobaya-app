import { Box, Typography } from "@mui/material";
import PublicTopSection from "../../Layouts/Public/PublicTopSection";

export default function TeamsTopSection({ languages }) {
  return (
    <PublicTopSection>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: { xs: '30px', sm: '100px' }
        }}>
        <Box>
          <Typography
            color='white'
            variant="h5"
            sx={{
              maxWidth: { sm: '623px' },
              textAlign: 'center',
              fontSize: { xs: '25px',  md: '40px' },
              lineHeight: { xs: '31px', md: '49px' },
            }}
          >
            {`${languages["Meet the Coyaba's"]} `}
            <Typography
              color='primary'
              variant="title"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '25px',  md: '40px' },
                lineHeight: { xs: '31px', md: '49px' },
              }}
            >
              {languages['Peacekeepers']}
            </Typography>
            {` ${languages['and their']} `}
            <Typography
              color='primary'
              variant="title"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '25px',  md: '40px' },
                lineHeight: { xs: '31px', md: '49px' },
              }}
            >
              {languages['ambitions']}
            </Typography>
          </Typography>
        </Box>
        <Box 
          mt={{ xs: '50px', md: '109px'}}
          textAlign={'center'}
        >
          <Typography
            variant="semibold"
            color='white'
            maxWidth={959}
            fontSize={{ xs: '18px',  md: '25px' }}
            lineHeight={{ xs: '25px', sm: '50px' }}
          >
            {languages['Today, in a scattered digital world, one can easily get lost amongst so many communication channels, incumbent systems that are difficult to integrate or replace (you’d lose all this precious data), having multiple languages, geographical locations, tight and integrated supply chains and many teams that should or should not see things, it is not easy to stay on top and never forget anything important while remaining agile to the ever-changing internal or external environments.']}
          </Typography>
          <Typography
            variant="semibold"
            fontSize={{ xs: '18px', md: '25px' }}
            lineHeight={{ xs: '25px', sm: '50px' }}
            mt={{ xs: '20px', md: '30px' }}
          >
            Marija and Thomas
          </Typography>
          <Typography
            fontSize={{ xs: '18px',  md: '25px' }}
          >
            Founders’ Coyaba
          </Typography>
        </Box>
      </Box>
    </PublicTopSection>
  );
}