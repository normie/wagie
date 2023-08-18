import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

function Buttonmint() {
    return (
        <>
            <Button
            sx ={{
                marginTop: '1rem',
                padding:'1rem',
                display: 'flex',
                width: '90%',
                height: '30%',
                border: '1px solid black'
                
            }}>
                <Typography fontSize='4rem'>Mint</Typography>
            </Button>
        </>
    )
}

export default Buttonmint;