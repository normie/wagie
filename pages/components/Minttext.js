import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import windowframe from "../../public/assets/netscape900.png";
import windowframe1 from "../../public/assets/netscape730.png";
import Typography from "@mui/material/Typography";
import Buttonmint from "./Mintbutton.js"

function Textmint() {
    return (
        <>  
            <Container maxWidth ='md'
            sx={{
                display: 'flex',                
                alignItems: 'center',
                flexDirection: 'column',
            }}>        
                <Paper maxWidth='sm'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                    margin:'1rem',
                    width: '50%',
                    maxWidth: '75%',
                    maxHeight: '20%',
                    minWidth: '450px',
                    border: '1px solid black'
                }}>
                    <Typography variant='h3'>About Wagie Corp</Typography>
                </Paper>
                <Container maxWidth ='md'
            sx={{
                display: 'flex',
                
                alignItems: 'center',
                flexDirection: 'row',
            }}> 
            <img
            src='https://s11.gifyu.com/images/S42jC.gif'
            alt='GIF Image'
            />
            
                <Paper maxWidth='md'
                sx={{
                    overflow: 'auto',
                    maxHeight: '40%',
                    maxWidth: '75ch',
                    width: '70%',
                    height: '50%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    textAlign: 'left',
                    padding: '1rem',
                    margin: '1rem',
                    
                }}
                >
                 <Typography
                    fontFamily='tahoma'
                    fontSize='1.1rem'
                    >Wagie Corp is a collection of 4444 NFTs inspired by the realities of wageslavery, utilizing imageboard culture elements and art style. You can secure your free mint on Discord.
                </Typography> 
                </Paper>
                </Container>
                <Buttonmint></Buttonmint>
            </Container>
        </>
    )
}
export default Textmint;