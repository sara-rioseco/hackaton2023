import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OfertaGenerate() {
  const [data, setData] = useState(null);
  const [responses, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/processes?startDate=2023-10-03&endDate=2023-11-03"
        );
        const result = await response.json();
        const data = result.data[0];

        // Enviar los datos obtenidos
        console.log("data", data);

        const responseia = await query({ question: `Este es el json de la oferta ${data}` })
        console.log("resposeia", responseia);

      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  async function query(data) {
    try {
      const response = await fetch(
        "https://konecta-2.onrender.com/api/v1/prediction/d0c5306d-38d2-44e5-ad71-4e9b1d4e6963",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      console.log("resultado que espero", JSON.parse(result));
      setResponse(JSON.parse(result)); // Actualiza el estado con la respuesta

    } catch (error) {
      console.log("error", error);
    }

  }


  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Card sx={{ maxWidth: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Generando oferta
          </Typography>
          {responses ? (

            <div>
              <Typography variant="h6" gutterBottom>
                TÍTULO: {responses.title}
              </Typography>
              <Typography variant="body1">
                DESCRIPCIÓN: {responses.description}
              </Typography>
              <Typography variant="body1">
                CURSOS:
                {Array.isArray(responses.courses) && responses.courses.length > 0 ? (
                  <ul>
                    {responses.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay cursos disponibles.</p>
                )}
              </Typography>
              {/* ... other code ... */}
            </div>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No hay respuesta bb.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}