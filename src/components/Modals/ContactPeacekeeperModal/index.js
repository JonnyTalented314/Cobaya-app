import { useState } from "react";
import styled from "styled-components";
import { Box, Typography, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
// import { FiChevronDown } from "react-icons/fi";
import CustomInput from "../../Input";
import CustomButton from "../../Button";
import CustomSelect from "../../Select";
import PhoneInput from "../../PhoneInput";

import { TOPIC_OPTIONS } from "../../../constants/selectOptions";

export default function ContactPeaceKeepersModal({ languages, closeModal }) {
  const [formStates, setFormStates] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    helpText: '',
  })

  const handleChangeInput = (e) => {
    setFormStates({ ...formStates, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formStates)
  }

  return (
    <Box sx={{
      width: { xs: '100%', sm: '610px' },
      borderRadius: { xs: '20px', sm: '50px 50px 20px 20px' },
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
    }}>
      <Box sx={{
        background: '#34A853',
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
          {languages['Contact our Peacekeepers']}
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
          padding: { xs: '0 20px 20px', sm: '0 40px 15px 20px' },
          borderRadius: '0px 0px 20px 20px',
          background: '#F3F7FC',
        }}
      >
        <form onSubmit={handleSubmit}>
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
            <Grid container columnSpacing={2} rowSpacing={1} alignItems='center'>
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                  }}
                >
                  <strong>{languages['First Name']}</strong>
                  <OrangeText>  *</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
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
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                  }}
                >
                  <strong>{languages['Last Name']}</strong>
                  <OrangeText> *</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
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
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                  }}
                >
                  <strong>{languages['Work Email']}</strong>
                  <OrangeText>*</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
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
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                  }}
                >
                  <strong>{languages['Phone']}</strong>
                  <OrangeText> *</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
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
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                  }}
                >
                  <strong>{languages['Topic']}</strong>
                  <OrangeText> *</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Box
                  sx={{
                    position: 'relative'
                  }}
                >
                  <CustomSelect
                    name='topic'
                    placeholder={languages['Select a topic']}
                    height={50}
                    sx={{
                      color: '#284C88',
                      fontSize: '14px',
                      borderRadius: '20px',
                      background: '#fff',
                      height: '50px'
                    }}
                    value={formStates.topic}
                    onChange={handleChangeInput}
                    options={TOPIC_OPTIONS}
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
            <Grid container columnSpacing={2} rowSpacing={1} mt={1} alignItems='flex-start'>
              <Grid item xs={12} sm={4}>
                <Typography
                  sx={{
                    minWidth: '170px',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#12274C',
                    lineHeight: '17px'
                  }}
                >
                  <strong>{languages['How could our Peacekeepers help you? ']}</strong>
                  <OrangeText> *</OrangeText>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
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
                  name='helpText'
                  value={formStates.helpText}
                  onChange={handleChangeInput}
                  required
                  multiline
                  rows={5}
                  rowsMax={10}
                />
              </Grid>
            </Grid>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mt: '24px'
            }}>
              <CustomButton
                type='submit'
                variant="contained"
                bgColor='#34A853'
                sx={{
                  width: { xs: '150px', sm: '335px' },

                  '&:disabled': {
                    color: '#445881',
                    border: '1px solid #23365F',
                    background: '#23365F'
                  },
                }}
                disabled={
                  formStates.firstName === '' ||
                  formStates.lastName === '' ||
                  formStates.email === '' ||
                  formStates.topic === '' ||
                  formStates.phone === '' ||
                  formStates.helpText === ''
                }
              >
                {languages['Submit']}
              </CustomButton>
            </Box>
          </Box>
        </form>
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

const OrangeText = styled.span`
  color: #D65140;
`

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