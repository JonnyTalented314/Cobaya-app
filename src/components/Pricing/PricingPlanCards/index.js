import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import PublicTopSection from "../../Layouts/Public/PublicTopSection";
import PricingSwitchTab from "../PricingSwitchTab";
import PricingPlanCard from "../PricingPlanCard";

import { 
  PRICING_PLANS,
  PRICING_MONTHLY,
  PRICING_YEARLY
} from "../../../constants";

export default function PricingPlanCardsSection({ languages, openDetails, onClickOpenDetails }) {
  const [selectedPricingPlan, setSelectedPricingPlan] = useState(PRICING_PLANS[0].title)
  const [selectedPricingList, setSelectedPricingList] = useState(PRICING_YEARLY)

  const handleClickPricingTab = (pricing) => {
    setSelectedPricingPlan(pricing)
    setSelectedPricingList(pricing === 'Yearly' ? PRICING_YEARLY : PRICING_MONTHLY)
  }

  return (
    <PublicTopSection>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: '20px', sm: '27px 0 57px' }
        }}>
        <Box>
          <Typography
            color='white'
            variant="h5"
            sx={{
              textAlign: 'center',
              maxWidth: '982px',
              fontSize: { xs: '25px',  md: '40px' },
              lineHeight: { xs: '31px', md: '49px' },
            }}
          >
            {`${languages['Your']} `}
            <Typography
              color='secondary'
              variant="title"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '25px',  md: '40px' },
                lineHeight: { xs: '31px', md: '49px' },
              }}
            >
              {languages['Efficiency OS']}
              <BluePurpleTextSup>TM</BluePurpleTextSup>
            </Typography>
            {` ${languages['built to meet your expectations at most competitive price']}`}
          </Typography> 
        </Box>
        <Box sx={{
          maxWidth: '1030px',
          padding: '16px 0 28px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center'
        }}>
          <Box sx={{
            marginBottom: { xs: '16px', md: 0 }
          }}>
            <Typography
              color='white'
              sx={{
                textAlign: 'center',
                fontSize: '14px',
                lineHeight: '24px',
                marginRight: '10px'
              }}
            >
              {languages['Save']}
              <BluePurpleText>{` ${languages['Time']} `}</BluePurpleText>
              {`${languages['and']} `}
              <BluePurpleText>{`${languages['Money']}`}</BluePurpleText>
            </Typography>
          </Box>
          <PricingSwitchTab languages={languages} pricePlan={selectedPricingPlan} onChange={handleClickPricingTab} />
        </Box>
        <Box sx={{
          width: { xs: '95%', xl: 'auto' },
          paddingX: { xs: '24px', xl: '100px' },
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid container columnSpacing='10px' display={{ xs: 'none', xl: 'flex' }}>
            {selectedPricingList.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <PricingPlanCard
                  item={item}
                  languages={languages}
                  itemIndex={index}
                />
              </Grid>
            ))}
          </Grid>
          <Stack
            spacing={2.5}
            direction='row'
            sx={{
              display: { xs: 'flex', xl: 'none' },
              overflowX: 'auto',
            }}
          >
            {selectedPricingList.map((item, index) => (
              <Box key={index}>
                <PricingPlanCard
                  item={item}
                  languages={languages}
                  itemIndex={index}
                  width='215px'
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </PublicTopSection>
  );
}

const BluePurpleTextSup = styled('sup')(({ theme }) => ({
  color: '#8254A9',
  fontWeight: 600,
  fontSize: '20px',
  fontFamily: 'Gilroy Semibold',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {

  }
}))

const BluePurpleText = styled('span')`
  color: #8254A9;
`
