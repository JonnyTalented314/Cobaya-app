import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import CustomButton from "../Button";
import IconCheckbox from "../Checkbox";
import CustomInput from "../Input";

import PhoneInput from "../PhoneInput";
import CustomSelect from "../Select";

import { EXPLORING_USERS_OPTIONS } from "../../constants/selectOptions";

export default function ContactSalesForm({ languages, color }) {
  const locale = useSelector(state => state.locale)

  const [formStates, setFormStates] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    exploringCount: '',
    isReceiveEmail: true,
    isPrivacyPolicy: false
  })

  const handleChangeInput = (e) => {
    setFormStates({ ...formStates, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formStates)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container columnSpacing={2} rowSpacing={1} alignItems='center'>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: color,
            }}
          >
            <strong>{languages['First Name']}</strong>
            <OrangeText>  *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <CustomInput
            height={50}
            inputStyles={{
              color: '#284C88',
              fontSize: '14px',
              borderRadius: '20px',
            }}
            sx={{
              borderRadius: '20px',
              background: '#fff'
            }}
            fullWidth
            name='firstName'
            value={formStates.firstName}
            onChange={handleChangeInput}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: color,
            }}
          >
            <strong>{languages['Last Name']}</strong>
            <OrangeText> *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
          <CustomInput
            height={50} 
            inputStyles={{
              color: '#284C88',
              fontSize: '14px',
              borderRadius: '20px',
            }}
            sx={{
              borderRadius: '20px',
              background: '#fff'
            }}
            fullWidth
            name='lastName'
            value={formStates.lastName}
            onChange={handleChangeInput}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: color,
            }}
          >
            <strong>{languages['Work Email']}</strong>
            <OrangeText> *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
          <CustomInput
            type="email"
            placeholder='thomas@mycompany.com'
            height={50}
            inputStyles={{
              color: '#284C88',
              fontSize: '14px',
              borderRadius: '20px',
            }}
            sx={{
              borderRadius: '20px',
              background: '#fff'
            }}
            fullWidth
            name='email'
            value={formStates.email}
            onChange={handleChangeInput}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: color,
            }}
          >
            <strong>{languages['Phone']}</strong>
            <OrangeText> *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
          <PhoneInput
            name='phone'
            value={formStates.phone}
            onChange={(phone) => setFormStates({
              ...formStates,
              phone
            })}
            style={{
              color: '#284C88',
              fontSize: '14px'
            }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: color,
            }}
          >
            <strong>{languages['Company']}</strong>
            <OrangeText> *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
          <CustomInput
            height={50}
            inputStyles={{
              color: '#284C88',
              fontSize: '14px',
              borderRadius: '20px',
            }}
            sx={{
              borderRadius: '20px',
              background: '#fff'
            }}
            fullWidth
            name='company'
            value={formStates.company}
            onChange={handleChangeInput}
            required
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography
            sx={{
              minWidth: '140px',
              fontSize: '14px',
              fontWeight: '700',
              color: color,
              lineHeight: '17px'
            }}
          >
            <strong>{languages['How many users are you exploring for?']}</strong>
            <OrangeText> *</OrangeText>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} >
          <Box
            sx={{
              position: 'relative'
            }}
          >
            <CustomSelect
              name='exploringCount'
              placeholder={languages['Select a range of users']}
              height={50}
              sx={{
                color: '#284C88',
                fontSize: '14px',
                borderRadius: '20px',
                background: '#fff',
                height: '50px'
              }}
              value={formStates.exploringCount}
              onChange={handleChangeInput}
              options={EXPLORING_USERS_OPTIONS}
              required
            />
            {/* <Box sx={{
              position: 'absolute',
              right: 20,
              top: 18
            }}>
              <FiChevronDown size={16} />
            </Box> */}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '20px',
        marginLeft: '20px'
      }}>
        <IconCheckbox 
          label={languages['Yes, I would like to receive marketing communications from Coyaba']}
          sx={{
            color: color,
            lineHeight: '17px',
          }}
          size={'14px'}
          checked={formStates.isReceiveEmail}
          onChange={(e) => setFormStates({
            ...formStates,
            isReceiveEmail: e.target.checked
          })}
          required
        />
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '20px',
        mt: { xs: '12px', sm: 0 }
      }}>
        <IconCheckbox
          label={
            <Box sx={{
              'a': {
                textDecoration: 'none'
              }
            }}>
              {languages['I confirm that I have read and understood the Coyaba ']}
              <Link to={`${locale && `/${locale}`}/privacy`} target='_blank'>
                <BlueLink>
                  {languages['Privacy Policy.']}
                </BlueLink>
              </Link>
            </Box>
          }
          sx={{
            color: color,
            lineHeight: '17px'
          }}
          size={'14px'}
          checked={formStates.isPrivacyPolicy}
          onChange={(e) => setFormStates({
            ...formStates,
            isPrivacyPolicy: e.target.checked
          })}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '16px'
      }}>
        <CustomButton
          type='submit'
          variant="contained"
          bgColor='#4285F4'
          sx={{
            width: { xs: '150px', sm: '335px' } ,
            '&:disabled': {
              color: '#445881',
              border: '1px solid #23365F',
              background: '#23365F'
            },
          }}
          disabled={
            formStates.isPrivacyPolicy === false || 
            formStates.firstName === '' ||
            formStates.lastName === '' ||
            formStates.email === '' ||
            formStates.company === '' ||
            formStates.phone === '' ||
            formStates.exploringCount === ''
          }
        >
          {languages['Submit']}
        </CustomButton>
      </Box>
    </form>
  )
}

const OrangeText = styled.span`
  color: #D65140;
`

const BlueLink = styled.span`
  color: #4285F4;
`