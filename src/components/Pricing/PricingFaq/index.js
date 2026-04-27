import { AccordionDetails, AccordionSummary, Typography, Box, useMediaQuery } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from "react-icons/io";

import CustomButton from "../../Button";

import { PRICING_FAQ_LIST } from "../../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
    marginBottom: '6px',
  },
  '&:before': {
    display: 'none',
  },
}));

export default function PricingFAQSection({ languages, openDetails }) {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const locale = useSelector(state => state.locale)

  const expandedColor = openDetails ? '#12274cfa' : '#fff'
  const unExpandedColor = openDetails ? '#fff' : '#fff'
  const expandedTextColor = openDetails ? '#fff' : '#12274C'
  const unExpandedTextColor = openDetails ? '#12274C' : '#12274C'
  const ExpandIcon = openDetails ? IoIosArrowDropdown : IoIosArrowDropdownCircle

  const [expandedStates, setExpandedStates] = useState(PRICING_FAQ_LIST)

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
    <Box sx={{
      paddingTop: { xs: '20px', md: '30px' },
      paddingBottom: { xs: '30px', md: '156px' }
    }}>
      <Typography
        variant="semibold"
        sx={{
          fontSize: '12px',
          lineHeight: '36px',
          textAlign: 'left',
          color: openDetails ? '#fff' : '#12274C'
        }}
      >
        {languages['FAQ']}
      </Typography>
      <Typography
        sx={{
          marginTop: { xs: '0', md: '16px' },
          fontWeight: '700',
          fontSize: { xs: '25px', md: '40px' },
          textAlign: 'left',
          lineHeight: { xs: '31px', md: '52px' },
          color: openDetails ? '#fff' : '#12274C'
        }}
      >
        <strong>{languages['Questions? We’ve got answers.']}</strong>
      </Typography>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: { xs: '16px', md: '18px' },
          textAlign: 'left',
          lineHeight: '22px',
          marginTop: '20px',
          color: openDetails ? '#fff' : '#12274C'
        }}
      >
        <strong>{languages['If you don’t find what you are looking for, our Peacekeepers  are pleased to help you.']}</strong>
      </Typography>
      <Box mt='16px'>
        {expandedStates.map((item, index) => (
          <Accordion 
            onChange={() => handleChangeAccordion(item)}
            expanded={item.expanded}
            key={index}
          >
            <AccordionSummary
              expandIcon={
                <ExpandIcon color={item.expanded ? unExpandedTextColor : expandedTextColor} size={sm ? 24 : 40} />
              }
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
              sx={{
                background: item.expanded ? unExpandedColor : expandedColor,
                height: { xs: 'auto', md: '94px' },
                color: item.expanded ? unExpandedTextColor : expandedTextColor,
                paddingX: { xs: '16px', sm: '28px' }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '20px' },
                  lineHeight: { xs: '25px', md: '40px' }
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
              boxShadow: 'none'
            }}>
              <Typography
                variant="semibold"
                sx={{
                  fontSize: { xs: '16px', md: '20px' },
                  lineHeight: { xs: '25px', md: '40px' },
                  color: '#12274C',
                  paddingX: '12px'
                }}
              >
                {item.description}
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '28px'
              }}>
                <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
                  <CustomButton
                    variant='outlined'
                    bgColor={'#12274C'}
                    color={'#fff'}
                    sx={{
                      border: '1px solid #12274C',
                    }}
                  >
                    {languages['Get Started']}
                  </CustomButton>
              </Link>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}