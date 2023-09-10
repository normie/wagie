import * as React from "react";
import { Grid, Box, Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import Image from 'next/image';


function Sectiontwoslide(props) {

    const slideRight = keyframes`
    0% {
        transform: translateX(0);
    }
    
    100% {
        transform: translateX(-200%);
    }
    `;
    const slideLeft = keyframes`
    
    0% {
            transform: translateX(-200%);
        }
        
        100% {
            transform: translateX(-0%);
        }
      }
    `;

    let rows = React.useMemo(() => {
        return [
            [randomNumber(importImages()), randomNumber(importImages())],
            [randomNumber(importImages()), randomNumber(importImages())],
            [randomNumber(importImages()), randomNumber(importImages())],
        ]
    }, [importImages()]);

    return (
        <>
            {rows.map((row, i) =>
                <Container component="div" maxWidth="false"
                    key={i}
                    sx={{
                        
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        overflow: 'hidden',

                    }}
                >
                    {[...Array(4)].map((x, j) =>
                        <Container component="div"
                            key={j}
                            maxWidth="false"
                            sx={{
                                overflow: 'auto',
                                paddingRight: '20px',
                                display: 'inline-block',
                                height: "100%",
                                minWidth: "1735px",
                                maxWidth: "1750px",
                                minHeight: "300px",
                                paddingRight: "10px",
                                backgroundImage: `url(${row[j % 2]})`,
                                backgroundSize: 'contain',
                                animation: `${i % 2 == 0 ? slideRight : slideLeft} 10s linear infinite `
                            }} />
                    )}
                </Container>
            )}

        </>
    )
}
function importImages() {
    const images = [];
    for (let x=1; x<9; x++) {
        images.push([`/assets/frescoslide/${x}.png`])
    }
    return images;
}


function randomNumber(array) {
    let randomImage = array[Math.floor(Math.random() * array.length)];

    
    return randomImage;

}

export default Sectiontwoslide;