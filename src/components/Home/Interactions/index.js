import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { Container, Typography, Box, Grid, useMediaQuery, AccordionDetails, AccordionSummary } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import CustomButton from "../../Button";

import { HOME_INTERACTION_MENU } from '../../../constants'
import ImageBox from "../../Image";

// const DesktopAccordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: 'none',
//   '&:not(:last-child)': {
//     borderBottom: 0,
//     marginBottom: '14px',
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));

const MobileAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
    marginBottom: '14px',
  },
  '&:before': {
    display: 'none',
  },
}));

export default function HomeInteractionSection() {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const languages = useSelector(state => state.languages)
  const locale = useSelector(state => state.locale)

  const [selectedMenu, setSelectedMenu] = useState(HOME_INTERACTION_MENU[0])
  const [expandedStates, setExpandedStates] = useState(HOME_INTERACTION_MENU)

  const handleChangeAccordion = (item) => {
    const temp = [...expandedStates];
    temp.forEach(expandedItem => {
      if (expandedItem.title === item.title) {
        expandedItem.expanded = !expandedItem.expanded
      }
    })
    setExpandedStates(temp)
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
          marginBottom: '20px'
        }}
      >
        {languages['Interactions']}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#fff',
          marginBottom: '30px',
        }}
      >
        <strong>{`${languages['interaction_title']} `}</strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: '700',
          lineHeight: { xs: '25px', sm: '36px' },
          color: '#fff',
          marginBottom: '30px'
        }}
      >
        <strong>{languages['interaction_text_1']}</strong>
      </Typography>
      <Box
        sx={{
          paddingX: { md: '20px' }
        }}
      >
        <Box
          sx={{
            background: { sm: '#162e58' },
            borderRadius: '30px',
            padding: { sm: '0 50px 50px 30px' },
            color: '#fff',
            display: { xs: 'none', sm: 'grid' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', sm: '600px' },
              margin: '0 auto',
              justifyContent: 'space-between'
            }}
          >
            {HOME_INTERACTION_MENU.map(menu => (
              <Typography
                key={menu.title}
                variant="semibold"
                sx={{
                  fontSize: { xs: '12px', sm: '16px' },
                  // borderBottom: selectedMenu.title === menu.title ? '3px dashed #fff' : 'none',
                  display: 'inline-block',
                  paddingTop: '20px',
                  paddingBottom: { sm: '10px' },
                  cursor: 'pointer',
                  backgroundImage: selectedMenu.title === menu.title && 'linear-gradient(to right, black 0 0%, transparent 0% 0%), linear-gradient(to right, white 0 50%, transparent 50% 100%)',
                  backgroundRepeat: 'repeat no-repeat',
                  backgroundSize: '20px 3px',
                  backgroundPosition: '0 0, 0 calc(100% - 1px)',
                  px: '2px'
                }}
                onClick={() => setSelectedMenu(menu)}
              >
                {languages[menu.title]}
              </Typography>
            ))}
          </Box>
          <Box sx={{
            marginTop: { xs: '30px', sm: '50px' },
          }}>
            <Grid container spacing={2} flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
              <Grid item xs={12} sm={6}>
                <Typography
                  sx={{
                    fontSize: { xs: '16px', sm: '19px' },
                    fontWeight: '700',
                    color: '#fff',
                    marginBottom: { xs: '20px', sm: '30px' }
                  }}
                >
                  <strong>{languages[selectedMenu.subject]}</strong>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '14px', sm: '16px' },
                    color: '#fff',
                  }}
                >
                  {languages[selectedMenu.description]}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: { xs: '20px', sm: '50px' },
                }}>
                  <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                    <CustomButton
                      variant={ xs ? 'contained' : 'outlined' }
                      bgColor='#fff'
                      color='#12274C'
                      sx={{
                        width: { xs: '150px', sm: '200px' },
                        border: '1px solid #fff'
                      }}
                    >
                      {languages['Get Started']}
                    </CustomButton>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ImageBox
                  maxWidth={{ xs: '600px', sm: '100%' }}
                  src={selectedMenu.image}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' }
          }}
        >
          {expandedStates.map((item, index) => (
            <MobileAccordion 
              onChange={() => handleChangeAccordion(item)}
              expanded={item.expanded}
              key={index}
              sx={{
                borderRadius: '14px',
                background: item.expanded ? '#284C88' : '#23365F',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <FiChevronDown color='#fff' size={14} />
                }
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                sx={{
                  background: item.expanded ? '#284C88' : '#23365F',
                  height: '60px',
                  color: '#fff',
                  paddingX: '28px',
                  borderRadius: item.expanded ? '10px 10px 0 0' : '10px'
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '12px', md: '14px' },
                    lineHeight: '20px',
                    fontWeight: '600'
                  }}
                >
                  <strong>{item.title}</strong>
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{
                boxShadow: 'none',
                background: '#284C88',
                borderRadius: '0 0 10px 10px'
              }}>
                <Grid container spacing={2} flexDirection={{ xs: 'column' }}>
                  <Grid item xs={12} sm={6} display='flex' justifyContent='center'>
                    <ImageBox
                      maxWidth={{ xs: '500px', sm: '100%' }}
                      src={selectedMenu.image}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', sm: '19px' },
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: { xs: '20px', sm: '30px' }
                      }}
                    >
                      <strong>{languages[selectedMenu.subject]}</strong>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '14px', sm: '16px' },
                        color: '#fff',
                      }}
                    >
                      {languages[selectedMenu.description]}
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: { xs: '20px', sm: '50px' },
                    }}>
                      <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                        <CustomButton
                          variant={ xs ? 'contained' : 'outlined' }
                          bgColor='#fff'
                          color='#12274C'
                          sx={{
                            width: { xs: '150px', sm: '200px' },
                            border: '1px solid #fff'
                          }}
                        >
                          {languages['Get Started']}
                        </CustomButton>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </MobileAccordion>
          ))}
        </Box>
      </Box>
    </Container>
  )
}