import { Stack } from '@mui/material'
import React from 'react'
import MainCharacter from './MainCharacter'
import useFetchCharacter from '../hooks/useFetchCharacter'
import useFetchComics from '../hooks/useFetchComics'
import ComicList from './ComicList'

const SpectrumCard = () => {
    const { character, loading } = useFetchCharacter('spectrum&')
    console.log(character)
    const { comics } = useFetchComics(character?.id);
    return (
        <Stack>
            <MainCharacter  {...character} loading={loading} />
            <ComicList comics={comics} />
        </Stack>
    )
}

export default SpectrumCard
