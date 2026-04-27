import { Box, Container, Grid, Typography } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";

import IconButton from "../../Button/IconButton";

import { HEADER_FUNCTIONS_DROPDOWN_DISCOVER_LIST, HEADER_FUNCTIONS_DROPDOWN_INTERACTIONS_LIST } from "../../../constants";
import GlassesAvatar from '../../../assets/images/header/glasses-avatar.svg'
import ImageBox from "../../Image";

export default function FunctionsDropdown({ languages, open }) {
  return (
    <Container
      sx={{
        width: '100%',
        paddingTop: '30px',
        display: open ? 'block' : 'none',
        minHeight: '476px'
        // opacity: open ? 1 : 0,
        // transition: 'opacity 0.5s 0.4s, display 0.5s 0.2s'
      }}
    >
      <Grid container spacing={4} sx={{
        paddingBottom: '14px'
      }}>
        <Grid item xs={8} display='flex' flexDirection={'column'} justifyContent='space-between'>
          <Box>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '52px',
                color: '#303646',
                pb: '8px',
                borderBottom: '4px solid #12274C',
                display: 'inline',
              }}
            >
              <strong>
                {languages['Discover your Efficiency OS']}
                <sup style={{ fontSize: '9px' }}>TM</sup>
              </strong>
            </Typography>
            <Box sx={{
              marginTop: '20px'
            }}>
              <Grid container spacing={2}>
                {HEADER_FUNCTIONS_DROPDOWN_DISCOVER_LIST.map(item => (
                  <Grid item xs={6} key={item.title}>
                    <Typography
                      variant="semibold"
                      sx={{
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: '#12274C'
                      }}
                    >
                      {languages[item.title]}
                    </Typography>
                    <Typography 
                      sx={{
                        fontSize: '13px',
                        lineHeight: '20px',
                        color: '#12274C'
                      }}
                    >
                      {languages[item.description]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              mt: '54px'
            }}
          >
            <IconButton
              variant='contained'
              bgColor='#284C88'
              sx={{
                width: '100%',
                height: '40px',
                fontSize: '12px',
                lineHeight: '15px',

                '&:hover': {
                  background: '#fff',
                  color: '#284C88'
                }
              }}
              iconRight={<FiArrowRightCircle size={25} />}
              value={languages['All Functions']}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '52px',
              marginLeft: '26px',
              color: '#303646',
              borderBottom: '4px solid #12274C',
              display: 'inline',
              pb: '8px',
            }}
          >
            <strong>{languages['More interactions']}</strong>
          </Typography>
          <Box
            sx={{
              marginTop: '10px',
              borderLeft: '1px solid #DDEAFB',
              paddingLeft: '26px',
            }}
          >
            {HEADER_FUNCTIONS_DROPDOWN_INTERACTIONS_LIST.map((item, index) => (
              <Box 
                key={item.title}
                sx={{
                  paddingY: '5px'
                }}
              >
                <Typography
                  variant="semibold"
                  sx={{
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#12274C'
                  }}
                >
                  {languages[item.title]}
                </Typography>
                <Typography 
                  sx={{
                    fontSize: '13px',
                    lineHeight: '20px',
                    color: '#12274C'
                  }}
                >
                  {languages[item.description]}
                </Typography>
                {index === 2 && (
                  <Box
                    sx={{
                      paddingTop: '15px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <ImageBox src={GlassesAvatar} width={60} alt='glasses-avatar' />
                    <Typography
                      variant="semibold"
                      sx={{
                        fontSize: '16px',
                        lineHeight: '20px',
                        color: '#12274C',
                        marginLeft: '12px'
                      }}
                    >
                      {languages['Imagine all systems speaking the same language (homemade or well-known)']}
                    </Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}