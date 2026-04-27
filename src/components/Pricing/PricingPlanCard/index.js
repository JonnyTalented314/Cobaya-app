import { Box, List, ListItem, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { openModal } from "../../../store";
import CustomButton from "../../Button";
import IconChat from "../../IconChat";

export default function PricingPlanCard({ languages, item, itemIndex, width = 'auto' }) {
  const dispatch = useDispatch()

  const handleClickButton = (title) => {
    if (title === 'Contact Sales') {
      dispatch(
        openModal({
          currentModal: 'CONTACT_SALES',
          modalProps: {}
      }))
    } else {
      window.open('https://coyaba.app/getstarted')
    }
  }

  return (
    <Box sx={{
      width: width,
      minHeight: '650px',
      background: '#fff',
      borderRadius: '30px 30px 0px 0px',
      padding: { xs: '20px 20px 40px', sm: '20px 8px' },
      borderBottom: `12px solid ${item.isBorderBottom ? item.color: '#fff'}`,
      textAlign: 'center',
    }}>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: { xs: '16px', sm: '18px' },
          lineHeight: '22px',
          color: item.color,
        }}
      >
        <strong>{languages[item.title]}</strong>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '14px', sm: '16px' },
          lineHeight: { xs: '17px', sm: '22px' },
          color: item.color,
        }}
      >
        {languages[item.description] || item.description}
      </Typography>
      {item.title === 'FOREST' ? (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '12px'
        }}>
          <IconChat width={40} padding={'9px'} bgColor='#284C88' />
          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 700,
              lineHeight: '25px',
              color: item.color,
              textTransform: 'uppercase',
              marginTop: '4px'
            }}
          >
             <strong>{languages['on request']}</strong>
          </Typography>
        </Box>
      ) : (
        <>
        <Typography
          sx={{
            fontSize: { xs: '52px', sm: '60px' },
            color: item.color,
            lineHeight: '74px',
            fontWeight: 700
          }}
        >
          <strong>
            {item.price}
            <span style={{ fontSize: 20 }}>€</span>
          </strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            marginTop: '-20px',
            color: 'primary.dark',
          }}
        >
          {languages['per user and per month']}
        </Typography>
        </>
      )}
      <Box sx={{
        marginTop: item.title === 'FOREST' ? '10px' : '20px'
      }}>
        <CustomButton
          variant={item.buttonVariant}
          bgColor={item.color}
          onClick={() => handleClickButton(item.buttonText)}
        >
          {languages[item.buttonText]}
        </CustomButton>
      </Box>
      <Box sx={{
        marginTop: '20px'
      }}>
        <Typography
          sx={{
            fontSize: { xs: item.workspaces === 'Unlimited' ? '20px' : '32px', sm: item.workspaces === 'Unlimited' ? '29px' : '40px' },
            color: item.color,
            fontWeight: '700',
            marginBottom: '15px',
          }}
        >
          <strong>{item.workspaces}</strong>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', sm: '18px' },
            color:'#12274C',
            fontWeight: '700',
            marginBottom: '20px'
          }}
        >
          <strong>{languages['Workspaces']}</strong>
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {item.favor.map((list, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: 0
              }}
            >
              <Typography
                sx={{
                  paddingY: { xs: 0, sm: '1px' },
                  fontSize: { xs: '13px', sm: '15px' },
                  lineHeight: { xs: '22px', sm: '26px' },
                  color: '#12274C',
                  textAlign: 'center',
                  fontWeight: index === 0 && itemIndex !== 0 && '700'
                }}
              >
              {index === 0 && itemIndex !== 0 ?
                <strong>{languages[list]}</strong> :
                <>{languages[list]}</>
              }
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}