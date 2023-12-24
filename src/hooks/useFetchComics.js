import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";
import { createImgPath } from "../utils/stringUtils";

const useFetchComics = (idCharacter) => {
    const [comics, setComics] = useState([]);
    const { loading, getData } = useFetchData();


    useEffect(() => {
        console.log(idCharacter)
        if (idCharacter) {
            const callFetch = async () => {
                const response = await getData(`comics?characters=${idCharacter}?`);
                if (response) {
                    response.forEach(comic => {
                        setComics(
                            comics => [...comics,
                            {
                                id: comic.id,
                                name: comic.title,
                                description: comic.description,
                                img: createImgPath(comic.thumbnail),
                                charactersUrl: comic.characters.items.map(item => item.resourceURI.split('/').slice(5).join('/'))
                            }])
                    });


                }
            }
            callFetch();
        }
    }, [idCharacter, getData]);

    return { comics, loading }
}

export default useFetchComics
