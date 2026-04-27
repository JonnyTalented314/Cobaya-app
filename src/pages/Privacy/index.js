import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TrustMenu from "../../components/TrustMenu";

export default function Privacy() {
  const languages = useSelector(state => state.languages)

  return (
    <PageWrapper>
      <TrustMenu languages={languages}  value='terms' />
      <Container>
        <List>
          <ListItem>
            <Typography
              variant='semibold'
              color='primary.dark'
              fontSize={12}
              textTransform='uppercase'
            >
              {languages['Trust and Legal Center']}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              color='primary.dark'
              fontSize={{ xs: '24px', sm: '40px' }}
              fontWeight={700}
              lineHeight={{ xs: '29px', sm: '52px' }}
            >
              <strong>{languages['Privacy Policy']}</strong>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              color='primary.dark'
              fontSize={15}
              fontWeight={700}
              mt={2.5}
            >
              <strong>{languages['Effective date: 22nd February 2022']}</strong>
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Text>
              {languages['Your privacy is extremely important to us. We undertake to respect the confidentiality and security of your personal data, in compliance with the provisions of the French Act No. 78-17 of 6 January 1978, on information technology, files and civil liberties and the provisions of the EU regulation No. 2016/679 of 27 April 2016 (GDPR).']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['By using the Service, you agree, on behalf of yourself or the entity that you represent, to be bound by our Privacy Policy and the Terms of Service.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We may, from time to time, modify this Privacy Policy. We will notify you in advance in case of significant changes concerning your personal data. The revised Privacy Policy will be effective as of the published effective date. Your continued use of the Service after any such update constitutes your acceptance of such updates.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If you do not agree to these Terms and our Privacy Policy, please do not access or use the Service. Your continued use of the Service constitutes your acceptance of the Terms of use and this Privacy Policy.']}
            </Text>
          </ListItem>
          <ListItem>
            <Label>{languages['Scope of this Privacy Policy']}</Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['The Service may provide you with access to third-party websites and services. We are not responsible for the terms of use or privacy practices of these third-party websites or services. This Privacy Policy applies solely to data collected by us through the Service.']}
            </Text>
          </ListItem>
          </List>
          <List>
            <ListItem>
              <Label>
                {languages['Processing manager']}
              </Label>
            </ListItem>
            <ListItem>
              <Text>
                {languages['COYABA']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                79 rue de Rennes 75006 Paris – France
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['Registered in the Paris Trade and Companies Register under n°892 347 592']}
              </Text>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Label>
                {languages['What information do we collect and how?']}
              </Label>
            </ListItem>
            <ListItem>
              <Text>
                {languages['We may collect and process your personal data such as your last name, first name, date of birth, telephone number, email address, postal address, username and password, payment instrument, information required for billing purposes, electronic identification data available on or from your computer (such as “cookies“ and “IP addresses“), your activity data on the Service (such as the features you use; the User Submissions you upload to the Services; data relating to how you interact with other Users).']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['We may collect your personal data when you navigate on our website or when you access, register for or use the Service.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['We may also collect your personal data from other Users (for example, when they submit content through the Service)']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['We may also collect personal data from third-party services you link to your Coyaba account (such as a third-party document-sharing service). In this case, you must ensure that such third-party services may be linked to the Service in compliance with such third-party’s terms of use and privacy settings.']}
              </Text>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Label>
                {languages['Why do we collect your personal data ?']}
              </Label>
            </ListItem>
            <ListItem>
              <Box>
                <Box mb={'4px'}>
                  <Text>
                    {languages['We collect and process your personal data in order to :']}
                  </Text>
                </Box>
                <Ul>
                  <li>
                    <Text>
                      {languages['provide you with access to the Service and process your registration ;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['contact you for customer service and billing purposes ;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['process your information requests ;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['personalize and improve your experience on the Service ;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['monitor and evaluate the use and performance of the Service.']}
                    </Text>
                  </li>
                </Ul>
              </Box>
            </ListItem>
            <ListItem>
              <Text>
                {languages['Subject to your agreement, we may also process your data to send you marketing and sales communications or newsletters. You will always have the option to unsubscribe from such communications.']}
              </Text>
            </ListItem>
          </List>
          <List>
          <ListItem>
            <Label>
              {languages['Are your data shared with third parties?']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We do not sell your personal data.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Your personal data may be shared with our subcontractors for the following purposes :']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We may disclose your data to the competent authorities if we are required to do so in order to comply with an applicable law or court order. We may also disclose your data in special circumstances when we believe in good faith that disclosing this information is necessary to investigate a violation of our Terms of service or an alleged fraud, or to protect our Users or the public.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['For how long will your data be stored?']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We store and retain your personal data for the time required to achieve the purposes for which they are collected, unless a longer retention period is required by law (such as for tax and accounting purposes).']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['How do we protect your data?']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We design our service with privacy in mind.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We take reasonable and standard precautions to guarantee the security of your data. We use reasonable physical, electronic and administrative procedures in connection with the collection, storage and disclosure of personal customer information.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We follow standard encoding systems on all web pages requesting you to enter personal data or when handling payment instruments.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['It is important for you to protect against unauthorized access to your password and account information. We recommend using a unique password for your Coyaba account that is not used for other accounts.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['What are your rights about your personal data?']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['In compliance with the applicable personal data protection regulations and subject to any applicable restrictions, you can:']}
            </Text>
          </ListItem>
          <ListItem>
            <Box>
              <Box mb={'4px'}>
                <Text>
                  {languages['Access your data ;']}
                </Text>
              </Box>
              <Ul>
                <li>
                  <Text>
                    {languages['Rectify and update your data if they are incorrect, incomplete or obsolete;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Request the portability of your data;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Refuse the processing of your data;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Request the deletion of your data, unless we are required to keep them for legal, legitimate or contractual reasons;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Request a limitation of the processing of your data;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Preventively make decisions on the processing of your data post mortem;']}
                  </Text>
                </li>
              </Ul>
            </Box>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Change your preferences with respect to communications and other information you receive from us.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['How do you exercise your rights? Whom do I contact if I have any Privacy questions?']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If you wish to exercise your rights about your data or have any questions about this Privacy Policy, please contact us at ']}
              <Link to="#"><strong>peacekeepers@coyaba.app</strong></Link>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We may check your identity before processing your request.']}
            </Text>
          </ListItem>
        </List>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled('div')`
  margin: 0 auto;
  padding: 0px 0 100px;
  background: #fff;
  position: relative;
`;

const Label = styled(Typography)(
  ({ theme }) => ({
    color: theme.palette.primary.darkLight,
    fontFamily: 'Gilroy Bold',

    '&:hover': {
      color: theme.palette.primary.darkLight
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '24px'
    },

    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      lineHeight: '50px'
    }
}))

const Text = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.primary.dark};
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 2px;
  `
);

const Ul = styled('ul')(
  ({ theme }) => `
    list-style-type: disc;
    
    li {
      color: ${theme.palette.primary.dark};
    }

    li p {
      margin-bottom: 0px;
      line-height: 18px;
    }
`
);