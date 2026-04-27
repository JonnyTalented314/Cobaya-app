import { Box, Container, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cookie() {
  const languages = useSelector(state => state.languages)

  return (
    <Container>
      <List>
        <ListItem>
          <Typography
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
            fontSize={40}
            fontWeight={700}
            lineHeight={'52px'}
          >
            {languages['COOKIES POLICY COYABA']}
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
          <Text>
            {languages['We might use cookies or tracking technologies when you navigate on our website or use the Service.']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['This Policy will help you understand how we use these cookies and what your options are.']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['When using cookies, we undertake to comply with the provisions of the European Directive 2002/58/EC of 12 July 2002, the French Act No. 78-17 of 6 January 1978 on information technology, files and civil liberties and the EU regulation No. 2016/679 of 27 April 2016 (GDPR).']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['We may, from time to time, modify this Cookies Policy. We will notify you in advance of any changes.']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['We also invite you to read our Privacy Policy which informs you of your rights about your personal data.']}
          </Text>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>{languages['What are cookies and similar technologies?']}</Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['A cookie is a small data file sent to your web browser and stored on your device (computer, smartphone, tablet, etc.). Cookies and similar technologies collect information about your navigation on a website.']}
          </Text>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>
            {languages['What cookies do we use?']}
          </Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['Cookies might be used by us (Coyaba, 79 rue de Rennes 75006 Paris – France ; registered in the Paris Trade and Companies Register under n°892 347 592).']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['Cookies might also be used by third parties. The use of cookies by third parties is subject to their own privacy and cookies policy. For more information about how such third parties use cookies and how to manage their setting, we recommend that you read their privacy and cookies policies']}
          </Text>
        </ListItem>
        <ListItem>
          <Box>
            <Box mb={'4px'}>
              <Text>
                {languages['We use the following cookies:']}
              </Text>
            </Box>
            <Ul>
              <li>
                <Text>
                  {languages['Necessary cookies: these cookies are necessary to navigate on the website and use its features. They are used notably to improve the performance of our services, maintain security on our website or facilitate your navigation and enhance your experience on our website ;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['Preferences cookies (functionality cookies): these cookies allow our website to remember choices you have made in the past and adapt our website’s presentation to your preferences ;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['Statistics cookies: these cookies collect information about how you use our website (such as the pages you visited and the links you clicked on). This information is used to improve website functions ;']}
                </Text>
              </li>
              <li>
                <Text>
                  {languages['Marketing/advertising cookies: these cookies help us deliver more relevant advertising content.']}
                </Text>
              </li>
            </Ul>
          </Box>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>
            {languages['What about your personal data collected through the use of cookies?']}
          </Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['We might collect personal data through the use of cookies such as your IP address. In this case, we undertake to comply with our Privacy Policy.']}
          </Text>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>
            {languages['How long do we store cookies?']}
          </Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['The duration of cookies varies according to their purpose but will not exceed 13 months.']}
          </Text>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>
            {languages['What are your options regarding cookies?']}
          </Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['When you visit our website for the first time, we inform you that we use cookies and why we use them through an information banner. You can accept or refuse these cookies by clicking on the “Accept” or “Refuse” button.']}
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            {languages['If you disable cookies, some features of our website might not work correctly.']}
          </Text>
        </ListItem>
        <ListItem>
          <Box>
            <Box mb={'4px'}>
              <Text>
                {languages['You can change your preferences concerning cookies at any time by modifying your web browser’s settings:']}
              </Text>
            </Box>
            <Ul>
              <li>
                <Text>
                  Internet Explorer
                </Text>
              </li>
              <li>
                <Text>
                  Safari
                </Text>
              </li>
              <li>
                <Text>
                  Chrome
                </Text>
              </li>
              <li>
                <Text>
                  Firefox
                </Text>
              </li>
            </Ul>
          </Box>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Label>
            {languages['Whom do I contact if I have any Cookies questions?']}
          </Label>
        </ListItem>
        <ListItem>
          <Text>
            {languages['If you any questions about this Cookies Policy, please contact us at ']}
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
    text-transform: uppercase;

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