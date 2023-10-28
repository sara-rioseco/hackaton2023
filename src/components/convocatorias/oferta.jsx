/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomCard from "./card-oferta";
import { styled } from "@mui/system";
import { RowingOutlined } from "@mui/icons-material";
import './oferta.css' 


const OfferSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "720px",
  borderRadius: "20px",
  borderColor: "background: #919EAB52",
  border: "5px",

});

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

        const responseia = await query({ question: `Este es el json de la oferta ${data}` });
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
      setResponse(JSON.parse(result));
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
      
        <OfferSection >

          {responses ? (
            <CustomCard data={responses}></CustomCard>
          ) : (
            <Typography variant="body2" color="textSecondary">
              Loading...
            </Typography>
          )}
        </OfferSection>
  );
}
