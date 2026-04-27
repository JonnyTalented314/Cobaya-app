import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import styled from "styled-components";
import PricingPlanCardsSection from "../../components/Pricing/PricingPlanCards";
import PricingFeatureSection from "../../components/Pricing/PricingFeature";
import PricingFAQSection from "../../components/Pricing/PricingFaq";

import {
  PRICING_COLLABORATION_FEATURES,
  PRICING_INTERACTIONS_FEATURES,
  PRICING_CONNECTORS_FEATURES,
  PRICING_SECURITY_FEATURES,
  PRICING_SUPPORT_FEATURES,
  PRICING_TOOLBOX_FEATURES,
  PRICING_WELL_FITTED_FEATURES
} from "../../constants";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function Pricing() {
  const sm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  useDocumentTitle('Coyaba™ Pricing | Your Efficiency OS™ at the most competitive price')
  
  const toolboxRef = useRef(null)
  const interactionsRef = useRef(null)
  const wellFittedRef = useRef(null)
  const collaborationRef = useRef(null)
  const connectorRef = useRef(null)
  const securityRef = useRef(null)
  const supportRef = useRef(null)

  const languages = useSelector(state => state.languages);
  const [openDetails, setOpenDetails] = useState(false)
  const [expanded, setExpanded] = useState({
    toolbox: true,
    interactions: true,
    wellFitted: true,
    collaboration: true,
    connectors: true,
    security: true,
    support: true,
  })
  const [currentSection, setCurrentSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= toolboxRef.current.offsetTop && scrollY < interactionsRef.current.offsetTop - 100) {
        setCurrentSection('Toolbox')
      } else if (scrollY >= interactionsRef.current.offsetTop - 100 && scrollY < wellFittedRef.current.offsetTop - 100) {
        setCurrentSection('Interactions')
      } else if (scrollY >= wellFittedRef.current.offsetTop - 100 && scrollY < collaborationRef.current.offsetTop - 100) {
        setCurrentSection('Well-Fitted')
      } else if (scrollY >= collaborationRef.current.offsetTop - 100 && scrollY < connectorRef.current.offsetTop - 100) {
        setCurrentSection('Collaboration')
      } else if (scrollY >= connectorRef.current.offsetTop - 100 && scrollY < securityRef.current.offsetTop - 100) {
        setCurrentSection('Connectors')
      } else if (scrollY >= securityRef.current.offsetTop - 100 && scrollY < supportRef.current.offsetTop - 100) {
        setCurrentSection('Security')
      } else if (scrollY >= supportRef.current.offsetTop - 100 && scrollY < supportRef.current.offsetTop + 300) {
        setCurrentSection('Support')
      } else {
        setCurrentSection(null)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickAccordion = (name) => {
    setExpanded({
      ...expanded,
      [name]: !expanded[name]
    })
  }

  return (
    <PageWrapper>
      <PricingPlanCardsSection languages={languages} openDetails={openDetails} onClickOpenDetails={() => setOpenDetails(!openDetails)} />
      <Box
        sx={{
          background: '#F5F9FF',
        }}
      >
        <Box
          sx={{
            padding: { xs: '30px 20px', md: '60px' },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#12274C',
              cursor: 'pointer'
            }}
            onClick={() => setOpenDetails(!openDetails)}
          >
            <Typography
              color='white'
              sx={{
                fontWeight: '700',
                fontSize: { xs: '18px', md: '25px' },
                marginRight: '10px',
                color: '#12274C',
              }}
            >
              <strong>{languages['All details about functions by level']}</strong>
            </Typography>
            {openDetails ? 
              <IoIosArrowDropupCircle size={sm ? 30 : 40} /> : <IoIosArrowDropdownCircle size={sm ? 30 : 40} />
            }
          </Box>
        </Box>
        <Container
          sx={{
            display: openDetails ? 'block' : 'none',
            opacity: openDetails ? 1 : 0,
            transition: 'display 200ms, opacity 0.5s linear',
          }}
        >
          <Box ref={toolboxRef} mt={{ xs: '10px', md: '10px' }}>
            <PricingFeatureSection
              languages={languages} 
              features={PRICING_TOOLBOX_FEATURES}
              title='Toolbox'
              expanded={expanded.toolbox}
              onClickAccordion={() => handleClickAccordion('toolbox')}
              currentSection={currentSection}
            />
          </Box>
          <Box ref={interactionsRef}>
            <PricingFeatureSection 
              languages={languages} 
              features={PRICING_INTERACTIONS_FEATURES} 
              title='Interactions' 
              expanded={expanded.interactions}
              onClickAccordion={() => handleClickAccordion('interactions')} 
              currentSection={currentSection}
            />
          </Box>
          <Box ref={wellFittedRef}>
            <PricingFeatureSection 
              languages={languages} 
              features={PRICING_WELL_FITTED_FEATURES} 
              title='Well-Fitted' 
              expanded={expanded.wellFitted}
              onClickAccordion={() => handleClickAccordion('wellFitted')} 
              currentSection={currentSection}
            />
          </Box>
          <Box ref={collaborationRef}>
            <PricingFeatureSection 
              languages={languages} 
              features={PRICING_COLLABORATION_FEATURES} 
              title='Collaboration'
              expanded={expanded.collaboration}
              onClickAccordion={() => handleClickAccordion('collaboration')}
              currentSection={currentSection} 
            />
          </Box>
          <Box ref={connectorRef}>
            <PricingFeatureSection
              languages={languages}
              features={PRICING_CONNECTORS_FEATURES} 
              title='Connectors'
              expanded={expanded.connectors}
              onClickAccordion={() => handleClickAccordion('connectors')} 
              currentSection={currentSection}
            />
          </Box>
          <Box ref={securityRef}>
            <PricingFeatureSection 
              languages={languages} 
              features={PRICING_SECURITY_FEATURES} 
              title='Security'
              expanded={expanded.security}
              onClickAccordion={() => handleClickAccordion('security')} 
              currentSection={currentSection}
            />
          </Box>
          <Box ref={supportRef} pb={'20px'} bgcolor='#fff'>
            <PricingFeatureSection 
              languages={languages} 
              features={PRICING_SUPPORT_FEATURES} 
              title='Support'
              expanded={expanded.support}
              onClickAccordion={() => handleClickAccordion('support')} 
              currentSection={currentSection}
            />
          </Box>
        </Container>
      </Box>
      <Box bgcolor={openDetails ? '#12274C' : '#F5F9FF'}>
        <Container>
          <PricingFAQSection languages={languages} openDetails={openDetails} />
        </Container>
      </Box>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin: 0 auto;
`;
