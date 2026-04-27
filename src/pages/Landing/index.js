import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import { useMutation } from 'react-query'
// import { useMutation, useQuery } from 'react-query'
import Input from '../../components/Input'
import CustomButton from '../../components/Button'

import { openModal } from '../../store';
import { sendEmail } from '../../services/api-service';

export default function Landing() {
  const dispatch = useDispatch()
  const { isLoading, mutateAsync: sendEmailApi } = useMutation(sendEmail)
  const languages = useSelector(state => state.languages)
  const [formStates, setFormStates] = useState({
    from: '',
    subject: 'Coyaba-Email',
    text: 'Keep me Posted'
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formStates)
    sendEmailApi(formStates, {
      onSuccess: data => {
        console.log(data)
        dispatch(
          openModal({
            currentModal: 'EMAIL_CONFIRM',
            modalProps: {}
        }))
      },
      onError: err => console.log(err.message)
    })
    console.log(isLoading)
  }

  return (
    <PageWrapper>
      <Box
        sx={{
          maxWidth: '764px',
          flexDirection: 'column',
          paddingTop: '14%'
        }}
      >
        <Typography 
          variant="h5"
          sx={{
            color: '#FFFFFF'
          }}
        >
            {`${languages['Your']} `}
            <BlueTitleText>
              {languages['Efficiency OS']}
              <SupText>TM</SupText>
            </BlueTitleText>
            {` ${languages['for a']} `}<br />
            <BlueTitleText>{`${languages['smarter']} `} </BlueTitleText>
            {`${languages['and']} `}
            <BlueTitleText>{`${languages['safer']} `}</BlueTitleText>
            {`${languages['work environment.']} `}
        </Typography>
        <Typography
          sx={{
            maxWidth: '597px',
            fontSize: { xs: '12px', sm: '18px' },
            lineHeight: { xs: '14px', sm: '22px' },
            marginTop: { xs: '28px', sm: '10px' }
          }}
        >
          {languages['Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.']}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '108px',
          paddingX: { xs: '20px', sm: 0 }
        }}>
          <form onSubmit={handleSubmit}>
            <Label>{languages['E-mail']}</Label>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', sm: '426px' },
                  marginRight: { xs: '0', sm: '52px' },
                  marginBottom: { xs: '26px', sm: '0' }
                }}
              >
                {/* <Input
                  type="email"
                  id="email"
                  placeholder='thomas@mycompany.com'
                  height={50}
                  color='#445881'
                  border='1px solid #CED6E8'
                  borderRadius={10}
                  fontSize={16}
                  onChange={(e) => {
                    setFormStates({
                      ...formStates,
                      from: e.target.value
                    })
                  }}
                  required
                /> */}
                <Input
                  type="email"
                  id="email"
                  variant="outlined"
                  placeholder='thomas@mycompany.com'
                  height={50}
                  sx={{
                    color: '#445881',
                    border: '1px solid #CED6E8',
                    borderRadius: '10px',
                    fontSize: '16px',
                    background: '#fff'
                  }}
                  value={formStates.from}
                  onChange={(e) => {
                    setFormStates({
                      ...formStates,
                      from: e.target.value
                    })
                  }}
                  fullWidth
                  required
                />
              </Box>
              <ButtonWrapper>
                <CustomButton
                  type='submit'
                  variant='contained'
                  bgColor={{ xs:'#4285F4', sm: '#23365F' }}
                  sx={{
                    width: { xs: '200px' },
                    border: { xs: '2px solid #4285F4', sm: '2px solid #23365F' },

                    '&:hover': {
                      border: '2px solid #4285F4',
                      background: '#4285F4'
                    },
                  }}
                >
                  {languages['Keep me Posted']}
                </CustomButton>
              </ButtonWrapper>
            </Box>
          </form>
        </Box>
      </Box>
    </PageWrapper>
  )
}

const PageWrapper = styled(Container)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  position: 'relative',
  margin: '0 auto',
  minHeight: '600px',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 260px)',
  },
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 140px)',
  },
  [theme.breakpoints.up('md')]: {
    height: 'calc(100vh - 170px)',
  },
}))

const BlueTitleText = styled('span')(({ theme }) => ({
  color: '#4285F4'
}))

const SupText = styled('sup')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '25px'
  },
}))

const Label = styled(Typography)`
  font-weight: 400;
  font-size: 16px !important;
  line-height: 16px;
  color: #fff;
  margin-bottom: 4px;
`

const ButtonWrapper = styled('div')`
  font-weight: 700;
`

