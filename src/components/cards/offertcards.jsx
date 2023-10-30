/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { pink, blue } from '@mui/material/colors'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Box } from '@mui/system';
//import { useHistory } from 'react-router-dom';

function OfferCard({data}) {
//    const history = useHistory();

const handleButtonClick = () => {
    const offerId = '2bfc052a-0094-41c1-a7b5-10f9f01dc8bc';
    // Redirige a la página de oferta de empleo usando el ID en la URL
    history.push(`/ofertas/${offerId}`);
};

    return (
        
        <Card sx={{
            margin: '35px',
            maxWidth: 345,
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)',
            border: '2px solid #999090',
            fontWeight: 700,
            color: blue[900]
        }}>
        
            <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.content.slice(0, 140)},
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.modality},
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.turn}
                </Typography>

                <Box display='flex' justifyContent='space-between' style={{marginTop:'10px'}}>
                    <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ color: pink[500], fontSize: 14 }} data-testid="LocationOnIcon" />
                        <span style={{ marginLeft: '5px' }}>{data.campus}</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ color: pink[500], fontSize: 14 }} data-testid="AccessTimeIcon" />
                        <span style={{ marginLeft: '5px' }}>Full time</span>
                    </Typography>
                    <AccessibleIcon sx={{ color: pink[500], fontSize: '14px' }} data-testid="AccessibleIcon" />
                </Box>

            </CardContent><CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
<Button size="small" sx={{ width: '80%', margin: '0 auto', background: 'linear-gradient(155deg, #00968F 16.03%, #615E9B 86.12%)', color: 'white' }}>Conoce más</Button>
 </CardActions></Card>
    )
}

export default OfferCard