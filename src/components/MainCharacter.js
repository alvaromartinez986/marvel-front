import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CircularProgress } from '@mui/material';

const MainCharacter = ({ name, description, img, loading }) => {
    console.log(loading)
    return (
        <Card sx={{ width: 200, mb: 10 }}>
            {loading ? <CircularProgress /> : <> <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" align='center' >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </>}
        </Card>
    );
}


export default MainCharacter
