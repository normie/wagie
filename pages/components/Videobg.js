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
            position:'relative',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:'3rem',
            marginRight:'auto',
            marginLeft:'auto',
            backgroundImage: 'url(/assets/best1.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            minHeight: '600px',
            height: '65%',
            '@media (max-width:600px)':{
                minHeight: 'auto',
                height: '35%',
                width: '100vw',
            },
            '@media (max-width:900px)':{
                
            },
            '@media (max-width:1200px)':{
                height: '45%'
            },
            width: '70vw',
            border: 'white solid 1px',
            borderRadius: '.2em',
            zIndex: '5',
            overflow: 'hidden',
            marginBottom:'3rem',
            
            }}
            >
                <VideoPlayer></VideoPlayer>
            </Box>
            
        </>

        
    )
}

export default VideoBg;