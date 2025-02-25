import React from 'react';
import { Container, Typography, Box, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const PrivacyPolicy = () => {
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
            Privacy Policy
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
            1. Information We Don't Collect
          </Typography>
          <Typography 
            sx={{ 
              color: '#424245',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Ready! Set! Meals! is designed with privacy in mind. We do not collect, store, or process any personal information. The application operates entirely client-side, meaning all data processing happens locally on your device.
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
            2. Temporary Data Usage
          </Typography>
          <Typography 
            sx={{ 
              color: '#424245',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            When you use our meal planning feature, the location and dietary preferences you enter are only used temporarily to generate your meal plan. This information is immediately discarded after generating your plan and is never saved or transmitted to any servers.
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
            3. Third-Party Services
          </Typography>
          <Typography 
            sx={{ 
              color: '#424245',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            Our application uses the Google Generative AI API solely for generating meal plans. No personal information is shared with this service - only the location and dietary preferences you provide are temporarily used to generate appropriate meal suggestions.
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
            4. Changes to This Policy
          </Typography>
          <Typography 
            sx={{ 
              color: '#424245',
              fontSize: '1rem',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            As this is a demonstration project, any significant changes to this privacy policy will be reflected in the "Last updated" date below. We encourage you to review this policy periodically.
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

export default PrivacyPolicy;