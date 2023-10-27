import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { pink, blue } from '@mui/material/colors'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Box } from '@mui/system';

function OfferCard({data}) {
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
                    {data.content},
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.modality},
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.turn}
                </Typography>

                <Box display='flex'>
                    <LocationOnIcon
                        sx={{ color: pink[500] }} data-testid="LocationOnIcon">
                    </LocationOnIcon>
                    <Typography variant="body2" color="text.secondary">
                        {data.campus}
                    </Typography>

                    <AccessTimeIcon
                        sx={{ color: pink[500] }} data-testid="AccessTimeIcon">
                    </AccessTimeIcon>
                    <Typography variant="body2" color="text.secondary">
                        Full time
                    </Typography>

                    <AccessibleIcon
                        sx={{ color: pink[500] }} data-testid="AccessibleIcon">
                    </AccessibleIcon>
                </Box>

            </CardContent><CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" sx={{ bgcolor: '#191970', color: 'white' }}>Conoce más</Button>
            </CardActions></Card>
    )
}

export default OfferCard