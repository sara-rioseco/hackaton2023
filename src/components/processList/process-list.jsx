/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import DateFilter from "../../components/formDate/date-filter";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Box, Stack } from "@mui/system";
import { red, green } from '@mui/material/colors'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:'100%',
  borderRadius: 5,
}));

// eslint-disable-next-line react/prop-types
function CustomizedProgressBars({value}) {
  return (
      <BorderLinearProgress sx={{ "& .MuiLinearProgress-colorPrimary": {
        backgroundColor: "red",
    },
    "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: value>90 ? green[700] : red[800]
        }, bgcolor: value>90 ? green[200] : red[200] }} variant="determinate" value={value} />
  );
}

export default function ListTable() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(""); // Nuevo estado para la cadena de búsqueda

  useEffect(() => {
    fetch(
      "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/processes?startDate=2023-11-03&endDate=2023-11-03"
    )
      .then((response) => response.json())
      .then((result) => {
/*         console.log("result dat[0]", Object.keys(result.data[0])); */
        const dataprocess = result.data.map((item) => ({
          IGC: item.processName,
          Cuenta: item.account,
          Servicio: item.service,
          "Fecha Inicio": item.startingDate,
          "Feha Fin": item.closingDate,
          "Nro. Postulante": item.applicantsNumber,
          "Nro. Reductor": item.reducerNumber,
          "Avance de Aptos": () => {
            return (
              <Box sx={{ width: 150 }} display='flex' alignItems={"center"} gap={1}>
              <span>
              
              {item.suitables}/
              {item.applicantsNumber+item.reducerNumber}
              
              </span>
              <CustomizedProgressBars value={(item.suitables/
              (item.applicantsNumber+item.reducerNumber))*100}>
              </CustomizedProgressBars>
              
              {Math.round((item.suitables/
              (item.applicantsNumber+item.reducerNumber))*100)}%
              </Box>
            )
          },
          Estado: item.status,
        }));

  /*       console.log("dataprocess", dataprocess); */
        setData(dataprocess);
      })
      .catch((error) => console.error("error", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data) {
    data.sort((a, b) => a.document?.localeCompare(b.document));
  }

  

  const columnMaping2 = [
    "IGC",
    "Cuenta",
    "Servicio",
    "Fecha Inicio",
    "Feha Fin",
    "Nro. Postulante",
    "Nro. Reductor",
    "Avance de Aptos",
    "Estado",
  ];

  //  filtrar los datos
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) => {
      if (typeof value === "object") {
        if (typeof value.value === "string") {
          return value.value.toLowerCase().includes(search.toLowerCase());
        }
      } else if (typeof value === "string") {
        return value.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });
  });

  return (
    <div>
      <Grid container my={5} spacing={2}>
        <Grid item xs={6}>
          <DateFilter />
        </Grid>

          <Grid my={1} item xs={6}>
            <TextField 
              label="Buscar por Documento"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%"}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start" aria-label="search">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columnMaping2.map((key) => {
/*                 console.log("columnMapping", data); */
                return (
                  <TableCell
                    key={key}
                    style={{ background: "#DFE3E8", fontWeight: "bold" }}
                  >
                    {key}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                {Object.values(item).map((value, valueIndex) => (
                  <TableCell width={200} key={valueIndex}>
                    {typeof value === "object" ? value.value : value}
                    {typeof value === "function" && value()}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
