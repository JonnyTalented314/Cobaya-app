import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

import FunctionsDropdown from './FunctionsDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import HeaderDropdownFooter from "./HeaderDropdownFooter";

export default function HeaderDropdown({ menu, languages, open, onClose }) {
  return (
    <HeaderDropdownWrapper
      open={open}
    >
      <FunctionsDropdown languages={languages} open={menu === 'Functions'} onClose={onClose} />
      <SolutionsDropdown languages={languages} open={menu === 'Solutions'} onClose={onClose} />
      {open && (
        <HeaderDropdownFooter menu={menu} languages={languages} />
      )}
      
    </HeaderDropdownWrapper>
  )
}

const HeaderDropdownWrapper = styled(Box)(({ theme, open }) => ({
  width: '100%',
  position: 'fixed',
  top: '100px',
  left: 0,
  zIndex: '100',
  borderTop: open ? '1px solid #DDEAFB' : 'none',
  insetInlineStart: '50%',
  inlineSize: '100%',
  opacity: open ? 1 : 0,
  transform: 'translateX(-50%)',
  transition: 'opacity 0.4s 0.3s',
  background: '#fff',
  boxShadow: '1px 50px 45px rgba(0,0,0,.15)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10px',
    left: '50%',
    // backgroundImage: 'linear-gradient(to bottom, rgba(39,33,74,.1), rgba(39,33,74,0))',
    inlineSize: open ? '100%' : '0',
    blockSize: '4rem',
    zIndex: '-1',
    opacity: open ? 1 : 0,
    transformOrigin: 'center top',
    transform: 'translate3d(-50%,calc((649 * 1px) - 100px),0)',
    transition: 'transform 0.3s 0.3s, opacity 0.5s 0.3s, inlineSize 0.6s 0.3s',
    willChange: 'transform',
  }
}));