import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import Typography from "@mui/material/Typography";
import Buttonmint from "./Mintbutton.js"

function Textmint() {
    return (
        <>  
            <Container
            sx={{
                display: 'flex',                
                alignItems: 'center',
                flexDirection: 'column',
            }}>        
                <Paper
                sx={{
                    
                    justifyContent: 'center',
                    alignItems: 'center',                    
                    margin:'1rem',
                    width: '50%',
                    maxWidth: '75%',
                    maxHeight: '20%',
                    minWidth: '400px',
                    border: '1px solid black'
                }}>
                    <Typography variant='h3'>About Wagie Corp</Typography>
                </Paper>
                <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}> 
            <img
            src='https://s11.gifyu.com/images/S42jC.gif'
            alt='GIF Image'
            />
            <Container
            sx={{
                display: 'flex',
                width: '50%',                
                alignItems: 'center',
                flexDirection: 'column',
                '@media (max-width:599px)':{
                    width: '100%',
                },
            }}>    
                <Box
                sx={{
                    border: '1px solid black',
                    marginTop: '1rem',
                    
                }}>
                <Typography
                    fontFamily='tahoma'
                    fontSize='1.1rem'
                    >Wagie Corp is a collection of 4444 NFTs inspired by the realities of wageslavery, utilizing imageboard culture elements and art style. Get your free mint on Discord!
                </Typography> 
                </Box>
                <Box
                sx={{
                    border: '1px solid black',
                    marginTop: '1rem',
                    padding: '0 5px 0 5px',
                    
            
                }}>
                <Typography
                    fontFamily='tahoma'
                    fontSize='1rem'
                    ><b>Official Links</b>: <a href='https://discord.gg/6P9ZgJsHfS'>Discord</a>, <a href='https://twitter.com/WagieCorp'>Twitter</a>, <a href='https://t.me/wagiecorp'>Telegram</a>, <a href='https://www.scatter.art/wagie-corp?tab=mint'>Scatter</a>, <a href='https://opensea.io'>OpenSea</a>, <a href='https://blur.io'>Blur</a>, <a href='https://etherscan.io/address/0x6CA0Bd86F353CF06EDA39aAB4a192c1b888fDBbD'>Contract</a>. 
                </Typography> 
                </Box>
                </Container>

                </Container>
                <Buttonmint></Buttonmint>
            </Container>
        </>
    )
}
export default Textmint;