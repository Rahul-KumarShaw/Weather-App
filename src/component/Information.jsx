import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material';

const Row=styled(Typography)({
    marginTop:10,
    color:'white',
    padding:10,
    fontSize:20,
    fontWeight:600,
    letterSpacing:2,
    '& > svg':{
        marginRight:10
    }
});
const Info=styled(Box)({
    background:'#e67e22',
    margin:'30px 60px',
    height:'80%'
});
const Error=styled(Typography)({
    color:'red',
    margin:50,
    padding:20,
    fontSize:20
});

const Information = ({result}) => {
    return (
        result && Object.keys(result).length > 0 ?
            <Info>
                <Row><LocationOn />  {result.name}, {result.sys.country}</Row>
                <Row><SettingsBrightness /> Temprature:{result.main.temp} </Row>
                <Row><Opacity />Humidty:{result.main.humidity} </Row>
                <Row><Brightness5 /> Sun Rise:{new Date(result.sys.sunrise * 1000).toLocaleTimeString()} </Row>
                <Row><Brightness6 /> Sun Set:{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
                <Row><Dehaze /> Humidity:{result.weather[0].main} </Row>
                <Row><Cloud />Cloud:{result.clouds.all}% </Row>
            </Info>
            : <Error>Enter the value to check weather </Error>
    );
}
export default Information;