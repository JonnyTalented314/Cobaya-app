import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Terms({ languages }) {
  return (
      <Container>
        <List>
          <ListItem>
            <Typography
              color='primary.dark'
              fontSize={12}
              fontWeight={600}
              textTransform='uppercase'
            >
              {languages['Trust and Legal Center']}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              color='primary.dark'
              fontSize={40}
              fontWeight={700}
              lineHeight={'52px'}
            >
              {languages['TERMS OF SERVICE COYABA']}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              color='primary.dark'
              fontSize={15}
              fontWeight={700}
              mt={2.5}
            >
              {languages['Effective date: 22nd February 2022']}
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>{languages['DESCRIPTION OF THE SERVICE']}</Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Coyaba is an online platform that integrates the data you need from your company’s systems, third party applications or company user submissions and offers you a variety of productivity and organizational tools and features via a website (https://my.coyaba.app/) and a mobile application (hereinafter the “Service”).']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Coyaba is your everyday efficiency toolkit (Efficiency Operating System) for a smarter and safer work environment, that helps you gain time, reduce stress and headaches.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Coyaba will coax you into lazy cleverness, where low value-added tasks can be automated, where all your IS systems speak the same language and all your stakeholders work together, in the very same place.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['The Service is developed by COYABA (hereinafter “COYABA”, “we”, “us” or “our”), which is located 79 rue de Rennes 75006 Paris – France and registered in the Paris Trade and Companies Register under n°892 347 592.']}
            </Text>
          </ListItem>
          <ListItem>
            <Label>{languages['SCOPE OF THE TERMS – MODIFICATION']}</Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['These Terms of Use (these “Terms”) apply to anyone who downloads, installs, registers with, accesses or otherwise uses the Service (“User” or “you”).']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['These Terms are a binding contract between you and us. By using the Service, you agree, on behalf of yourself or the entity that you represent, to be bound by these Terms and our Privacy Policy. You represent and warrant that you have the legal authority and capacity to enter into these Terms. You further agree to use Snob times in compliance with all applicable laws.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If you’re using the Service on behalf of an organization or other users, then you are agreeing to these Terms on behalf of that organization or those users. You represent and warrant that you have the authority to bind the organization and the users to these Terms and that you will ensure that the company and the users will comply with these Terms.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If you do not agree to these Terms and our Privacy Policy, please do not access or use the Service. Your continued use of the Service constitutes your acceptance of these Terms.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We may, from time to time, modify these Terms. The revised Terms will be effective as of the published effective date. Your continued use of the Service after any such update constitutes your acceptance of such updates.']}
            </Text>
          </ListItem>
          </List>
          <List>
            <ListItem>
              <Label>
                {languages['COYABA TIMES ACCOUNT - SUBSCRIPTION & REGISTRATION']}
              </Label>
            </ListItem>
            <ListItem>
              <Text>
                {languages['The use of the Service is subject to the payment of a fee. The fees and Service features available to you are determined by the subscription plan and any specific terms agreed to between you and Coyaba times.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['To access the Service, you must register for a Coyaba times account by creating a username and password.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['You agree to provide us with accurate, complete and current registration information about yourself. You agree to promptly update your registration information.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['For security purposes, we may require you to provide information to confirm your identity before the creation of your account or, in the event that you lose access to your account, before restoring access to your account.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['It is your responsibility to maintain the confidentiality of your account login information. By registering, you agree that you are fully responsible for all activities and communications that occur under your username.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['If you become aware of any unauthorized use of or access to your account, please notify us at ']}
                <Link to="#"><strong>peacekeepers@coyaba.app</strong></Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['We will not be liable for any loss, damages or expenses arising from any activity of someone else using your account, either with or without your authorization, and regardless of whether you have notified us of such unauthorized use.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['You may delete your account at any time, for any reason. The deletion of your account will terminate your right to use the Service.']}
              </Text>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Label>
                {languages['USER SUBMISSIONS']}
              </Label>
            </ListItem>
            <ListItem>
              <Text>
                {languages['The Service allows you to create workspaces, to-do lists, tasks, submit data, text, files, text messages, videos and vocal messages and other materials (hereinafter the “User Submissions”) and to share that User Submissions with other Users.']}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {languages['Except for the license you grant us as described below, you maintain ownership of the User Submissions that you submit to the Service.']}
              </Text>
            </ListItem>
            <ListItem>
              <Box>
                <Box mb={'4px'}>
                  <Text>
                    {languages['By submitting User Submissions, you grant us a irrevocable, transferrable, non-exclusive, royalty-free and worldwide license to access, use, copy, reproduce, adapt, publish, transfer and display the User Submissions for the following limited purposes:']}
                  </Text>
                </Box>
                <Ul>
                  <li>
                    <Text>
                      {languages['to provide the Service and to improve its processes, algorithms and artificial intelligence;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['to prevent or address any technical, support or security issues;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['to monitor and investigate any alleged violation of these Terms or legal requirements;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['to comply with legal requirements or process;']}
                    </Text>
                  </li>
                  <li>
                    <Text>
                      {languages['as otherwise expressly permitted in writing by you.']}
                    </Text>
                  </li>
                </Ul>
              </Box>
            </ListItem>
            <ListItem>
              <List>
                <li>
                  <Text>
                    {languages['You warrant that you have:']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['All the rights necessary to grant us this license;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['all required rights to submit User Submission without violation of any contracts (including non-disclosure agreements), third-party rights or applicable law.']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['You understand that you are solely responsible for any User Submission that you submit on the Service.']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['You agree that we do not control or endorse, and are not responsible directly or indirectly for, User Submission.']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['We reserve the right, at our sole discretion, to remove any User Submissions from the Service that violate these Terms or any applicable law.']}
                  </Text>
                </li>
              </List>
            </ListItem>
          </List>
          <List>
          <ListItem>
            <Label>
              {languages['YOUR USE OF THE SERVICE']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Subject to your compliance with these Terms and our Privacy Policy, we grant you a limited, non-exclusive, non-sublicensable, non-transferable and revocable license to access and use the Service only for your internal non-commercial use and only in a manner that complies with all applicable laws.']}
            </Text>
          </ListItem>
          <ListItem>
            <List>
              <li>
                <Text>
                  {languages['You understand that such license does not include any right to:']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['sell, distribute, transfer or otherwise commercially use, with or without fee, the Service or its content;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['copy, reproduce, adapt, modify, distribute, transmit, publish or display the Service or its content;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['reverse engineer, disassemble, decompile, translate or otherwise seek to obtain or derive the source codes, algorithms or similar content of the Service;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['or build a similar or competitive website or service.']}
                </Text>
              </li>
            </List>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree that you will not violate any contract (including non-disclosure agreements), third-party rights or applicable law while using the Service.']}
            </Text>
          </ListItem>
          <ListItem>
            <Box>
              <Box mb={'4px'}>
                <Text>
                  {languages['Specifically, but not limited to these situations, you agree that you will not use the Service:']}
                </Text>
              </Box>
              <Ul>
                <li>
                  <Text>
                    {languages['To engage in any harmful, fraudulent, deceptive, harassing, defamatory, racist, obscene or otherwise unlawful conduct;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['In any manner that could damage, disable, disrupt or impair the functioning of the Service;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['To access any feature or area of the Service that you are not authorized to access;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['In any manner that could interfere with other Users from enjoying the Service;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['In any manner that may violate any personal or proprietary right of any person;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['In any manner that may expose us or others to any harm or liability of any type.']}
                  </Text>
                </li>
              </Ul>
            </Box>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Except as otherwise described in our Privacy Policy, you agree that any User Submission will be non-confidential and nonproprietary. None of your User Submission will subject us to any obligation of confidentiality, and we will not be liable for any use or disclosure of any User Submission.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We reserve the right, but have no obligation, to monitor your use of the Service to ensure compliance with these Terms or applicable law. We reserve the right to investigate any alleged violations of these Terms. We reserve the right to refuse access to or use of the Service to anyone for any reason at any time.']}
            </Text>
          </ListItem>
          <ListItem>
            <Box>
              <Box mb={'4px'}>
                <Text>
                  {languages['You will indemnify, defend, and hold harmless Coyaba times for all claims and expenses arising out of or related to:']}
                </Text>
              </Box>
              <Ul>
                <li>
                  <Text>
                    {languages['Your use of the Service or any other conduct in connection with the Service;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Your User Submissions;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['Your violation of these Terms.']}
                  </Text>
                </li>
              </Ul>
            </Box>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree to cooperate with us in defending such claims and pay all fees, costs and expenses associated with defending such claims.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree that we reserve the right to assume the defense and control of such claims.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['FEES']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree to pay all applicable fees as well as any applicable taxes when due. We may suspend or terminate your use of the Service if fees become past due.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree to provide Coyaba times with information regarding your payment instrument. You represent and warrant that such information is true and that you are authorized to use the payment instrument. You agree to promptly update your account information with any changes that may occur. You hereby authorize Coyaba times to bill your payment instrument in accordance with the terms of the applicable subscription plan.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Fees are non-refundable except as required by law and there will be no refunds for partially used periods.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Subscription plans will be renewed automatically, and we may automatically charge you for such renewal unless you have canceled your subscription plan prior to its renewal date. We may revise fee rates from time to time and will communicate any fee changes to you in advance. Fee changes will take effect at the start of the next subscription plan following the date of the change. To the extent permitted by law, you accept the new fee by continuing to use the Service after the fee change takes effect. If you do not agree with the fee changes, you have the right to reject the change by canceling your subscription plan before the fee change goes into effect.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['FEEDBACK']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You may choose to submit feedback about the Service to us. You agree that the feedback you submit is merely an idea and a suggestion. You further agree that the feedback you submit is non-confidential and nonproprietary. We may use such feedback as it deems appropriate, but this shall not create any obligation to you.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We will be entitled to use, reproduce, disclose, modify, adapt, create derivative works from, publish, display, and distribute throughout the world any feedback you submit in any form, for any purpose, without restriction and without acknowledgment or compensation to you. We will own any exclusive rights on any feature resulting from the use of the feedback you submit.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['OWNERSHIP']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['The Service is owned and operated by Coyaba and contain materials (including software, algorithms, programs, source codes, technology, design, text, photographs, illustrations, images, artwork and other graphic materials, names, logos, trademarks, tradenames, etc.) which are owned by us or licensed to us, and protected by unfair competition laws and intellectual property laws, notably the French Code of Intellectual Property and international treaty provisions.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You acknowledge that the Service has been developed by Coyaba, owner of Snob times through the expenditure of substantial time, effort, and money and constitute valuable property of Coyaba, owner of Coyaba times.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree to comply with all applicable intellectual property laws and any other applicable law, as well as any additional intellectual property notices contained in the Service. Any use of any material contained on the Service without our prior written consent is strictly prohibited. You understand that any unauthorized use of any material contained on the Service may violate intellectual property laws or other applicable laws.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You agree to notify Coyaba times immediately in the event you become aware of any claim that the Service infringes upon any third party, contractual or statutory rights.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['PRIVACY POLICY']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['For information about how we collect, use and share your data, please see our Privacy Policy. You agree that your use of the Service is subject to our Privacy Policy.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['DISCLAIMER – LIMITATION OF LIABILITY']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['The Service is provided “as is” without warranties of any kind, either express or implied, including, but not limited to, any warranty of fitness for a particular purpose, warranty of non-infringement or functionality.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Specifically, but not limited to these situations, we do not warrant that the Service will meet your productivity or organizational requirements and specifications.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We do not represent or warrant that the Service will be available at any time or place, accurate, complete, reliable, current, uninterrupted or error-free. We are not liable for any loss or damage arising from failure of performance, error, interruption or delay in service.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We reserve the right at any time, for any reason, to modify or discontinue, temporarily or permanently, the Service with or without notice. We are not liable to you or any third party for any modification, suspension or discontinuance of the Service or any loss or damage resulting from such modification, suspension or discontinuance.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['While we attempt to make your access to and use of the Service safe, we do not warrant that the Service is free of viruses or other harmful components.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We do not guarantee that files available for downloading from the Service will be free of viruses or other harmful components. You are solely responsible for implementing and maintaining sufficient anti-virus procedures and other security measures. We are not responsible for any loss or damage that may result from your failure to implement sufficient security measures.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We will not be liable for delays, interruptions, service failures or other problems related to the use of the internet and electronic communications or other systems outside our control.']}
            </Text>
          </ListItem>
          <ListItem>
            <Box>
              <Box mb={'4px'}>
                <Text>
                  {languages['The Service may contain content provided by third parties or links to third-party websites. We do not endorse and are not responsible or liable, directly or indirectly, for:']}
                </Text>
              </Box>
              <Ul>
                <li>
                  <Text>
                    {languages['any third-party content available on the Service or on such third-party websites;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['any business practices of such third parties ;']}
                  </Text>
                </li>
                <li>
                  <Text>
                    {languages['any damage or loss in connection with your use of or reliance on such third-party content and websites.']}
                  </Text>
                </li>
              </Ul>
            </Box>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You acknowledge sole responsibility for and assume all risk arising from your use of any third-party content or websites. Your interactions with such third parties will be governed by their own terms of use.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We are not liable to you or any third party for any direct or indirect damages, any loss of profit or money, loss of business, loss of goodwill or reputation, business interruption, loss of data or any other result based on User Submissions, your use of, inability to use or reliance on the Service.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['TERMINATION']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['These Terms will remain in effect until terminated by either you or us. Upon termination, all licenses and other rights granted to you in these Terms will immediately cease.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You may terminate these Terms at any time by ceasing your use of the Service or deleting your account.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We may terminate these Terms and terminate or suspend your right to use the Service at any time, with or without notice to you, for any reason, including suspected breach of these Terms by you. We are not responsible for any loss, harm or expense related to such termination or suspension. We shall not be required to provide any refunds or other compensation to Users in connection with such termination or suspension.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['GOVERNING LAW AND JURISDICTION']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['These Terms and your use of the Service are governed by the laws of France, without regard to any conflict of law rules or principles.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You and COYABA TIMES shall use best efforts to settle any dispute through good faith negotiations. Any dispute between you and us will be resolved in the competent courts of Paris.']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['MISCELLANEOUS']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If any provision of these Terms is held invalid and unenforceable, that provision will be enforceable to the extent permissible, and the other provisions of these Terms will remain in full force.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['You may not assign or transfer your rights under these Terms without our prior written consent. Any attempt to assign or transfer shall be null and void.']}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              {languages['We reserve the right to assign, transfer or subcontract the Services to any third parties']}
            </Text>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Label>
              {languages['CONTACT']}
            </Label>
          </ListItem>
          <ListItem>
            <Text>
              {languages['If you have any questions with respect to these Terms or the Service, please contact us at ']}
              <Link to="#"><strong>peacekeepers@coyaba.app</strong></Link>
            </Text>
          </ListItem>
        </List>
      </Container>
  )
}

const Label = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.primary.darkLight};
    font-size: 20px;
    line-height: 50px;
    font-weight: 700;

    :hover {
      color: ${theme.palette.primary.darkLight};
    }
  `
);

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