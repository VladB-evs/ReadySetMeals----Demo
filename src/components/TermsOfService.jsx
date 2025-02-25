import React from 'react';
import { Container, Typography, Box, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const TermsOfService = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fbfbfd' }}>
      <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 }, py: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.02em' }}>
            Ready! Set! Meals!
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 }}>
            <Link to="/" style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }} className="hover-link">Home</Link>
            <Link to="#" style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }} className="hover-link">About</Link>
          </Box>
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ pt: { xs: 12, md: 16 } }}>
        <Container maxWidth="md">
          <Paper 
            elevation={0} 
            sx={{ 
              p: { xs: 4, md: 6 },
              borderRadius: '20px',
              background: '#fff',
              border: '1px solid',
              borderColor: 'rgba(0, 0, 0, 0.1)',
              mb: 8
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#1d1d1f',
                mb: 4
              }}
            >
              Terms of Service
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: 3,
                mt: 6
              }}
            >
              1. Personal Project Declaration
            </Typography>
            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              Ready! Set! Meals! is a personal project created for demonstration and portfolio purposes only. This application is not a commercial service and is not intended for commercial use.
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: 3,
                mt: 6
              }}
            >
              2. Data Collection Policy
            </Typography>
            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              We want to be absolutely clear: Ready! Set! Meals! does not collect, store, or process any personal data. Any information entered into the application (such as location or dietary preferences) is only used temporarily to generate meal plans and is not stored or retained in any way.
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: 3,
                mt: 6
              }}
            >
              3. No Warranties
            </Typography>
            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              This service is provided "as is" without any warranties of any kind. The meal plans generated are for demonstration purposes only, and we make no guarantees about their suitability, accuracy, or completeness.
            </Typography>

            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: 3,
                mt: 6
              }}
            >
              4. Contact
            </Typography>
            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1rem',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              For any questions about these terms or the project in general, please reach out through the provided support channels. Remember that this is a personal project, and response times may vary.
            </Typography>

            <Typography 
              sx={{ 
                color: '#86868b',
                fontSize: '0.875rem',
                mt: 8,
                pt: 4,
                borderTop: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.1)'
              }}
            >
              Last updated: February 2025
            </Typography>
          </Paper>
        </Container>

        <Box component="footer" sx={{ mt: 'auto', py: 6, bgcolor: '#f5f5f7', borderTop: '1px solid', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
              <Typography sx={{ color: '#86868b', fontSize: '0.8125rem' }}>
                © 2024 ReadySetMeals. All rights reserved.
              </Typography>
              <Box sx={{ display: 'flex', gap: 6 }}>
                <Link to="/privacy" style={{ color: '#86868b', fontSize: '0.8125rem', textDecoration: 'none' }} className="hover-link">Privacy Policy</Link>
                <Link to="/terms" style={{ color: '#86868b', fontSize: '0.8125rem', textDecoration: 'none' }} className="hover-link">Terms of Service</Link>
                <Link to="#" style={{ color: '#86868b', fontSize: '0.8125rem', textDecoration: 'none' }} className="hover-link">Support</Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default TermsOfService;