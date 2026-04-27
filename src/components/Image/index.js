import { Box } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ImageBox({ src, alt, ...props}) {
  return (
    <Box {...props}>
      <LazyLoadImage 
        src={src} 
        alt={alt}
        loading='lazy'
        width='100%'
        height='100%'
        style={{
          width: '100%',
          height: '100%'
        }}
        // effect="blur"
      />
    </Box>
  )
}