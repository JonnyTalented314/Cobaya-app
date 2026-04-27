import { Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContactSalesForm from "../../ContactSalesForm";

export default function ContactSalesModal({ languages, closeModal }) {
  return (
    <Box sx={{
      width: { sm: '610px' },
      borderRadius: { xs: '20px', sm: '50px 50px 20px 20px' },
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
    }}>
      <Box sx={{
        background: '#12274C',
        borderRadius: { xs: '20px 20px 0 0', sm: '50px 50px 0px 0px' },
        textAlign: 'center',
        position: 'relative'
      }}>
        <Typography
          variant="semibold"
          sx={{
            fontSize: { xs: '24px', sm: '30px' },
            paddingY: '24px',
            color: '#fff'
          }}
        >
          {languages['Contact Sales']}
        </Typography>
        <CloseIcon
          onClick={closeModal}
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: 'absolute',
            right: '8px',
            top: '25px',
            width: '25px',
            height: '25px',
            color: 'white'
          }}
        />
      </Box>
      <Box
        sx={{
          background: '#F3F7FC',
          borderRadius: '0px 0px 20px 20px',
          padding: { xs: '0 10px 20px' , sm: '0 40px 15px 20px' },
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: { md: '20px' }
        }}>
          <Typography sx={{
            fontSize: '16px',
            color: '#284C88',
            py: '20px'
          }}>
            {languages['We will get back to you quickly.']}
          </Typography>
          <ContactSalesForm languages={languages} color='#12274C' />
        </Box>
        <Box
          sx={{
            marginTop: '37px',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '17px',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            {languages['Form powered by Coyaba Features']}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

// const Select = styled.select`
//   position: relative;
//   padding-left: 14px;
//   padding-right: 20px;
//   background: #FFFFFF;
//   border-radius: 20px;
//   height: 50px;
//   width: 100%;
//   color: #284C88;
//   font-size: 14px;
//   border:  ${({ status }) => status ? '1px solid #C63535;' : 'none' };
//   appearance: none;
//   -webkit-appearance: none;
  
//   &:focus {
//     outline: none;
//     border: 'none';
//   }

//   &:active {
//     outline: none;
//     border: 'none';
//   }

//   &::after {
//     content: '';
//     position: absolute;
//   }
// `