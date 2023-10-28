/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Calls() {
  const [datap, setData] = useState(null);

  useEffect(() => {
    fetch("https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/offers")
      .then((response) => response.json())
      .then((result) => {
/*         console.log("resultado formato json", result.data[0]); */
        
        const dataprocess = result.data[0]
       setData(result.data);
      })
      .catch((error) => console.error("error", error));
  }, []);
/*   console.log("dataprocess", datap); */

 const vacancy = {
   "nombre_vacante": "fonted Developer",
   "turno": "mañana",
   "lugar": "Bogotá",
   "modalidad": "Presencial"
 };
 
/*  const vacancyJSON = JSON.stringify(vacancy);
 console.log(vacancyJSON); */



  useEffect(() => {
    async function query(vacantes) {
      const response = await fetch(
        "https://konecta-2.onrender.com/api/v1/prediction/d0c5306d-38d2-44e5-ad71-4e9b1d4e6963",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(vacantes),
        }
      );
      const result = await response.json();
      setData(result);
    }

/*     query({ question: vacantes }).then((response) => {
       console.log("respuest de flowise",response); 
    }); */
  }, []); 

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          documento
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          aqui se muestra el requrimiento
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">compartir</Button>
      </CardActions>
    </Card>
  );
}
