import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useFetchComicCharacters from '../hooks/useFetchComicCharacters';
import Character from './Character';
import { Stack } from '@mui/material';

const ComicSection = ({ name, description, img, charactersUrl }) => {
    const { characters } = useFetchComicCharacters(charactersUrl);

    return (
        <Card sx={{ display: 'flex', justifyContent: 'space-between', height: '400px', overflowY: 'auto' }}>
            <CardContent >
                <Typography component="div" variant="h5">
                    {name}
                </Typography>
                <Typography style={{ wordWrap: "break-word" }}
                >
                    {description}
                </Typography>
                <Typography component="div" sx={{ mt: 3 }}>
                    Characters
                </Typography>
                <Stack sx={{ display: 'flex', flexDirection: 'row', width: '70%', gap: 2, flexWrap: 'wrap', py: 3 }}>
                    {characters.map(character => <Character {...character} />)}
                </Stack>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Live from space album cover"
            />
        </Card>
    )
}

export default ComicSection
