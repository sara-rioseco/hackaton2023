/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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

export default function OfertaGenerate( { data, clickOffer }) {
  const [response, setResponse] = useState(null);
  useEffect(() => {
      data ? setResponse(data) : console.log('no hay data')
  }, [data]);

  return ( 
        <OfferSection >
          {(clickOffer && !response) && 
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>} 
          {(clickOffer && response) && <CustomCard data={response}></CustomCard>}
        </OfferSection>
  );
}


OfertaGenerate.propTypes = {
  data: PropTypes.object,
  clickOffer: PropTypes.bool,
  setClickOffer: PropTypes.func
}