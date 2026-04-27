import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import IconButton from "../../Button/IconButton";
import SolutionsSectionCard from "../../SolutionsSectionCard";

export default function SolutionSection({ languages, items, title }) {
  const [isMore, setIsMore] = useState(false)

  return (
    <Box
      sx={{
        background: '#fff'
      }}
    >
      <Container
        sx={{
          padding: { xs: '20px', md: '100px 70px 50px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{
          color: '#12274C',
          fontWeight: 700,
          fontSize: { xs: '25px',  md: '40px' },
        }}>
          <strong>{languages[title]}</strong>
        </Typography>
        <Box mt='30px' width={{ xs: '95%', lg: 'auto' }}>
          <Grid container spacing='18px' display={{ xs: 'none', lg: 'flex' }}>
            {items.map((item, index) => (
              <Fragment key={item.title}>
              {!isMore ? (
                <>
                {index < 6 && (
                  <Grid item xs={6} md={4}>
                    <SolutionsSectionCard
                      item={item}
                      languages={languages}
                    />
                  </Grid>
                )}
                </>
              ) : (
                <Grid item xs={6} md={4}>
                    <SolutionsSectionCard
                      item={item}
                      languages={languages}
                    />
                  </Grid>
              )}
              </Fragment>
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
            {items.map((item, index) => (
              <Box sx={{ width: '300px' }} key={index}>
                <SolutionsSectionCard
                  item={item}
                  languages={languages}
                  imgWidth='260px'
                />
              </Box>
            ))}
          </Stack>
        </Box>
        {!isMore && (
          <Box mt='28px' width={'100%'}>
            <IconButton
              variant='contained'
              bgColor='#284C88'
              sx={{
                display: { xs: 'none', lg: 'flex' },
                width: '100%',
                height: '40px',
                fontSize: '12px',
                lineHeight: '15px',

                '&:hover': {
                  background: '#fff',
                  color: '#284C88'
                }
              }}
              iconRight={<FiArrowRightCircle size={24} />}
              value={languages[`See all ${title.toLowerCase()}`]}
              onClick={() => setIsMore(true)}
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}