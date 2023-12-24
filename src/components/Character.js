import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';


const Character = ({ name, description, img, loading }) => {

    return (
        <Card sx={{ display: 'flex', width: '20%', overflowY: 'auto' }}>
            {loading ? <CircularProgress /> : <> <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 8 }} component="div">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 60, height: 60 }}
                    image={img}
                    alt="Live from space album cover"
                /></>}
        </Card>
    );
}

export default Character; 