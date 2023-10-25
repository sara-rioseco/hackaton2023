import { useState, useEffect } from "react";
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

export default function ListTable() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(""); // Nuevo estado para la cadena de búsqueda

  useEffect(() => {
    fetch(
      "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants?startDate=2023-10-05&endDate=2023-10-05"
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.error("error", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  data.sort((a, b) => a.document.localeCompare(b.document));

  const columnMapping = {
    document: "N° de Documento",
    firstName: "Nombre",
    createdDate: "Postulación",
    offerName: "Titulo de Oferta",
  };

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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DateFilter />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Buscar por Documento"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%" }}
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
              {Object.keys(data[0]).map((key) => (
                <TableCell
                  key={key}
                  style={{ background: "#DFE3E8", fontWeight: "bold" }}
                >
                  {columnMapping[key]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                {Object.values(item).map((value, valueIndex) => (
                  <TableCell key={valueIndex}>
                    {typeof value === "object" ? value.value : value}
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
