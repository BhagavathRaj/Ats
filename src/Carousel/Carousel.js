import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=600&h=350&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=600&h=350&q=60',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 1000,
        flexGrow: 1,
        display: 'initial',
        position: 'relative',
        top: '50px',
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: 'absolute',
          top: '200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'inherit',
        }}
      >
        <Button
          sx={{ width: '20px', height: '20px' }}
          size="small"
          onClick={handleBack}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight
              sx={{ width: '30px', height: '30px', color: '#777D74' }}
            />
          ) : (
            <KeyboardArrowLeft
              sx={{ width: '30px', height: '30px', color: '#777D74' }}
            />
          )}
        </Button>
        <Button
          sx={{ width: '20px', height: '20px' }}
          size="small"
          onClick={handleNext}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft
              sx={{ width: '30px', height: '30px', color: '#777D74' }}
            />
          ) : (
            <KeyboardArrowRight
              sx={{ width: '30px', height: '30px', color: '#777D74' }}
            />
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default Carousel;
