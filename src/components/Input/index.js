import { forwardRef } from 'react'
import { Typography, TextField } from "@mui/material";
import styled from "styled-components";

const CustomInput = forwardRef(({
  label,
  id,
  height,
  // color,
  // border,
  // borderRadius,
  // fontSize,
  message,
  status,
  sx,
  inputStyles,
  ...props
}, ref) => {
  return (
    <InputWrapper height={height}>
      {label && <Label htmlFor={id}>{label}</Label>}
      {/* <Input
        ref={ref}
        id={id}
        height={height}
        color={color}
        border={border}
        borderRadius={borderRadius}
        fontSize={fontSize}
        status={status}
        {...props}
      /> */}
      <TextField
        {...props}
        InputProps={{
          style: inputStyles
        }}
        sx={{
          ...sx,
          border: status ? '1px solid #C63535;' : sx?.border
        }}
        label={''}
      />
      {message && (
        <Typography>{message}</Typography>
      )}
    </InputWrapper>
  )
})

export default CustomInput

const InputWrapper = styled.div`
  width: 100%;
  display: inline-flex;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiOutlinedInput-input {
    height: ${({ height }) => height + 'px' };
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Label = styled(Typography)`
  font-weight: 400;
  font-size: 16px !important;
  line-height: 16px;
  color: #fff;
  margin-bottom: 4px;
`

// const Input = styled.input`
//   background: #FFFFFF;
//   font-weight: 400;
//   line-height: 16px;
//   width: 100%;
//   padding: 0px 20px;
//   border:  ${({ border, status }) => status ? '1px solid #C63535;' : border };
//   border-radius:  ${({ borderRadius }) => borderRadius + 'px' };
//   height: ${({ height }) => height + 'px' };
//   font-size: ${({ fontSize }) => fontSize + 'px' };
//   color: ${({ color }) => color };

//   &:focus {
//     outline: none;
//   }

//   &::placeholder {
//     color: ${({ placeholderColor, color }) => placeholderColor ? placeholderColor : color };
//     font-size: ${({ fontSize }) => fontSize + 'px' };
//     opacity: 1;
//   }
// `;