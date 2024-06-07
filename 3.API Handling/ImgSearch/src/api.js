import axios from 'axios'

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: `Client-ID VsN2eiYiJKDSZI1LVHbtuceJZwSSBzsX-NX35qHX9XM`
        },
        params:{
            query: term
        }
    });

    console.log(response.data.results);
    return response.data.results;
}

export default searchImage;