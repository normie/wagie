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
                    <Typography variant='h3'>Mint Info</Typography>
                </Paper>
                <Paper maxWidth='md'
                sx={{
                    overflow: 'hidden',
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
                <Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas risus vel justo tempor lacinia. 
                Phasellus vitae ex in urna vestibulum tincidunt. Morbi eget dolor eu tellus porttitor mollis. Sed est velit, dignissim sit amet lobortis non, molestie sed augue. 
                Quisque eget dui quis mauris efficitur consectetur. Morbi feugiat purus id mi lobortis, sed luctus augue dignissim. Maecenas nec est non lacus ultricies facilisis id vitae nibh. 
                Curabitur velit quam, dapibus ut leo semper, convallis placerat nisl. 
                Etiam neque nibh, hendrerit ut risus sed, consectetur luctus nibh. Sed nec orci egestas, maximus orci vitae, luctus lacus. Nulla dignissim purus et finibus finibus. 
                Suspendisse lacinia varius nulla id bibendum. Sed non suscipit risus.
                </Typography> 
                </Paper>
                <Buttonmint></Buttonmint>
            </Container>
        </>
    )
}
export default Textmint;