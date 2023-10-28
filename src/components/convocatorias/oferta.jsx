import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import Typography from "@mui/material/Typography";
import CustomCard from "./card-oferta";
import { styled } from "@mui/system";
import './oferta.css' 

const OfferSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "720px",
  borderRadius: "20px",
  borderColor: "background: #919EAB52",
  border: "5px",

});

export default function OfertaGenerate( { data }) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
      data ? setResponse(JSON.parse(data)) : console.log('no hay data')
  }, [data]);

  return (
      
        <OfferSection >
          {!response && 
            <Typography variant="body2" color="textSecondary">
              Loading...
            </Typography>
          } {
            !!response &&
            <CustomCard data={response}></CustomCard>
          }
        </OfferSection>
  );
}


OfertaGenerate.propTypes = {
  data: PropTypes.object
}