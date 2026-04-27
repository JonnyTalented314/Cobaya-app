import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StickyMenuSidebar from "../../components/StickyMenuSidebar";

import SolutionsCompanyTypeSection from "../../components/Solutions/CompanyTypeSection";
import SolutionSection from '../../components/Solutions/SolutionSection'

import { SOLUTIONS_SIDEBAR_MENU, SOLUTIONS_TEAMS, SOLUTIONS_CASE_STUDIES } from "../../constants";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import SupportSection from "../../components/Support";

export default function SolutionsPage () {
  useDocumentTitle('Coyaba™ Solutions | Discover all functions of your Efficiency OS™')
  const location = useLocation()
  const languages = useSelector(state => state.languages);
  const companyTypeRef = useRef(null)
  const teamsRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const supportRef = useRef(null)

  const [currentSection, setCurrentSection] = useState(SOLUTIONS_SIDEBAR_MENU[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY >= companyTypeRef.current.offsetTop && scrollY < teamsRef.current.offsetTop - 100) {
        setCurrentSection(SOLUTIONS_SIDEBAR_MENU[0])
      } else if (scrollY >= teamsRef.current.offsetTop - 100 && scrollY < caseStudiesRef.current.offsetTop - 100) {
        setCurrentSection(SOLUTIONS_SIDEBAR_MENU[1])
      } else if (scrollY >= caseStudiesRef.current.offsetTop - 100 && scrollY < supportRef.current.offsetTop - 200) {
        setCurrentSection(SOLUTIONS_SIDEBAR_MENU[2])
      } else if (scrollY >= supportRef.current.offsetTop - 200) {
        setCurrentSection(SOLUTIONS_SIDEBAR_MENU[3])
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      if (location.hash === '#caseStudies') {
        caseStudiesRef.current.scrollIntoView()
      } else if (location.hash === '#teams') {
        teamsRef.current.scrollIntoView()
      } else if (location.hash === '#companyType') {
        companyTypeRef.current.scrollIntoView()
      }
    }
  }, [location.hash])

  return (
    <PageWrapper>
      <Box sx={{
        position: 'sticky',
        top: 200,
        left: '49px',
        marginLeft: '49px',
        display: { xs: 'none', xl: 'inline-block' },
        zIndex: 150
      }}>
        <StickyMenuSidebar
          items={SOLUTIONS_SIDEBAR_MENU}
          current={currentSection}
          setCurrent={setCurrentSection}
        />
      </Box>
      <Box
        ref={companyTypeRef}
        id='companyType'
        sx={{
          marginTop: { xl: '-120px' },
          scrollMarginTop: '100px'
        }}
      >
        <SolutionsCompanyTypeSection languages={languages} />
      </Box>
      <Box
        ref={teamsRef}
        id='teams'
        sx={{
          scrollMarginTop: '100px'
        }}
      >
        <SolutionSection languages={languages} items={SOLUTIONS_TEAMS} title='Teams' />
      </Box>
      <Box
        ref={caseStudiesRef}
        id='caseStudies'
        sx={{
          scrollMarginTop: '100px'
        }}
      >
        <SolutionSection languages={languages} items={SOLUTIONS_CASE_STUDIES} title='Case Studies' />
      </Box>
      <Box
        ref={supportRef}
        id='support'
        sx={{
          scrollMarginTop: '100px'
        }}
      >
        <SupportSection />
      </Box>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;
