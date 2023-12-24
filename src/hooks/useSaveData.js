import axios from "axios";

const useSaveData = () => {

    const saveLocalData = (model, data) => {

        const character = {
            id: data.id,
            name: data.name,
            description: data.description,
            imgUrl: data.thumbnail.path + '.' + data.thumbnail.extension
        }

        axios.post(`${process.env.REACT_APP_LOCAL_URL}/${model}/`, character)
            .then(response => console.log('Data saved locally:', response.data))
            .catch(error => console.warn('Failed to save data locally:', error));
    }

    return { saveLocalData };
}

export default useSaveData
