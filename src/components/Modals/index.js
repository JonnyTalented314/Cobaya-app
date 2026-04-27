// import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import { closeModal } from "../../store";

import ContactSalesModal from "./ContactSalesModal";
import ContactPeaceKeepersModal from "./ContactPeacekeeperModal";
import EmailConfirmModal from "./EmailConfirmModal";

import { Box } from "@mui/material";

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(66, 133, 244, 0.07);
  mix-blend-mode: normal;
  backdrop-filter: blur(7.5px);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

const ModalContainer = styled('div')(({ theme }) => ({
  background: 'transparent',

  [theme.breakpoints.down('sm')]: {
    maxHeight: '500px',
    borderRadius: '20px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('sm')]: {
    height: 'auto',
  }
}))

// const useOutsideAlerter = (ref) => {
//   const dispatch = useDispatch();
//   const handleClickOutside = (e) => {
//     if (ref.current && !ref.current.contains(e.target)) {
//       dispatch(closeModal());
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });
// };

const Modal = () => {
  const dispatch = useDispatch();
  // const containerRef = useRef(null);
  const languages = useSelector((state) => state.languages);
  const openModal = useSelector((state) => state.openModal);
  const currentModal = useSelector((state) => state.currentModal);
  const modalProps = useSelector((state) => state.modalProps);

  // useOutsideAlerter(containerRef);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const renderModal = () => {
    switch (currentModal) {
      case 'CONTACT_SALES':
        return <ContactSalesModal closeModal={handleCloseModal} data={modalProps} languages={languages} />;
      case 'CONTACT_PEACEKEEPERS':
        return <ContactPeaceKeepersModal closeModal={handleCloseModal} data={modalProps} languages={languages} />;
      case 'EMAIL_CONFIRM':
        return <EmailConfirmModal closeModal={handleCloseModal} data={modalProps} languages={languages} />;
      default:
        return null;
    }
  };

  if (!openModal) {
    return null;
  }

  return (
    <Wrapper>
      <Box position='relative' padding={{ xs: '20px', sm: '30px' }} width={{ xs: '100%', sm: 'auto' }}>
        <ModalContainer>{renderModal()}</ModalContainer>
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'absolute',
            top: 0,
            right: 0,
            cursor: 'pointer'
          }}
          onClick={handleCloseModal}
        >
          <Box sx={{
            background: 'white',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.dark',
            transition: 'background 0.1s 0.1s, color 0.1s 0.1s',
            
            '&:hover': {
              background: '#284C88',
              color: 'white',
            }
          }}>
            <CloseIcon sx={{
              width: '22px',
              height: '22px'
            }} />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Modal;
