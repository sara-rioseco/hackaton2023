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
  Button,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { Select, MenuItem } from "@mui/material";
          
          
import DateFilter from "../../components/formDate/date-filter";

export default function ListTable() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [dataapi, setDataapi] = useState(null);
   // Nuevo estado para la cadena de búsqueda
   const getAllApplicants = () => {

    fetch(
      "https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants?startDate=2023-10-05&endDate=2023-10-05"
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("result dat[0]", result);

        setDataapi(result.data);

        const dataprocess = result.data.map((item) => ({
        
          "Nro. Documento": item.document,
          "Nombres y Apellidos": item.firstName + " " + item.lastName_m,

          Postulación: item.createdDate,

          "IGC de postulación": item.processName,
          "Titulo de la Oferta": item.offerName,
          "Perfil de Oferta": item.profileName,
          "Resultado Evaluación": item.suitables,
          "Estado de Postulacion": item.status,
        }));

        
        setData(dataprocess);
      })
      .catch((error) => console.log("error", error));
     
   }

  useEffect(() => {
    getAllApplicants();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data) {
    data.sort((a, b) => a.document?.localeCompare(b.document));
  }

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


  const sendNotificationConfirmadoCapa = (applicant) => {
    var raw = {

        recipientPhoneNumber: "+51910107346",
        user: applicant.firstName,        
        trainingDate: applicant.processInfo.trainingSchedule.trainingDateStart,
        trainingHour: applicant.processInfo.trainingSchedule.trainingHourEnd,
        trainer: applicant.processInfo.trainer,
        sede: applicant.processInfo.campus.address + '' + applicant.processInfo.campus.name,
      };
    console.log("notification",raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
     
    };

    


    
fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/welcomeSin`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("confirmacion capa",result))
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

    console.log("Recontacto 213143",raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
     
    };

    


    
fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/reminder`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("REcontacto",result))
      .catch(error => console.log('error', error));
  	
  }

  const sendNotificationNoApto = (applicant) => {

    
    var raw = {
      recipientPhoneNumber: "+51910107346",
      user: applicant.firstName,
     
    };

    console.log("Rechazo 213143",raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
     
    };

    


    
fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/notifications/status`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("rechazoo",result))
      .catch(error => console.log('error', error));
  	
  }

  //post estado
  const handlePostState = (applicant) => {
    var raw = {status: applicant.status};
    console.log("raw",raw)

    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
     
    };


    
fetch(`https://iezopofihj.execute-api.us-east-1.amazonaws.com/dev/applicants/update/${applicant.id}/document/${applicant.dni}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log("post stado",result))
      .catch(error => console.log('error', error));
  }


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <DateFilter />
        </Grid>

        <Grid item xs={5}>
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
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                {Object.keys(item).map((key) => (
                  <TableCell key={key}>
                    {key === "Estado de Postulacion" ? (
                      <Select
                        value={item[key]}
                        variant="outlined"
                        onChange={(e) => {
                          const updatedItem = { ...item, [key]: e.target.value };

                          console.log("updatedItem", updatedItem);
                         const applicantdata = dataapi.filter((item) => {
          
                            return item.document === updatedItem["Nro. Documento"];
                            
                            
                          })

                          console.log("applicantdata", applicantdata)
                          const aplicant = {
                            id: applicantdata[0].id,
                            dni: applicantdata[0].document,
                            status: e.target.value
                          }

                          handlePostState(aplicant);
                          getAllApplicants();


                          if(e.target.value === "confirmado a capa") {
                           sendNotificationConfirmadoCapa(applicantdata[0]);
                          } else if (e.target.value === "recontacto") {
                            sendNotificationRecontacto(applicantdata[0]);
                          } else{
                            sendNotificationNoApto(applicantdata[0]);
                          }
                          console.log("estado select",e.target.value)
                        }}
                      >
                        <MenuItem value="recontacto">Recontacto</MenuItem>
                        <MenuItem value="confirmado a capa">Confirmado a Capa</MenuItem>
                        <MenuItem value="no apto">No apto</MenuItem>
                      </Select>
                    ) : (
                      typeof item[key] === "object" ? item[key].value : item[key]
                    )}
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
