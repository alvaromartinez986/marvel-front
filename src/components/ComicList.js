import { Stack } from '@mui/material'
import React from 'react'
import ComicSection from './ComicSection'

const ComicList = ({ comics }) => {
    return (
        <Stack sx={{ gap: 10 }}>
            {comics.map((comic) => <ComicSection {...comic} key={comic.id} />)}
        </Stack>
    )
}

export default ComicList
