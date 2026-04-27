import { Box } from "@mui/material";

import IconChatImg from '../../assets/images/header/icon-chat.svg'
import ImageBox from "../Image";

export default function IconChat({ width, padding = '5px', bgColor = '#12274C' }) {
  return (
    <Box sx={{
      background: bgColor,
      border: '1px solid #3F557B',
      borderRadius: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: padding
    }}>
      <ImageBox src={IconChatImg} width={width} alt='icon-chat' />
    </Box>
  )
}