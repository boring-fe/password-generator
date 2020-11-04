import React from 'react';
import {
  Container,
  Button,
  Slider,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core';

export const PasswordGenerator = ({
  suggestedPassword,
  length,
  onLengthChange,
  strategyList,
  activeStratefies,
  onStrategyChange,
  minLength = 3,
}) => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h3' component='h3'>
        {suggestedPassword}
      </Typography>
      <Box display='flex' justifyContent='flex-start'>
        <Typography>Length: {length}</Typography>
      </Box>
      <Box display='flex' justifyContent='flex-start'>
        <Slider
          value={length}
          onChange={(_, newValue) => onLengthChange(newValue)}
          step={1}
          min={minLength}
          max={40}
        />
      </Box>
      <Box display='flex' justifyContent='flex-start'>
        {strategyList.map((strategyName) => (
          <FormControlLabel
            label={strategyName}
            control={
              <Checkbox
                checked={activeStratefies.indexOf(strategyName) !== -1}
                onChange={() => onStrategyChange(strategyName)}
                name={'strategy_' + strategyName}
                color='primary'
              />
            }
          />
        ))}
      </Box>
    </Container>
  );
};
