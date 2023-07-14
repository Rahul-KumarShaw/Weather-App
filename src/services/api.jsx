import axios from 'axios';
 const API_KEY = '4c363f8af84d624a0bd4a6423b3d904f';
 const API_URL = 'https://api.openweathermap.org/data/2.5/weather';



export const getWeather = async (city, country) =>{
    try{
       let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
    //    console.log(response);
       return response.data;
    } catch (error){
        // console.log('Error while calling the api', error.message);
        return error.response;
    }
}