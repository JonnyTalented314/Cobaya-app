import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "../../Button";
import ImageBox from "../../Image";

import IconCheck from '../../../assets/images/icons/icon-patch-check-blue.svg'
import IconClose from '../../../assets/images/icons/icon-patch-close-red.svg'
import { openModal } from "../../../store";

export default function PricingFeatureSection({ languages, title, features = [], onClickAccordion, expanded = true, currentSection }) {
  const dispatch = useDispatch()

  const handleClickButton = () => {
    dispatch(
      openModal({
        currentModal: 'CONTACT_SALES',
        modalProps: {}
    }))
  }

  return (
    <Box>
      <TableContainer
        component={Box}
        sx={{
          background: '#fff',
          marginBottom: expanded ? 0 : '4px',
          position: 'relative',
          // borderRadius: !expanded && '10px',

          '.MuiTableContainer-root': {
            overflowX: expanded ? 'auto' : 'none'
          },
        }}
      >
        <Table 
          sx={{ 
            minWidth: 650,
            'tr:nth-of-type(even)': {
              backgroundColor: (title !== 'Connectors' && title !== 'Support') && '#fff'
            },
            '*': {
              transition: 'all .6s ease'
            }
          }}
          aria-label="pricing table"
        >
          <TableHeader 
            sx={{
              'th': {
                paddingY: { xs: '12px', sm: '32px' }
              },
              position: currentSection === title && expanded ? { lg: 'fixed' } : 'static',
              marginTop: 0,
              top: { xs: '70px', lg: '100px' },
              left: { xs: 0, lg: 'auto'},
              width: '1152px',
              background: '#fff',
              zIndex: currentSection === title ? 999 : 3,
              boxShadow: currentSection === title && '1px 15px 45px rgba(0,0,0,.15)',
            }}
            title={title}
            expanded={expanded}
            onClickAccordion={onClickAccordion}
            languages={languages}
            handleClickButton={handleClickButton}
            features={features}
            currentSection={currentSection}
          />
          <TableHeader
            sx={{
              'th': {
                paddingY: { xs: '8px', md: '32px' }
              },
              background: '#fff',
              width: '1152px',
              opacity: 0,
              display: { xs: 'none', lg: (currentSection !== title || !expanded) ? 'none' : 'table-header-group' }
            }}
            title={title}
            expanded={expanded}
            onClickAccordion={onClickAccordion}
            languages={languages}
            handleClickButton={handleClickButton}
            features={features}
          />
          {expanded && (
            <TableBody>
              {features.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ 
                    '&:last-child td, &:last-child th': { border: 0 },
                    'th, td': { 
                      borderBottom: '5px solid #fff',
                    },
                    background: '#F5F9FF',
                    height: { xs: '60px', md: '80px' },
                    transition: 'margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                  }}
                >
                  <TableCell 
                    scope="row"
                  >
                    <PricingTableCell value={row.title} />
                  </TableCell>
                  <TableCell 
                    align="center"
                  >
                    <PricingTableCell value={row.backyard} />
                  </TableCell>
                  <TableCell 
                    align="center"
                  >
                    <PricingTableCell value={row.square} />
                  </TableCell>
                  <TableCell 
                    align="center"
                  >
                    <PricingTableCell value={row.park} />
                  </TableCell>
                  <TableCell 
                    align="center"
                  >
                    <PricingTableCell value={row.forest} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  )
}

const TableHeader = ({ currentSection, title, expanded, onClickAccordion, languages, handleClickButton, features, sx }) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const locale = useSelector(state => state.locale)

  return (
    <TableHead
      sx={{
        ...sx
      }}
    >
      <TableRow sx={{
        'th': { 
          borderBottom: 'none',
        },
        width: '1152px',
        background: !expanded ? '#12274C' : '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <TableCell
          component="th"
          sx={{
            cursor: 'pointer',
            color: expanded ? '#12274C' : '#fff',
            padding: expanded ? '32px 0 32px 16px' : '32px 16px',
            width: currentSection === title ? '342px' : '340px'
          }}
          onClick={onClickAccordion}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              color={expanded ? '#12274C' : '#fff'}
              sx={{
                width: { xs: '170px',  md: '270px' },
                fontWeight: 700,
                fontSize: { xs: '25px', md: '40px' },
                textTransform: 'capitalize',
                opacity: expanded ? 1 : 0.5,
              }}
            >
              <strong>{languages[title]}</strong>
            </Typography>
            {expanded ? <IoIosArrowDropupCircle size={sm ? 30 : 40} /> : <IoIosArrowDropdownCircle size={sm ? 30 : 40} />}
          </Box>
        </TableCell>
        <TableCell component="th" align="center" width={ currentSection === title ? '168px' : '166px'}>
          {expanded && (
            <>
            <Typography
              color='#D65140'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px',
                textTransform: 'uppercase',
              }}
            >
              <strong>{languages['Backyard']}</strong>
            </Typography>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant='outlined'
                bgColor='#D65140'
                sx={{
                  width: { md: '150px' },
                  marginTop: '16px'
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
            </>
          )}
        </TableCell>
        <TableCell component="th" align="center" width={ currentSection === title ? '168px' : '166px'}>
          {expanded && (
            <>
            <Typography
              color='primary'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px',
                textTransform: 'uppercase',
              }}
            >
              <strong>{languages['Square']}</strong>
            </Typography>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant='outlined'
                bgColor='#4285F4'
                sx={{
                  width: { md: '150px' },
                  marginTop: '16px'
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
            </>
          )}
        </TableCell>
        <TableCell component="th" align="center" width={ currentSection === title ? '168px' : '166px'}>
          {expanded && (
            <>
            <Typography
              color='#34A853'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px',
                textTransform: 'uppercase',
              }}
            >
              <strong>{languages['Park']}</strong>
            </Typography>
            <Link to={`${locale && `/${locale}`}/getstarted`} target='_blank'>
              <CustomButton
                variant='outlined'
                bgColor='#34A853'
                sx={{
                  width: { md: '150px' },
                  marginTop: '16px'
                }}
              >
                {languages['Get Started']}
              </CustomButton>
            </Link>
            </>
          )}
        </TableCell>
        <TableCell component="th" align="center" width={ currentSection === title ? '168px' : '166px'}>
          {expanded ? (
            <>
            <Typography
              color='#284C88'
              sx={{
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: '25px',
                textTransform: 'uppercase'
              }}
            >
              <strong>{languages['Forest']}</strong>
            </Typography>
            <CustomButton
              variant='outlined'
              bgColor='#284C88'
              sx={{
                width: { xs: '130px', md: '150px' },
                marginTop: '16px',
              }}
              onClick={handleClickButton}
            >
              {languages['Contact Sales']}
            </CustomButton>
            </>
          ) : (
            <Typography
              color='#fff'
              sx={{
                fontWeight: 700,
                opacity: 0.5,
                fontSize: '18px',
                lineHeight: '23px',
                textTransform: 'capitalize',
                textAlign: 'right'
              }}
            >
              <strong>{`${features.length} ${languages['Features']}`}</strong>
            </Typography>
          )}
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

const PricingTableCell = ({ value }) => {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  // const isNumber = (value) => {
  //   if(typeof value == 'number'){
  //     return true
  //    } else {
  //     return false
  //    }
  // }

  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: { xs: '16px', md: '18px' },
        lineHeight: '23px'
      }}
    >
      {value === 'closed' && (
        <ImageBox src={IconClose} width={sm ? 24 : 35} alt='icon-cancel' />
      )}
      {value === 'checked' && (
        <ImageBox src={IconCheck} width={sm ? 24 : 35} alt='icon-check' />
      )} 
      {value !== 'closed' && value !== 'checked' && (
        <strong>{value}</strong>
      )}
    </Typography>
  )
}