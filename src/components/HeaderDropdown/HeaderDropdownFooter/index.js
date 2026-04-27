import { Container, Box, Typography } from "@mui/material";

import DiscoverLinkButton from "../../DiscoverLinkButton";
import IconChat from "../../IconChat";

export default function HeaderDropdownFooter({ menu, languages }) {
  return (
    <Box
      sx={{
        borderTop: '1px solid #DDEAFB;',
        paddingY: '16px',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <IconChat width={30} />
          <Typography
            variant="semibold"
            sx={{
              fontSize: '16px',
              lineHeight: '20px',
              color: '#12274C',
              ml: '15px'
            }}
          > 
            <strong>{languages['Get in touch with our Peacekeepers 24/7']}</strong>
          </Typography>
        </Box>
        <DiscoverLinkButton languages={languages} />
      </Container>
    </Box>
  )
}