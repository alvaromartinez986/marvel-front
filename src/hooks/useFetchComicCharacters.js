import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";
import { createImgPath } from "../utils/stringUtils";
import useSaveData from "./useSaveData";

const useFetchComicCharacters = (charactersUrl) => {
    const [characters, setCharacters] = useState([]);
    const { loading, getData } = useFetchData();
    const { saveLocalData } = useSaveData();



    useEffect(() => {
        console.log(charactersUrl)
        charactersUrl.forEach(element => {
            const callFetch = async () => {
                const response = await getData(`${element}?`);
                if (response) {
                    const characterComic = {
                        id: response.id,
                        name: response.name,
                        description: response.description,
                        img: createImgPath(response.thumbnail),

                    }
                    if (response.isLocaData) {
                        saveLocalData('characters', { ...characterComic, thumbnail: response.thumbnail, id: response.id })

                    }
                    setCharacters(
                        character => [...character, characterComic
                        ])
                }
            }
            callFetch();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charactersUrl, getData]);

    return { characters, loading }
}

export default useFetchComicCharacters
