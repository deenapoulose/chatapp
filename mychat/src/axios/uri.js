import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000'});

export const getMeg = async(callback)=>{
    await api.get('/reseve').then(res => {
        return callback(res.data);
    });
}

