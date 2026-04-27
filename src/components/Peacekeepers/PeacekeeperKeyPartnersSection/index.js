import { Box, Typography, Container } from "@mui/material";

export default function TeamsKeyPartnersSection({ languages }) {
  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: '700px' },
        background: '#fff',
      }}
    >
      <Container
      >
        <Box 
          py={{ xs: '20px', sm: '63px' }}
        >
          <Box>
            <Typography
              color='primary.dark'
              variant="sectionTitle"
            >
              {`${languages["Key partners"]}`}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}