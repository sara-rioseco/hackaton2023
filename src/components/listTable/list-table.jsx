/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Select, MenuItem } from "@mui/material";
import DateFilter from "../formDate/date-filter";
import { Box, width } from "@mui/system";
import { red, green } from '@mui/material/colors'

export default function ListTable() {
  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ dataapi, setDataapi ] = useState([]);
  const [ applicantsFilteredByDate, setApplicantsFilteredByDate ] = useState([])

  // Nuevo estado para la cadena de búsqueda
  const getAllApplicants = () => {

    fetch(
      "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants?startDate=2023-10-05&endDate=2023-10-30"
    )
      .then((response) => response.json())
      .then((result) => {
        const dataprocess = result.data.map((item) => ({

          "Nro. Documento": item.document,
          "Nombres y Apellidos": item.firstName + " " + item.lastName_m,
          "Postulacion": item.createdDate,
          "IGC de postulación": item.processName,
          "Titulo de la Oferta": item.offerName,
          "Perfil de Oferta": item.processInfo.profileName,
          "Resultado Evaluación": () => {
            return (
              <Box>
                <span>

                  {item.score}%

                </span>
                <Chipy value={item.score}>

                </Chipy>
              </Box>)
          },
          "Estado de Postulacion": item.status,
        }));

        setData(dataprocess);
        const res = dataprocess.sort((a, b) => a.document?.localeCompare(b.document));
        setDataapi(res);
        setApplicantsFilteredByDate(res);
        
      })
      .catch((error) => console.error("error", error));

  }

  useEffect(() => {
    getAllApplicants();
  }, []);

  const columnMaping2 = [
    "Nro. Documento",
    "Nombres y Apellidos",
    "Postulación",
    "IGC de postulación",
    "Titulo de la Oferta",
    "Perfil de Oferta",
    "Resultado Evaluación",
    "Estado de Postulacion"
  ];

  //  filtrar los datos
  const filteredData = (searchData) => {
    if ( searchData === "" ) {
            return data
    }
    return applicantsFilteredByDate.filter((item) => item['Nro. Documento'].toLowerCase().includes(searchData.toLowerCase()));
  }


  const sendNotificationConfirmadoCapa = (applicant) => {
    var raw = {

      recipientPhoneNumber: "+51910107346",
      user: applicant.firstName,
      trainingDate: applicant.processInfo.trainingSchedule.trainingDateStart,
      trainingHour: applicant.processInfo.trainingSchedule.trainingHourEnd,
      trainer: applicant.processInfo.trainer,
      sede: applicant.processInfo.campus.address + '' + applicant.processInfo.campus.name,
    };
    console.log("notification", raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),

    };





    fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/welcomeSin`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("confirmacion capa", result))
      .catch(error => console.log('error', error));
  }

  // Recontacto

  const sendNotificationRecontacto = (applicant) => {


    var raw = {
      recipientPhoneNumber: "+51910107346",
      user: applicant.firstName,
      job: applicant.offerName,
      path: applicant.processInfo.evaluar.url.split("/").pop(),
    };

    console.log("Recontacto 213143", raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),

    };





    fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/reminder`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("REcontacto", result))
      .catch(error => console.log('error', error));

  }

  const sendNotificationNoApto = (applicant) => {


    var raw = {
      recipientPhoneNumber: "+51910107346",
      user: applicant.firstName,

    };

    console.log("Rechazo 213143", raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),

    };

    fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/status`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("rechazo", result))
      .catch(error => console.log('error', error));

  }

  //post estado
  const handlePostState = (applicant) => {
    var raw = { status: applicant.status };
    console.log("raw", raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),

    };



    fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants/update/${applicant.id}/document/${applicant.dni}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("post stado", result))
      .catch(error => console.log('error', error));
  }


  return (
    <div>
      <Grid my={3} container spacing={2}>
        <Grid display='flex' alignItems={1} item xs={7}>
          <DateFilter  setApplicantsFilteredByDate={setApplicantsFilteredByDate} data={data} processList={false}/>
        </Grid>

        <Grid my={1} item xs={5}>
          <TextField
            label="Buscar por Documento"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setApplicantsFilteredByDate(data);
              const res = filteredData(e.target.value);
              setApplicantsFilteredByDate(res);
            }}
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
          {applicantsFilteredByDate.length > 0 && applicantsFilteredByDate.map((item, index) => (
              <TableRow key={index}>
                {Object.keys(item).map((key) => (
                  <TableCell key={key}>
                    {key === "Estado de Postulacion" ? (
                      <Select sx={{ width: 180 }}
                        value={item[key]}
                        variant="outlined"
                        onChange={(e) => {
                          const updatedItem = { ...item, [key]: e.target.value };

                          const applicantdata = dataapi.filter((item) => {

                            return item.document === updatedItem["Nro. Documento"];


                          })

                          const aplicant = {
                            id: applicantdata[0].id,
                            dni: applicantdata[0].document,
                            status: e.target.value
                          }

                          handlePostState(aplicant);
                          getAllApplicants();


                          if (e.target.value === "confirmado a capa") {
                            sendNotificationConfirmadoCapa(applicantdata[0]);
                          } else if (e.target.value === "recontacto") {
                            sendNotificationRecontacto(applicantdata[0]);
                          } else {
                            sendNotificationNoApto(applicantdata[0]);
                          }
                        }}
                      >
                        <MenuItem value="recontacto">Recontacto</MenuItem>
                        <MenuItem value="confirmado a capa">Confirmado a Capa</MenuItem>
                        <MenuItem value="registrado">Registrado</MenuItem>
                        <MenuItem value="no apto">No apto</MenuItem>
                      </Select>
                    ) : (
                      typeof item[key] === "object" ? item[key].value : item[key]
                    )}
                    {typeof item[key] === "function" && item[key]()}
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


function Chipy({ value }) {
  const [estado, setEstado] = useState('')

  function CalcularStatus() {
    if (value >= 90) {
      setEstado('Adecuado')
    }
    else if (value >= 70 && value <= 89) {
      setEstado('Cercano')
    }
    else if (value >= 0 && value <= 69) {
      setEstado('Alejado')
    }
    else if (value === 0 ) {
      setEstado('Pendiente')
    }
  }
  function CalcularColor() {
    if (value >= 90) {
      return '#8fe674db'
    }
    else if (value >= 70 && value <= 89) {
      return  '#f8da7e'
    }
    else if (value >= 0 && value <= 69) {
      return '#fa817d'
    }
    else if (value === 0 ) {
      return '#919eab'
    }
  }
  useEffect(() => {
    CalcularStatus();
  },
  )
  function CalcularLetraColor() {
    if (value >= 90) {
      return '#289407db'
    }
    else if (value >= 70 && value <= 89) {
      return  '#b38702'
    }
    else if (value >= 0 && value <= 69) {
      return '#d71711'
    }
    else if (value === 0 ) {
      return '#312a2a'
    }
  }

  return (
    <Chip sx={{ width: '70%', color: CalcularLetraColor(),
      "& .MuiChip-colorPrimary": {
        backgroundColor: "red",
      },
      "& .MuiChip-ColorPrimary": {
        backgroundColor: CalcularColor(),
      }, bgcolor: CalcularColor(),
    }} value={value} label={estado} />
  );
}
