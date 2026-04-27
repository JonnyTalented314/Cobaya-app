import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function PhoneInput({ status, inputProps, ...props }) {
  return (
    <>
    <ReactPhoneInput
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: false,
        ...inputProps
      }}
      country={'fr'}
      containerStyle={{
        borderRadius: '20px',
      }}
      inputStyle={{
        width: '100%',
        height: '50px',
        borderRadius: '20px',
        border: status ? '1px solid #C63535;' : 'none',
        color: '#284C88'
      }}
      buttonStyle={{
        border: 'none',
        borderRadius: '20px 0 0 20px',
        background: '#fff',
      }}
      {...props}
    />
    </>
  )
}