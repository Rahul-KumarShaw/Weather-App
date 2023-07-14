import {useState} from "react";
import { Box, Button, InputBase, styled } from "@mui/material";
import { getWeather } from "../services/api";


const Container =styled(Box)({
    background:'#445A6F',
    padding:10,
    display:'flex',
    justifyContent:"space-between"

});
const Input=styled(InputBase)({
    color:'#FFF',
    marginRight:20,
    fontSize:18
});
const GetButton=styled(Button)({
    background:'#e67e22',
    width:'20%',
    

    
})


const Form=({setResult})=>{
    const [data, setData]=useState({city:'', country:''})
    const handleChange= (e)=>{
        setData({...data, [e.target.name]: e.target.value});


    }
    const getWeatherInfo= async()=>{
      let response= await getWeather(data.city, data.country);
      setResult(response);

    }


    return (
        <Container>
          <Input 
          placeholder="Search"
          onChange={(e)=>handleChange(e)} 
          name="city"
           />
          <GetButton variant="contained" 
          onClick={() => getWeatherInfo()}
          >Get Weather</GetButton>
        </Container>

    )
}
export default Form;