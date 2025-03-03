import React from 'react';
import { Container, Typography, Box, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fbfbfd' }}>
      <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 }, py: 2 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.02em' }}>
              Ready! Set! Meals!
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 }}>
            <Link to="/" style={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }} className="hover-link">Home</Link>
            <Link to="/about" style={{ color: '#0071e3', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }} className="hover-link">About</Link>
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
              About Ready! Set! Meals!
            </Typography>

            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                mb: 6
              }}
            >
              Ready! Set! Meals! is a personal project designed to make meal planning easier and more enjoyable. Our AI-powered platform creates personalized meal plans that take into account your location and dietary preferences, helping you discover new recipes and maintain a healthy, balanced diet.
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
              Our Mission
            </Typography>
            <Typography 
              sx={{ 
                color: '#424245',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                mb: 6
              }}
            >
              We believe that eating well shouldn't be complicated. Our mission is to simplify meal planning while considering individual preferences and local ingredients, making it easier for everyone to enjoy healthy, delicious meals.
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
              Contact Us
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3,
              color: '#424245',
              fontSize: '1.125rem',
              mb: 4
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon sx={{ color: '#0071e3' }} />
                <Typography component="a" href="mailto:contact@readysetmeals.com" sx={{ 
                  color: '#424245', 
                  textDecoration: 'none',
                  '&:hover': { color: '#22c55e' }
                }}>
                  vladbacila5@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              gap: 4,
              mt: 4
            }}>
              <IconButton 
                component="a" 
                href="https://www.linkedin.com/in/vlad-bacila/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: '#424245',
                  '&:hover': { color: '#0071e3' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://github.com/VladB-evs" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  color: '#424245',
                  '&:hover': { color: '#0071e3' }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Paper>
        </Container>

        <Box component="footer" sx={{ mt: 'auto', py: 6, bgcolor: '#f5f5f7', borderTop: '1px solid', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
              <Typography sx={{ color: '#86868b', fontSize: '0.8125rem' }}>
                © 2025 ReadySetMeals. All rights reserved.
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

export default About;