import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi";
import { Container, Typography, Box, Grid, AccordionDetails, AccordionSummary } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import CustomButton from "../../Button";
import ImageBox from "../../Image";

import { HOME_INTERACTION_MENU } from '../../../constants'
import BackgroundImage from '../../../assets/images/home/image-team-discussion-2.png'
import BackgroundImageMobile from '../../../assets/images/home/image-team-discussion-2-mobile.png'

const MobileAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  
  '&:not(:last-child)': {
    borderBottom: 0,
    // marginBottom: '14px',
  },
  '&:before': {
    display: 'none',
  },
}));

export default function HomeInteractionSection() {
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
    <Box
      sx={{
        width: { xs: '100%', xxl: '1920px' },
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <ImageBox
        sx={{
          maxWidth: '640px',
          width: '34%',
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          bottom: '30px',
          right: { xs: '20px', md: '50px', xl: '219px' },
          zIndex: 0
        }}
        src={BackgroundImage}
        alt='interaction-img'
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 10,
          padding: { xs: '20px 0px 34px', sm: '30px 0px' },
        }}
      >
        <Box
          sx={{
            paddingX: { xs: '20px', sm: '30px' },
          }}
        >
          <Typography
            variant="semibold"
            sx={{
              fontSize: '12px',
              lineHeight: '36px',
              textTransform: 'uppercase',
              color: '#162e58',
              marginBottom: '20px'
            }}
          >
            {languages['Interactions']}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: { sm: '634px' },
              color: '#162e58',
              marginBottom: { sm: '30px' },
            }}
          >
            <strong>
              {`${languages['Additional tools to']} `}
              <GreenText>{`${languages['cooperate']} `}</GreenText>
              {`${languages['more and have it all in one place.']}`}
            </strong>
          </Typography>
          <Box>
            <Box
              sx={{
                color: '#162e58',
                display: { xs: 'none', sm: 'grid' }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {HOME_INTERACTION_MENU.map(menu => (
                  <Box
                    key={menu.title}
                    sx={{
                      marginRight: { xs: '30px', md: '102px' },
                    }}
                  >
                    <Typography
                      key={menu.title}
                      variant={selectedMenu.title === menu.title ? 'bold' : ''}
                      sx={{
                        fontSize: { xs: '16px', sm: '20px' },
                        display: 'inline-block',
                        py: { sm: '15px' },
                        cursor: 'pointer',
                      }}
                      onClick={() => setSelectedMenu(menu)}
                    >
                      {languages[menu.title]}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: '7px',
                        borderRadius: '10px',
                        background: selectedMenu.title === menu.title ? '#162e58' : '#fff'
                      }}
                    >
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box sx={{
                marginTop: { xs: '30px', sm: '40px' },
              }}>
                <Grid container spacing={2} flexDirection={{ xs: 'column-reverse', sm: 'row' }} position='relative'>
                  <Grid item xs={12} sm={12}>
                    <ImageBox
                      sx={{
                        maxWidth: '550px',
                        margin: '0 auto',
                        filter: selectedMenu.smallImg && 'blur(3px)',

                        'img': {
                          borderRadius: '10px'
                        }
                      }}
                      src={selectedMenu.image}
                    />
                    {selectedMenu.smallImg && (
                      <ImageBox
                        sx={{
                          position: 'absolute',
                          top: '110px',
                          right: '212px',
                          zIndex: 1,
                          width: selectedMenu.smallImg.width,
                          height: selectedMenu.smallImg.height
                        }}
                        src={selectedMenu.smallImg.src}
                        alt='interaction-img' 
                      />
                    )}
                    <Box
                      sx={{
                        position: 'relative',
                        maxWidth: { sm: '500px' },
                        margin: { sm: '20px auto 0', md: '100px 0 0' },
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          display: { sm: 'none' },
                          fontSize: { xs: '16px', sm: '19px' },
                          fontWeight: '700',
                          color: '#162e58',
                          marginBottom: { xs: '20px', sm: '30px' }
                        }}
                      >
                        <strong>{languages[selectedMenu.subject]}</strong>
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '14px', sm: '16px' },
                          color: '#162e58',
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
                            variant='contained'
                            bgColor='#23365F'
                            color='#fff'
                            sx={{
                              width: { xs: '150px', sm: '200px' },
                              border: '1px solid #23365F',

                              '&:hover': {
                                background: '#4285F4',
                                border: '1px solid #4285F4',
                              }
                            }}
                          >
                            {languages['Get Started']}
                          </CustomButton>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '10px',
            display: { xs: 'block', sm: 'none' }
          }}
        >
          {expandedStates.map((item, index) => (
            <Box key={'accordion-' + index}>
              <MobileAccordion
                onChange={() => handleChangeAccordion(item)}
                expanded={item.expanded}
                sx={{
                  // borderRadius: '14px',
                  // background: item.expanded ? '#284C88' : '#23365F',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <FiChevronDown color='#12274C' size={18} />
                  }
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                  sx={{
                    // background: item.expanded ? '#284C88' : '#23365F',
                    height: '89px',
                    paddingX: '40px',
                    // borderRadius: item.expanded ? '10px 10px 0 0' : '10px'
                  }}
                >
                  <Typography
                    variant={item.expanded ? 'bold' : 'semibold'}
                    sx={{
                      fontSize: item.expanded ? '18px' : '16px',
                      lineHeight: '20px',
                      color: '#12274C',
                    }}
                  >
                    {languages[item.title]}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  boxShadow: 'none',
                  padding: '8px 0px 36px',
                  // borderRadius: '0 0 10px 10px',
                }}>
                  <Box
                    sx={{
                      position: 'relative',
                      display: { xs: 'block', sm: 'none' }
                    }}
                  >
                    <ImageBox
                      sx={{
                        maxWidth: '360px',
                        objectFit: 'contain',
                        position: 'absolute',
                        right: 0,
                        top: 20,
                        zIndex: 0
                      }}
                      src={BackgroundImageMobile}
                      alt='img-interaction-mobile'
                    />
                    <ImageBox
                      sx={{
                        position: 'absolute',
                        zIndex: 0,
                        left: 0,
                        top: 0,
                        maxWidth: { xs: '500px', sm: '100%' },
                        filter: selectedMenu.smallImg && 'blur(3px)',

                        'img': {
                          borderRadius: '10px'
                        }
                      }}
                      src={item.mobileImage}
                      alt={'img-interaction-' + item.title}
                    />
                  </Box>
                  <Grid container spacing={2} flexDirection={{ xs: 'column' }}>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          minHeight: '300px',
                          position: 'relative',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {item.smallImg && (
                          <ImageBox
                            sx={{
                              zIndex: 1,
                              width: item.smallImg.width,
                              height: item.smallImg.height
                            }}
                            src={item.smallImg.src}
                            alt='interaction-img' 
                          />
                        )}
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          position: 'relative',
                          zIndex: 1,
                          paddingX: '38px',
                        }}
                      >
                        {/* <Typography
                          sx={{
                            fontSize: { xs: '16px', sm: '19px' },
                            fontWeight: '700',
                            color: '#12274C',
                          }}
                        >
                          <strong>{languages[item.subject]}</strong>
                        </Typography> */}
                        <Typography
                          sx={{
                            fontSize: { xs: '14px', sm: '16px' },
                            color: '#12274C',
                            marginTop: { xs: '20px', sm: '30px' }
                          }}
                        >
                          {languages[item.description]}
                        </Typography>
                        <Box sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mt: { xs: '20px', sm: '50px' },
                        }}>
                          <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                            <CustomButton
                              variant='contained'
                              bgColor='#23365F'
                              color='#fff'
                              sx={{
                                width: { xs: '150px', sm: '200px' },
                                border: '1px solid #23365F'
                              }}
                            >
                              {languages['Get Started']}
                            </CustomButton>
                          </Link>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </MobileAccordion>
              <Box
                sx={{
                  paddingX: '38px'
                }}
              >
                <Box
                  sx={{
                    background: '#284C88',
                    height: '1px',
                    paddingX: '38px'
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

const GreenText = styled('span')(({ theme, color }) => ({
  color: '#34A853'
}))