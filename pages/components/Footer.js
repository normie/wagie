import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from '../../public/assets/twitterlogo.svg';
import telegramLogo from '../../public/assets/Telegram_logo.png'
import fresco150 from '../../public/assets/fresco150.png'
import discordLogo from '../../public/assets/discord-mark-black.png'
import openseaLogo from '../../public/assets/opensea-logo.png'
import { Box,Container, Paper, Slide } from "@mui/material";
import { Typography } from '@mui/material';


function Foot(){
    return (
    <>
        <Container
        sx={{
            width:'100%',
            height:'100%',
            padding: '1rem',
        }}
        >
            <Typography color="white">
                Copyleft © Wagie Corporation 
            </Typography>
        </Container>
    </>
    )
}

export default Foot;