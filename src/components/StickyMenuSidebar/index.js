import React from 'react'
import { useSelector } from "react-redux";
import { Box, Stack, Typography } from '@mui/material'
import { FiArrowDown } from "react-icons/fi";

const StickyMenuSidebar = ({ current, setCurrent, items = [], activeColor = '#12274C', page }) => {
  const languages = useSelector(state => state.languages)

  const onClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Box
      sx={{
        background: 'transparent',
        maxWidth: '220px',
      }}
    >
      {items.map((menu, index) => {
        return (
          <Stack
            key={index}
            direction="row"
            // onClick={() => menu.title !== 'Support' && setCurrent(menu)}
            sx={{
              marginBottom: '16px',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <Typography
                sx={{
                  width: '15px',
                  mr: '22px',
                  color: current.bgColor !== '#fff' && !(page === 'teams' && current.id === 'request-demo') ? '#fff' : activeColor
                }}
              >
                {current.title === menu.title && <FiArrowDown size={15} />}
              </Typography>
              {/* <Link href={`#${menu.id}`} underline="none"> */}
                <Typography
                  variant='semibold'
                  onClick={() => onClickScroll(menu.id)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: current.title === menu.title ? 
                      current.bgColor !== '#fff' ? 
                      page === 'teams' && current.id === 'request-demo' ? activeColor : "#fff" : activeColor : '#97A5C1',
                    width: 'max-content',
                    textTransform: 'uppercase'
                  }}
                >
                  {languages[menu.title]}
                </Typography>
              {/* </Link> */}
            </Box>
          </Stack>
        )
      })}
    </Box>
  )
}

export default StickyMenuSidebar
