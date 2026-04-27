import { forwardRef } from 'react'
import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomSelect = forwardRef(({
  label,
  placeholder,
  value = '',
  height = 'auto',
  sx,
  options,
  languages,
  ...props
}, ref) => {

  return (
    <Box sx={{
      minWidth: 120,

      '.MuiOutlinedInput-notchedOutline': {
        border: 'none'
      },
      '.MuiOutlinedInput-input': {
        height: height + 'px',
        paddingTop: 0,
        paddingBottom: 0,
      },
      '.MuiSelect-select, #custom-select': {
        height: height + 'px !important',
        display: 'flex',
        alignItems: 'center',
        appearance: 'none',
      },
      '.MuiInputBase-root': {
        marginTop: 0,
      },
      '.MuiSvgIcon-root': {
        // display: 'none'
      }
    }}>
      <FormControl fullWidth>
        <NativeSelect
          id="custom-select"
          label=""
          sx={{
            height: height + 'px !important',
            px: '10px',
            ...sx
          }}
          {...props}
          IconComponent={() => 
            <KeyboardArrowDownIcon 
              sx={{
                width: '20px',
                height: '20px',
                position: 'absolute',
                right: '20px',
                pointerEvents: 'none'
              }}
            />
          }
          disableUnderline
        >
          <option value='' selected disabled>{placeholder}</option>
          {options.map((option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          )))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
})

export default CustomSelect