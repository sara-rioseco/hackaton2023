import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Circular from "../../components/detalleApplicants/circular-progress";
import StepperHorizontal from "../../components/detalleApplicants/detalle";
import IconBreadcrumbs from "../../components/detalleApplicants/breadcrumbs";
import Formularioproceso from "../../components/detalleApplicants/form";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 3, marginTop: "70px" }}>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={10}>
          <Item>
            <IconBreadcrumbs />
          </Item>
          <Item>
            <StepperHorizontal />
          </Item>
        </Stack>
      </Box>
      <Stack spacing={10}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Circular />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Formularioproceso />
          </Item>
        </Grid>
      </Grid>
      </Stack>
    </Box>
  );
}
