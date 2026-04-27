import { Box, Container } from "@mui/material";
import PublicBg from '../../../../assets/images/backgrounds/public-background.svg'

export default function PublicTopSection({ children }) {
  return (
    <Box sx={{
      backgroundImage: `url(${PublicBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
    }}>
      <Container>
        {children}
      </Container>
    </Box>
  );
}