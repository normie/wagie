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
            width: '80%'
        }
    }
    return (
        <>
        
            <Box 
            maxWidth='md'
            sx={{
            top: {
                xs:'35%',
                sm:'30%',
                md:'20%',
            },
            display:'flex',
            justifyContent: 'center',
            paddingLeft: '10rem',
            marginLeft: 'auto',
            position: 'absolute',
            backgroundImage: 'url(/assets/best1.png)',
            backgroundSize: 'cover',
            minHeight: {
                xs:'378px',
                sm:'550px',
                md:'90%',
            },
            maxHeight:'900px',
            maxWidth:'1000px',
            objectFit: 'cover',
            height: {
                xs:'10% !important',
                sm:'50%',
                md: '80%',
            },
            width: {
                xs:'90%',
                sm:'80%',
                md:'100%',
            },
            border: 'black solid 1px',
            borderRadius: '.2em',
            zIndex: '2',
            overflow: 'visible',
            
            }}
            >
                <VideoPlayer></VideoPlayer>
            </Box>
            
        </>

        
    )
}

export default VideoBg;