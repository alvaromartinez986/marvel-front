import axios from 'axios';
import md5 from 'js-md5';
import { useCallback, useEffect, useState } from 'react'

axios.defaults.xsrfCookieName = 'my_custom_csrf_cookie_name';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const useFetchData = (urlIn) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState(urlIn)

    const getData = useCallback(async (urlCustom) => {
        console.log(urlCustom)

        try {
            setLoading(true);

            // Check if data is available locally
            const localData = await fetchLocalData(urlCustom);
            console.log(localData)
            if (localData && localData?.length !== 0) {
                setLoading(false);
                localData.isLocal = true;
                return localData;
            }

            const ts = Date.now();
            const hash = md5(`${ts}${process.env.REACT_APP_PRIVATE_KEY}${process.env.REACT_APP_PUBLIC_KEY}`)
            const response = await axios.get(`${process.env.REACT_APP_URL}/${urlCustom}ts=${ts}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`)
            console.log(response)

            setLoading(false);
            return urlCustom.includes('comics') ? response.data.data.results : response.data.data.results[0];

        } catch (error) {
            console.warn(error)
        }
        return null;
    }, []);

    const fetchLocalData = async (urlCustom) => {
        try {

            const query = urlCustom.slice(0, -1).replace('?', '/?');
            const last = query.includes('?') ? '' : '/';
            console.log(`${process.env.REACT_APP_LOCAL_URL}/${query}${last}`)
            const localResponse = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/${query}${last}`);
            return query.includes('name=') ? localResponse.data[0] : urlCustom.includes('comics') ? localResponse.data.results : localResponse.data;
        } catch (error) {
            console.warn(error);
            return null;
        }
    };


    useEffect(() => {
        if (url) {
            const callFetch = async () => {
                const response = await getData(url);
                setData(response);
            }
            callFetch();
        }
    }, [getData, url])

    return { data, loading, setUrl, getData }
}

export default useFetchData
