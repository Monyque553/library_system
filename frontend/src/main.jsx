import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, Typography, Container, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Library System
          </Typography>
          <Typography variant="body1">
            Frontend React + MUI pronto para Docker.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
