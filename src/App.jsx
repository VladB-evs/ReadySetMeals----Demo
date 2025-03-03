import { useState } from 'react'
import { Container, Typography, Paper, TextField, Button, Box, AppBar, Toolbar, IconButton, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import MealPlanDisplay from './components/MealPlanDisplay'
import { generateMealPlan } from './services/mealPlanService'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function App() {
  const [location, setLocation] = useState('')
  const [dietaryPreferences, setDietaryPreferences] = useState('')
  const [mealPlan, setMealPlan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const generatedMealPlan = await generateMealPlan(location, dietaryPreferences)
      setMealPlan(generatedMealPlan)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fbfbfd' }}>
      <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 }, py: 1 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.02em' }}>
              Ready! Set! Meals!
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6 }}>
            <Link to="/" sx={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, '&:hover': { color: '#22c55e' } }}>Home</Link>
            <Link to="/about" sx={{ color: '#1d1d1f', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, '&:hover': { color: '#22c55e' } }}>About</Link>
          </Box>
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          pt: { xs: 16, md: 20 },
          pb: { xs: 12, md: 16 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=2940&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none',
            transform: 'scale(1.1)',
            zIndex: 0,
            opacity: 0.95
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(251, 251, 253, 0.3) 0%, rgba(251, 251, 253, 0.7) 30%, rgba(251, 251, 253, 0.9) 60%, rgba(251, 251, 253, 1) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.75rem', md: '4rem' },
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#1d1d1f',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                display: 'inline'
              }}
            >
              Your Personal
            </Typography>
            <br />
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.75rem', md: '4rem' },
                fontWeight: 700,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #15803d 0%, #22c55e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                display: 'inline'
              }}
            >
              Meal Planner
            </Typography>
          </Box>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 500,
              color: '#86868b',
              mb: 8,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Discover personalized meal plans tailored to your preferences
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: '-20rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#22c55e',
              cursor: 'pointer',
              animation: 'bounce 2s infinite',
              opacity: 1,
              transition: 'opacity 0.3s ease',
              zIndex: 2
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 16, mt: 8 }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 8,
            color: '#1d1d1f',
            letterSpacing: '-0.02em'
          }}
        >
          How does it work?
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  bgcolor: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <LocationOnIcon sx={{ fontSize: 40, color: '#22c55e' }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#1d1d1f',
                  mb: 2
                }}
              >
                Enter Your Location
              </Typography>
              <Typography
                sx={{
                  color: '#424245',
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}
              >
                Tell us where you are, and we'll consider local ingredients and seasonal availability.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  bgcolor: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <RestaurantIcon sx={{ fontSize: 40, color: '#22c55e' }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#1d1d1f',
                  mb: 2
                }}
              >
                Add Preferences
              </Typography>
              <Typography
                sx={{
                  color: '#424245',
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}
              >
                Specify any dietary restrictions or preferences to personalize your meal plan.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  bgcolor: 'rgba(34, 197, 94, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 40, color: '#22c55e' }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: '#1d1d1f',
                  mb: 2
                }}
              >
                Get Your Plan
              </Typography>
              <Typography
                sx={{
                  color: '#424245',
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}
              >
                Receive an AI-generated weekly meal plan tailored to your needs and location.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 12, mt: 16 }}>        
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            textAlign: 'center',
            mb: 6,
            color: '#1d1d1f',
            letterSpacing: '-0.02em'
          }}
        >
          Generate Your Meal Plan
        </Typography>

        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 3, md: 6 },
            mt: { xs: 6, md: 10 },
            borderRadius: '20px',
            background: '#fff',
            border: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)'
            }
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <TextField
              required
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              disabled={loading}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderRadius: '12px',
                  backgroundColor: '#f5f5f7',
                  '&:hover': {
                    backgroundColor: '#f0f0f2'
                  }
                }
              }}
            />
            <TextField
              label="Dietary Preferences"
              value={dietaryPreferences}
              onChange={(e) => setDietaryPreferences(e.target.value)}
              fullWidth
              multiline
              rows={2}
              placeholder="Enter any dietary preferences or restrictions..."
              disabled={loading}
              sx={{ 
                '& .MuiOutlinedInput-root': { 
                  borderRadius: '12px',
                  backgroundColor: '#f5f5f7',
                  '&:hover': {
                    backgroundColor: '#f0f0f2'
                  }
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading || !location}
              sx={{ 
                py: 2,
                px: 8,
                borderRadius: '980px',
                bgcolor: '#22c55e',
                fontSize: '1.0625rem',
                fontWeight: 500,
                textTransform: 'none',
                boxShadow: 'none',
                alignSelf: 'center',
                '&:hover': {
                  bgcolor: '#16a34a',
                  transform: 'scale(1.02)'
                }
              }}
            >
              {loading ? 'Generating...' : 'Generate Meal Plan'}
            </Button>
          </Box>
        </Paper>

        {error && (
          <Typography color="error" sx={{ mt: 3, textAlign: 'center', fontWeight: 500 }}>
            {error}
          </Typography>
        )}

        {mealPlan && <MealPlanDisplay mealPlan={mealPlan} />}
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
  )
}

export default App
