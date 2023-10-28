/* eslint-disable no-unused-vars */
import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Chip,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import { RowingOutlined } from "@mui/icons-material";
import './oferta.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TopSection = styled(Typography)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(117, 117, 117, 0.2)"

}));

const TimerAndChip = styled("div")(({ theme }) => ({
    margin: "0",
    fontFamily: "Barlow",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0em",
    background: "rgba(249, 250, 251, 1)",
    width: "114px",
    height: " 36px",
    borderRadius: "16px",
    color: "rgba(0, 40, 85, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",


}));

const ModalityAndChip = styled("div")(({ theme }) => ({
    fontFamily: "Barlow",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0em",
    background: "rgba(249, 250, 251, 1)",
    width: "114px",
    height: " 36px",
    padding: "4px, 12px, 4px, 12px",
    borderRadius: "16px",
    color: "rgba(0, 40, 85, 1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0"


}));
const CustomCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "row",
        width: "720px",
        borderRadius: "20px",
        borderColor: "background: #919EAB52",
        border: "5px",
        fontFamily: "Barlow",
        padding: "24px",
        gap: "20px",
maxHeight:"814px",
overflowY: 'auto', 

    },
}));

const Title = styled(Typography)(({ theme }) => ({
    color: "rgba(0, 40, 85, 1)",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: " 24px",
    letterSpacing: "0em",
    textAlign: "left",

}));

const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 300,

}));

const StyledChip = styled(Chip)(({ theme }) => ({
    margin: "0",
    fontFamily: "Barlow",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0em",
    background: "rgba(249, 250, 251, 1)",
    width: "114px",
    height: " 36px",
    padding: "4px, 12px, 4px, 12px",
    borderRadius: "16px",
    color: "rgba(0, 40, 85, 1)",


}));
const Modality = styled(Typography)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: "5px",
justifyContent:"start",
alignItems:"center"

}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    padding: "5px 0px",
    color: "rgba(0, 40, 85, 1)",
    margin: "10px 0"

}));

const Apply = styled(Button)(({ theme }) => ({
    background: "rgba(206, 15, 105, 1)",
    width: "114px",
    height: "40px",
    padding: "8px, 16px, 8px, 16px",
    borderRadius: "30px",
    color: "rgba(255, 255, 255, 1)",
    alignItems: "center",
    fontWeight: "700",

}));

const DescriptionDiv = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto', 
    // Agrega la barra de desplazamiento vertical
    // Otras propiedades de estilo según sea necesario
}
));

const Description = styled(Typography)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "25px",
    letterSpacing: "0.25px",
    textAlign: "left",
    overflow: "auto",
    
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: "rgba(0, 40, 85, 1)",
    fontWeight: "700",
    marginTop: theme.spacing(2),
}));

function CustomCardComponent({ data }) {
    return (
        <CustomCard>
            <CardContent sx={{ maxHeight: "814px" }}>
                <TopSection >
                    <div className="topCard">
                        <Title variant="h5">{data.title}</Title>
                        <Subtitle variant="subtitle1">{data.profileName}</Subtitle>
                        <div>{data.locality}</div>
                    </div>

                    <Apply variant="contained">Postularme</Apply>
                </TopSection>
                <Modality>
                    <TimerAndChip >
                        <AccessTimeIcon sx={{ marginLeft: "7px" }}></AccessTimeIcon>
                        <StyledChip label="Full Time" color="primary" sx={{ padding: "0 7px 0 0" }} />
                    </TimerAndChip>
                    {/* <ModalityAndChip>
                        <AppRegistrationOutlinedIcon sx={{ marginLeft: "7px" }}></AppRegistrationOutlinedIcon>
                        <StyledChip label="Presencial" color="primary" sx={{ padding: "0 7px 0 0" }} />
                    </ModalityAndChip> */}
                </Modality>
                <DescriptionDiv>
                    <Description variant="body1">{data.description}</Description>
                    {data.we_offer.split("\n").map((item, key) => (
                        <>{key === 0 ? <SectionTitle variant="h6">{item.trim()}</SectionTitle> : <Text sx={{ fontWeight: 300, lineHeight: "10px" }} key={key}>{item.trim()}</Text>}<br></br></>
                    ))}
                    {data.courses.split("\n").map((item, key) => (
                        <>{key === 0 ? <SectionTitle variant="h6">{item.trim()}</SectionTitle> : <Text sx={{ fontWeight: 300, lineHeight: "10px" }} key={key}>{item.trim()}</Text>}<br></br></>

                    ))}
                    {data.similar_careers.split("\n").map((item, key) => (
                        <>{key === 0 ? <SectionTitle variant="h6">{item.trim()}</SectionTitle> : <Text sx={{ fontWeight: 300, lineHeight: "10px" }} key={key}>{item.trim()}</Text>}<br></br></>

                    ))}
                    {data.requirements.split("\n").map((item, key) => (
                        <>{key === 0 ? <SectionTitle variant="h6">{item.trim()}</SectionTitle> : <Text sx={{ fontWeight: 300, lineHeight: "10px" }} key={key}>{item.trim()}</Text>}<br></br></>

                    ))}
                </DescriptionDiv>
            </CardContent>
        </CustomCard>
    );
}

export default CustomCardComponent;
