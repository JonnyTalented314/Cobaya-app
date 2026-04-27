import { Box, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import ImageBox from "../Image";

import IconConfetti from '../../assets/images/header/icon-confetti.svg'

export default function DiscoverLinkButton({ languages }) {
  return (
    <Box sx={{
      background: '#23365F',
      borderRadius: '10px',
      color: '#fff',
      padding: '11px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <ImageBox src={IconConfetti} width={'28px'} alt='icon-confetti' />
        <Typography
          sx={{
            marginX: '10px',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: '700',
          }}
        >
          <strong>{languages['Discover our roadmap and the new features on the way']}</strong>
        </Typography>
      </Box>
      <FiArrowRight size={20} />
    </Box>
  )
}