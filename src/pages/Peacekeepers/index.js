import { useSelector } from "react-redux";
import styled from "styled-components";

import PeacekeeperTopSection from "../../components/Peacekeepers/PeacekeeperTopSection";
import PeacekeeperAboutSection from "../../components/Peacekeepers/PeacekeeperAboutSection";
import PeacekeeperFounderSection from "../../components/Peacekeepers/PeacekeeperFoundersSection";
import PeacekeeperKeyPartnersSection from "../../components/Peacekeepers/PeacekeeperKeyPartnersSection";

import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function PeacekeepersPage () {
  useDocumentTitle('Coyaba™ Peacekeepers | Meet the Coyaba’s Peacekeepers and their ambitions')
  const languages = useSelector(state => state.languages);

  return (
    <PageWrapper>
      <PeacekeeperTopSection languages={languages} />
      <PeacekeeperAboutSection languages={languages} />
      <PeacekeeperFounderSection languages={languages} />
      <PeacekeeperKeyPartnersSection languages={languages} />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;
