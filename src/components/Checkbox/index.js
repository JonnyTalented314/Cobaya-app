import * as React from 'react';
import { BsSquareFill, BsSquare } from 'react-icons/bs';
import { FormControlLabel, Typography, Checkbox, Box } from '@mui/material';

export default function IconCheckbox({ label, sx, size, status, ...props }) {
  const labelProps = { inputProps: { 'aria-label': 'checkbox' } };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <FormControlLabel
        label={
          <Typography sx={sx} fontSize={size}>{label}</Typography>
        }
        control={
          <Checkbox
            {...labelProps}
            icon={<BsSquare style={sx} />} 
            checkedIcon={<BsSquareFill style={sx} />}
            sx={sx}
            {...props}
          />
        }
      />
      {status && (
        <Typography sx={{
          fontSize: size,
          color: '#C63535'
        }}>
          Required this field
        </Typography>
      )}
    </Box>
  );
}