import * as React from "react";
import { Grid, Box, Container, Paper, Slide } from "@mui/material";
import { keyframes } from "@mui/material";
import Image from 'next/image';

//random images causing hydration error because images on server and client are not the same


function Sectiontwoslide(props) {

    const slideRight = keyframes`
    0% {
        transform: translateX(-50px);
    }
    100% {
        transform: translateX(calc(-1500px * 2 - 50px));
    }
    `;
    const slideLeft = keyframes`
    0% {
        transform: translateX(calc(-1500px * 2 - 50px));
    }
    100% {
        transform: translateX(-50px);
    }
    `;

    let rows = React.useMemo(() => {
        return [
            [randomNumber(importImages()), randomNumber(importImages())],
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
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        position: 'relative',

                    }}
                >
                    {[...Array(3)].map((x, j) =>
                        <Container component="div"
                            key={j}
                            maxWidth="false"
                            sx={{
                                display: 'inline-block',
                                height: "100%",
                                width: "100%",
                                minWidth: "1500px",
                                minHeight: "300px",
                                backgroundImage: `url(${row[j % 2]})`,
                                animation: `${i % 2 == 0 ? slideRight : slideLeft} 40s linear infinite `
                            }} />
                    )}
                </Container>
            )}

        </>
    )
}
function importImages() {
    const images = [];
    for (let x=1; x<8; x++) {
        images.push([`/assets/frescoslide/${x}.png`])
    }
    return images;
}


function randomNumber(array) {
    const randomImage = array[Math.floor(Math.random() * array.length)];
    return randomImage;

}

export default Sectiontwoslide;