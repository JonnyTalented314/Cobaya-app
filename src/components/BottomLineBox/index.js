import { Box, Stack, styled, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ImageBox from "../Image";

import FooterLeftImage from '../../assets/images/landing/footer-left.svg';
import FooterRightImage from '../../assets/images/landing/footer-right.svg';
import { openModal } from "../../store";

export default function BottomLineBox({ languages, layout }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const locale = useSelector(state => state.locale)

  const handleClickMenu = () => {
    dispatch(
      openModal({
        currentModal: 'CONTACT_PEACEKEEPERS',
        modalProps: {}
    }))
  }

  return (
    <Box sx={{
      background: '#12274C',
      height: { xs: '180px', sm:'70px' },
      width: '100%',
      display: 'flex',
      alignItems: { xs: 'flex-end', sm: 'center' },
      justifyContent: { xs: 'fl', sm: 'space-between' },
      position:  { xs: 'relative', lg: location.path === '/' ? 'fixed' : 'relative' },
      bottom: 0,
      left: 0,
      zIndex: 100,
      paddingBottom: { xs: '12px', sm: '2px' }
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
      }}>
        <ImageBox src={FooterLeftImage} loading='lazy' alt='landing-footer-left' width={'25px'} />
        <Stack
          direction="row"
          spacing={0.5}
          alignItems={'flex-end'}
          color={'#FFFFFF'}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '17px',
              marginLeft: '10px'
            }}
            color={'#FFFFFF'}
          >
            © 2020-2023 Coyaba
            <SupText>TM</SupText>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '17px',
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            color={'#FFFFFF'}
            onClick={() => navigate(`${locale && `/${locale}`}/terms`)}
          >
            <span>/ </span>
            {languages['Terms']}
            <span> /</span>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '17px',
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            color={'#FFFFFF'}
            onClick={() => navigate(`${locale && `/${locale}`}/privacy`)}
          >
            {languages['Privacy Policy']}
            <span> /</span>
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '14px',
              fontWeight: '500',
              lineHeight: '17px',
              marginLeft: '10px',
              cursor: 'pointer'
            }}
            color={'#FFFFFF'}
            onClick={handleClickMenu}
          >
            {languages['Contact Peacekeepers']}
          </Typography>
        </Stack>
      </Box>
      <Box sx={{
        width: { xs: '100%', sm: 'auto' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: { xs: '0', sm: '20px' },
        position: { xs: 'absolute', sm: 'initial' },
        top: '55px',
      }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '17px',
            marginRight: '10px'
          }}
          color={'#FFFFFF'}
        >
          {languages['Coyaba is member of']}
        </Typography>
        <Link to={'https://onepercentfortheplanet.org/'} target='_blank'>
          <ImageBox height={{ xs: '50px', sm: '35px' }} src={FooterRightImage} loading='lazy' alt='landing-footer-left' />
        </Link>
      </Box>
    </Box>
  )
}

const SupText = styled('sup')(({ theme }) => ({
  fontSize: '10px'
}))