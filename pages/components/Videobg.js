import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../../public/assets/netscape900.png";
import windowframe1 from "../../public/assets/netscape730.png";
import VideoPlayer from './Videoplayer';
import best1 from "../../public/assets/best1.png";
import Image from 'next/image';
import Player from 'react-player';



function VideoBg() {
    const videoUrl = 'a'
    const boxStyle = {
        '@media (min-width:600px)':{
            height: '40%'
        }
    }
    return (
        <>
        
            <div className="wrapper-container">
                <div className="background-container">
                </div>
                <VideoPlayer></VideoPlayer>
            </div>
            
        </>

        
    )
}

export default VideoBg;

/*
<iframe src={videoUrl} 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen >
</iframe>
*/

/*<Box 
            maxWidth='false'
            maxHeight='false'
            sx={{
            padding:'3rem',
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
            zIndex: '20',
            overflow: 'hidden',
            marginBottom:'3rem',
            
            }}
            >
            </Box>*/