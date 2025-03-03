import React from 'react';
import { Box, Typography, Paper, Grid, Divider, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { generateMealPlanPDF } from '../utils/pdfUtils';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const MealPlanDisplay = ({ mealPlan }) => {
  if (!mealPlan) return null;

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  const getMealIcon = (mealType) => {
    switch(mealType.toLowerCase()) {
      case 'breakfast':
        return <FreeBreakfastIcon sx={{ fontSize: '1.5rem' }} />;
      case 'lunch':
        return <LunchDiningIcon sx={{ fontSize: '1.5rem' }} />;
      case 'dinner':
        return <DinnerDiningIcon sx={{ fontSize: '1.5rem' }} />;
      case 'snacks':
        return <LocalCafeIcon sx={{ fontSize: '1.5rem' }} />;
      default:
        return <RestaurantIcon sx={{ fontSize: '1.5rem' }} />;
    }
  };

  return (
    <Box sx={{ width: '100%', mt: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 3, 
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#1d1d1f',
            letterSpacing: '-0.02em'
          }}
        >
          Your Weekly Meal Plan
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => generateMealPlanPDF(mealPlan)}
          sx={{
            bgcolor: '#22c55e',
            color: '#fff',
            borderRadius: '980px',
            px: 4,
            py: 1,
            textTransform: 'none',
            fontSize: '0.9375rem',
            fontWeight: 500,
            '&:hover': {
              bgcolor: '#16a34a'
            }
          }}
        >
          Download Meal Plan
        </Button>
      </Box>
      
      <Grid container spacing={3}>
        {daysOfWeek.map((day) => (
          <Grid item xs={12} key={day}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 4 },
                bgcolor: '#fff',
                borderRadius: '24px',
                border: '1px solid',
                borderColor: 'rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)'
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 3,
                pb: 2,
                borderBottom: '2px solid',
                borderColor: 'rgba(0, 113, 227, 0.1)'
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    color: '#1d1d1f',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {day}
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {mealTypes.map((mealType) => (
                  <Grid item xs={12} sm={6} md={3} key={`${day}-${mealType}`}>
                    <Box
                      sx={{
                        p: 3,
                        minHeight: '160px',
                        height: '30%',
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'rgba(0, 113, 227, 0.02)',
                        borderRadius: '16px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(0, 113, 227, 0.04)',
                          transform: 'translateY(-4px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1.5,
                        mb: 2
                      }}>
                        <Box sx={{ 
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {getMealIcon(mealType)}
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: '1.125rem',
                            color: 'primary.main',
                            letterSpacing: '-0.01em'
                          }}
                        >
                          {mealType}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#1d1d1f',
                          lineHeight: 1.6,
                          fontSize: '0.9375rem'
                        }}
                      >
                        {mealPlan[day.toLowerCase()]?.[mealType.toLowerCase()] || 'No meal planned'}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MealPlanDisplay;