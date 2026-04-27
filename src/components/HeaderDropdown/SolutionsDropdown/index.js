import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Box, Grid, Typography } from "@mui/material";
import { FiArrowRightCircle } from "react-icons/fi";
import IconButton from "../../Button/IconButton";

import { HEADER_SOLUTIONS_DROPDOWN_LIST } from "../../../constants";

export default function SolutionsDropdown({ languages, open, onClose }) {
  const navigate = useNavigate()
  const locale = useSelector(state => state.locale)

  const navigateSolution = (id) => {
    navigate(`${locale && `/${locale}`}/solutions#${id}`)
    onClose()
  }

  return (
    <Container
      sx={{
        width: '100%',
        paddingTop: '30px',
        paddingBottom: '16px',
        display: open ? 'block' : 'none',
        minHeight: '476px'
        // opacity: open ? 1 : 0,
        // transition: 'opacity 0.5s 0.2s, display 0.5s 0.2s'
      }}
    >
      <Grid container spacing={2}>
        {HEADER_SOLUTIONS_DROPDOWN_LIST.map((item, index) => (
          <Grid item xs={4} key={item.title} display='flex' flexDirection='column' justifyContent='space-between' minHeight={'446px'}>
            <Box>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#12274C',
                  borderBottom: '4px solid #12274C',
                  paddingBottom: '6px',
                  lineHeight: '35px',
                  display: 'inline',
                  marginLeft: '34px'
                }}
              >
                <strong>{languages[item.title]}</strong>
              </Typography>
              <Box sx={{
                borderLeft: index !== 0 && '1px solid #DDEAFB',
                paddingLeft: '34px',
                marginTop: '20px'
              }}>
                {item.list.map((listItem, subIndex) => (
                  <Box
                    key={subIndex}
                    sx={{
                      'a': {
                        textDecoration: 'none'
                      }
                    }}
                  >
                    <Link 
                      to={`${locale && `/${locale}`}/solutions#${item.id}`}
                      onClick={() => navigateSolution(item.id)}
                    >
                      <Typography
                        variant="semibold"
                        sx={{
                          fontSize: '16px',
                          lineHeight: '35px',
                          color: '#12274C'
                        }}
                      >
                        {languages[listItem]}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
            {item.id === 'companyType' && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <IconButton
                  variant='contained'
                  bgColor='#284C88'
                  sx={{
                    width: 'calc(100% - 34px)',
                    height: '40px',
                    fontSize: '12px',
                    lineHeight: '15px',

                    '&:hover': {
                      border: '2px solid ##284C88',
                      bgColor: '#fff',
                      color: '#284C88'
                    }
                  }}
                  iconRight={<FiArrowRightCircle size={24} />}
                  value={languages['See All']}
                  onClick={() => navigateSolution(item.id)}
                />
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}