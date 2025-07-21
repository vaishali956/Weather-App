import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }){
    const Init_Img =
     "https://images.unsplash.com/photo-1606296149136-236a0388875a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const Hot_Img =
        " https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxzdW1tZXJ8ZW58MHx8MHx8fDA%3D";
    const Cold_Img =
        "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_Img =
     "https://images.unsplash.com/photo-1509635022432-0220ac12960b?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">

            <div className='cardContainer'>
               <Card sx={{ maxWidth: 345 }}>
                   <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 
                            ? Rain_Img
                            : info.temp > 15 
                            ? Hot_Img
                            : Cold_Img
                        }
                        title="green iguana"
                   />
                   <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         {info.city}{
                            info.humidity > 80 
                            ? <ThunderstormIcon/>
                            : info.temp > 15 
                            ? <SunnyIcon />
                            : <AcUnitIcon />
                          }
                        </Typography>
                       <Typography variant="body2" sx={{ color: 'text.secondary' } } component ={"span"}>
                          <p> Temperature = {info.temp}&deg;C</p>
                          <p> Humidity = {info.humidity}</p>
                          <p> Max Temp = {info.tempMax}&deg;C</p>
                          <p> Min Temp = {info.tempMin}&deg;C</p>
                          <p> The Weather can be described as <i>  {info.weather} </i>  and feels like {info.feels_like}</p>
                        </Typography>
                   </CardContent>
               </Card>
            </div>
       </div>
    );
}