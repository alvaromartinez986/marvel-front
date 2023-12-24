import { useEffect, useMemo } from "react";
import useFetchData from "./useFetchData";
import { createImgPath } from "../utils/stringUtils";
import useSaveData from "./useSaveData";

const useFetchCharacter = (name) => {
    const { data, loading } = useFetchData(`characters?name=${name}`);
    const { saveLocalData } = useSaveData();

    useEffect(() => {
        if (data && !data.isLocal) {
            saveLocalData('characters', data)
        }
    }, [data, saveLocalData]);


    const character = useMemo(
        () => ({
            id: data?.id,
            name: data?.name,
            description: data?.description,
            img: !data?.isLocal ? createImgPath(data?.thumbnail) : data.imgUrl,
            comics: data?.comics?.items?.map(comic => comic.resourceURI.split('/').slice(5).join('/')) || []
        }), [data]);

    return { character, loading }
}

export default useFetchCharacter
