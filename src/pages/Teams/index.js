import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StickyMenuSidebar from "../../components/StickyMenuSidebar";

import TeamsGoalsSection from "../../components/Teams/TeamsGoalsSection";
import TeamsToolkitSection from '../../components/Teams/TeamsToolkitSection';
import TeamsCaseStudiesSection from '../../components/Teams/TeamsCaseStudiesSection';
import RequestDemoSection from "../../components/RequestDemo";

import { HOME_TEAMS_MENU_FOR_ALL, TEAMS_SIDEBAR_MENU, TEAMS_CASE_STUDIES } from "../../constants";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function TeamsPage () {
  useDocumentTitle('Coyaba™ Solutions | Discover all functions of your Efficiency OS™')

  const location = useLocation()
  const languages = useSelector(state => state.languages);
  const { teamsId } = useParams()
  const goalsRef = useRef(null)
  const toolkitRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const requestDemoRef = useRef(null)

  const [currentSection, setCurrentSection] = useState(TEAMS_SIDEBAR_MENU[0])
  const [team, setTeam] = useState(HOME_TEAMS_MENU_FOR_ALL[0])

  useEffect(() => {
    if (teamsId) {
      setTeam(HOME_TEAMS_MENU_FOR_ALL.filter(item => item.id === teamsId)[0])
    }
  }, [teamsId])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY >= goalsRef.current.offsetTop && scrollY < toolkitRef.current.offsetTop - 100) {
        setCurrentSection(TEAMS_SIDEBAR_MENU[0])
      } else if (scrollY >= toolkitRef.current.offsetTop - 100 && scrollY < caseStudiesRef.current.offsetTop - 100) {
        setCurrentSection(TEAMS_SIDEBAR_MENU[1])
      } else if (scrollY >= caseStudiesRef.current.offsetTop - 100 && scrollY < requestDemoRef.current.offsetTop - 200) {
        setCurrentSection(TEAMS_SIDEBAR_MENU[2])
      } else if (scrollY >= requestDemoRef.current.offsetTop - 200) {
        setCurrentSection(TEAMS_SIDEBAR_MENU[3])
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
      } else if (location.hash === '#goals') {
        goalsRef.current.scrollIntoView()
      } else if (location.hash === '#toolkit') {
        toolkitRef.current.scrollIntoView()
      }
    }
  }, [location.hash])

  return (
    <PageWrapper>
      <Box sx={{
        position: 'sticky',
        top: 170,
        left: '49px',
        marginLeft: '49px',
        display: { xs: 'none', xl: 'inline-block' },
        zIndex: 150
      }}>
        <StickyMenuSidebar
          page='teams'
          activeColor={team.color}
          items={TEAMS_SIDEBAR_MENU}
          current={currentSection}
          setCurrent={setCurrentSection}
        />
      </Box>
      <Box
        ref={goalsRef}
        id='goals'
        sx={{
          marginTop: { xl: '-160px' },
          scrollMarginTop: '100px'
        }}
      >
        <TeamsGoalsSection languages={languages} team={team} />
      </Box>
      <Box
        ref={toolkitRef}
        id='toolkit'
        sx={{
          background: '#fff',
          scrollMarginTop: '100px'
        }}
      >
        <TeamsToolkitSection languages={languages} activeColor={team?.color} />
      </Box>
      <Box
        ref={caseStudiesRef}
        id='caseStudies'
        sx={{
          scrollMarginTop: '100px'
        }}
      >
        <TeamsCaseStudiesSection languages={languages} activeColor={team?.color} items={TEAMS_CASE_STUDIES}/>
      </Box>
      <Box
        ref={requestDemoRef}
        id='request-demo'
        sx={{
          scrollMarginTop: '100px'
        }}
      >
        <RequestDemoSection />
      </Box>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;
