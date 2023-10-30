/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OfferCard from '../../components/cards/offertcards';
import header from '/src/assets/img/header.png';
import { Box, Stack } from '@mui/system';
import { Chip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { pink } from '@mui/material/colors'

import initializeChatbot from "../../utils/chat.js";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath: '/src/assets/img/Inicial.png',
        name: "unete a nosotros",
        title: "Encuentra el puesto que mejor se adapte a ti.",
        description: "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
    },
    {
        imgPath: '/src/assets/img/Inicial.png',
        name: "unete a nosotros",
        title: "Encuentra el puesto que mejor se adapte a ti.",
        description: "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
    },
];

function Header() {
    const imageProps = {
        src: header, 
        alt: 'Encabezado', 
        className: 'header-image',
        margin: '0', 
        width: '100%',
        height: '100%' 
    };

    return (
        <div className="header">
        <img {...imageProps} />
        </div>
    );
}



function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step)
    };

//lamando al chat
      useEffect(() => {
        initializeChatbot();
      }, []);

    return (

        <div>
            
            <Header/>

          
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 350,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    bgcolor: '#002855',
                                }}
                                src={step.imgPath}
                                alt={step.description}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <Box display='flex' justifyContent={'center'} my={4}>
                <Typography gutterBottom sx={{
                    color: '#002855',
                    fontWeight: 700
                }} variant="h4" >
                    Nuestras
                </Typography>
                <Typography gutterBottom variant="h4" sx={{
                    color: '#002855', mx: 1
                }}>
                    convocatorias
                </Typography>
            </Box>

        <Box margin={'50px'}>
            <Stack direction="row" spacing={1} my={1}>
                <Chip id= 'doritos' label="Todos" onClick={()=>{console.log('prueba:')}} sx={{ fontWeight: 700, borderColor: pink[500], color:pink[500] }} variant="outlined" />
                <Chip id= 'doritos' label="Atención al cliente" onClick={()=>{console.log('prueba:')}} sx={{ fontWeight: 700, borderColor: pink[500], color:pink[500] }} variant="outlined" />
                <Chip id= 'doritos' label="Ventas" onClick={()=>{console.log('prueba:')}} sx={{ fontWeight: 700, borderColor: pink[500], color:pink[500] }} variant="outlined" />
                <Chip id= 'doritos' label="Crosseling" onClick={()=>{console.log('prueba:')}} sx={{ fontWeight: 700, borderColor: pink[500], color:pink[500] }} variant="outlined" />
                <Chip id= 'doritos' label="Social Media" onClick={()=>{console.log('prueba:')}} sx={{ fontWeight: 700, borderColor: pink[500], color:pink[500] }} variant="outlined" />
                </Stack>
        </Box>

            <OfferCarousel />
        </div>
    );
}

const OfferCarousel = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Función para obtener datos de la API utilizando fetch
        const fetchData = async () => {
            try {
                const response = await fetch('https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers');
                const data = await response.json();
                setOffers(data.data); // Guarda los datos de la API en el estado
                console.log('data:', data.data);
            } catch (error) {
                console.error('Error al obtener datos de la API: ', error);
            }
        };

        fetchData();
    }, []); // El segundo argumento del useEffect ([]) asegura que se ejecute solo una vez al montar el componente.

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            {offers.map(offer => (
                <OfferCard key={offer.id} data={offer} />
            ))}
        </div>
    );
};

export default
    SwipeableTextMobileStepper;