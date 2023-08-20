import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../../public/assets/netscape900.png";
import windowframe1 from "../../public/assets/netscape730.png";
import VideoPlayer from './Videoplayer';
import ReactPlayer from 'react-player';
import best1 from "../../public/assets/best1.png";
import Image from 'next/image';

function VideoBg() {
    const boxStyle = {
        '@media (min-width:600px)':{
            height: '40%'
        }
    }
    return (
        <>
        
            <Box 
            maxWidth='false'
            maxHeight='false'
            sx={{
            marginTop:'3rem',
            marginRight:'auto',
            marginLeft:'auto',
            backgroundImage: 'url(/assets/best1.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            minHeight: '600px',
            height: '65%',
            '@media (max-width:600px)':{
                minHeight: 'auto',
                height: '30%'
            },
            '@media (max-width:1200px)':{
                height: '45%'
            },
            width: '70vw',
            border: 'white solid 1px',
            borderRadius: '.2em',
            zIndex: '2',
            overflow: 'hidden',
            padding:'1rem',
            marginBottom:'3rem',
            
            }}
            >
                {/*<VideoPlayer></VideoPlayer>*/}
            </Box>
            
        </>

        
    )
}

export default VideoBg;