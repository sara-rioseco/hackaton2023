/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import OfferCard from "../../components/cards/offertcards";
import header from "/src/assets/img/header.png";
import { Box, Stack } from "@mui/system";
import { Chip, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { autoPlay } from "react-swipeable-views-utils";
import { pink } from "@mui/material/colors";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import initializeChatbot from "../../utils/chat.js";


const images = [
  {
    imgPath: "/src/assets/img/Inicial.png",
    name: "unete a nosotros",
    title: "Encuentra el puesto que mejor se adapte a ti.",
    description:
      "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
  },
  {
    imgPath: "/src/assets/img/Inicial.png",
    name: "unete a nosotros",
    title: "Encuentra el puesto que mejor se adapte a ti.",
    description:
      "Postula fácilmente a la posición que más te guste. Tenemos posiciones en: Atención al Cliente, Ventas, Crosseling, Back Office y Redes Sociales",
  },
];

function Header() {
  const imageProps = {
    src: header,
    alt: "Encabezado",
    className: "header-image",
    margin: "0",
    width: "100%",
    height: "100%",
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
    setActiveStep(step);
  };

  //lamando al chat
  useEffect(() => {
    initializeChatbot();
  }, []);
  const styles = {
    container: {
      backgroundImage: 'url("https://raw.githubusercontent.com/sara-rioseco/hackaton2023/main/src/assets/img/Inicial.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "600px",
      width: '100vw',
      margin:"0"
    },
  };
  return (
    <div>
      <Header />
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" disableGutters>
        <div style={styles.container}></div>
      </Container>
    </React.Fragment>
        <Box display="flex" justifyContent={"center"} my={4}>
        <Typography
          gutterBottom
          sx={{
            color: "#002855",
            fontWeight: 700,
          }}
          variant="h4"
        >
          Nuestras
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            color: "#002855",
            mx: 1,
          }}
        >
          convocatorias
        </Typography>
      </Box>

      <Box margin={"50px"}>
        <Stack direction="row" spacing={1} my={1}>
          <Chip
            id="doritos"
            label="Todos"
            onClick={() => {
              console.log("prueba:");
            }}
            sx={{ fontWeight: 700, borderColor: pink[500], color: pink[500] }}
            variant="outlined"
          />
          <Chip
            id="doritos"
            label="Atención al cliente"
            onClick={() => {
              console.log("prueba:");
            }}
            sx={{ fontWeight: 700, borderColor: pink[500], color: pink[500] }}
            variant="outlined"
          />
          <Chip
            id="doritos"
            label="Ventas"
            onClick={() => {
              console.log("prueba:");
            }}
            sx={{ fontWeight: 700, borderColor: pink[500], color: pink[500] }}
            variant="outlined"
          />
          <Chip
            id="doritos"
            label="Crosseling"
            onClick={() => {
              console.log("prueba:");
            }}
            sx={{ fontWeight: 700, borderColor: pink[500], color: pink[500] }}
            variant="outlined"
          />
          <Chip
            id="doritos"
            label="Social Media"
            onClick={() => {
              console.log("prueba:");
            }}
            sx={{ fontWeight: 700, borderColor: pink[500], color: pink[500] }}
            variant="outlined"
          />
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
        const response = await fetch(
          "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers"
        );
        const data = await response.json();
        setOffers(data.data); // Guarda los datos de la API en el estado
        console.log("data:", data.data);
      } catch (error) {
        console.error("Error al obtener datos de la API: ", error);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect ([]) asegura que se ejecute solo una vez al montar el componente.

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} data={offer} />
      ))}
    </div>
  );
};

export default SwipeableTextMobileStepper;
