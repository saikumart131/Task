import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({data, onClick} :any) {
    console.log("Data in card", data)
  return (
    <Card sx={{ maxWidth: 345, margin: '10px'  }} className='cards' onClick={()=>{
        onClick(data)
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width ='200'
          image={data.logo}
          alt="green iguana"
        />
        <CardContent sx={{textAlign: "center"}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}