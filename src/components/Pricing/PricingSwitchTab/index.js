import { Box, Typography } from "@mui/material";

import { PRICING_PLANS } from "../../../constants";

export default function PricingSwitchTab({ languages, pricePlan, onChange }) {
  return (
    <Box sx={{
      background: '#C7C7F2',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      height: { xs: '30px', sm: '50px' },
      width: '150px',
    }}>
      {PRICING_PLANS.map(plan => (
        <Box
          key={plan.title}
          sx={{
            width: pricePlan === plan.title ? '85px' : '65px',
            height: { xs: '28px', sm: '48px' },
            background: pricePlan === plan.title ? '#8254A9' : 'transparent',
            border: pricePlan === plan.title ? '1px solid #8254A9' : '1px solid transparent',
            borderRadius: '25px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            // padding: pricePlan === plan.title ? { xs: '2px 3px', md: '2px 3px' } : { xs: '3px 0px', md: '3px 0px' },
          }}
          onClick={() => onChange(plan.title)}
        >
          <Typography
            key={plan.title}
            color={pricePlan === plan.title ? 'white' : 'secondary'}
            sx={{
              fontSize: pricePlan === plan.title ? '14px' : '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            <strong>{languages[plan.title]}</strong>
          </Typography>
        </Box>
      ))}
    </Box>
  )
}