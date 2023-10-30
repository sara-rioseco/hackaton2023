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

export default function ProcessListTable() {
  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState(""); // Nuevo estado para la cadena de búsqueda
  const [ dataapi, setDataapi ] = useState([]);
  const [ dataFilteredByDate, setDataFilteredByDate ] = useState([])

   const getAllProcesses = () => {
    fetch(
      "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/processes?startDate=2023-11-03&endDate=2023-11-03"
    )
      .then((response) => response.json())
      .then((result) => {
        const dataprocess = result.data.map((item) => ({
          IGC: item.processName,
          Cuenta: item.account,
          Servicio: item.service,
          "Fecha Inicio" : item.startingDate.toString(),
          "Fecha Fin": item.closingDate.toString(),
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

        setData(dataprocess);
        const res = dataprocess.sort((a, b) => a.document?.localeCompare(b.document));
        setDataapi(res);
        setDataFilteredByDate(res)
        
      })
      .catch((error) => console.error("error", error));
  }

  useEffect(() => {
    getAllProcesses();
  }, []);

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
  const filteredData = (searchData) => {
    console.log(searchData)
    console.log(dataFilteredByDate)
    if ( searchData === "" ) {
      console.log('hola')
            return data
    }
       
    return dataFilteredByDate.filter((item) => {
      if (item['IGC'].toLowerCase().includes(searchData.toLowerCase())) {
        return item['IGC'].toLowerCase().includes(searchData.toLowerCase())
      }
      if (item['Cuenta'].toLowerCase().includes(searchData.toLowerCase())) {
        return item['Cuenta'].toLowerCase().includes(searchData.toLowerCase())
      }
      if (item['Servicio'].toLowerCase().includes(searchData.toLowerCase())) {
        return item['Servicio'].toLowerCase().includes(searchData.toLowerCase())
      }
      if (item['Estado'].toLowerCase().includes(searchData.toLowerCase())) {
        return item['Estado'].toLowerCase().includes(searchData.toLowerCase())
      }     
    });
  
  }


  return (
    <div>
      <Grid container my={5} spacing={2}>
        <Grid item xs={6}>{}
          <DateFilter setDataFilteredByDate={setDataFilteredByDate} data={data} processList={true}/>
        </Grid>

          <Grid my={1} item xs={6}>
            <TextField 
              label="Buscar por IGC, Cuenta, Servicio o Estado"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setDataFilteredByDate(data);
                const res = filteredData(e.target.value);
                setDataFilteredByDate(res);
              }}
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
          {dataFilteredByDate.length > 0 && dataFilteredByDate.map((item, index) => (
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
