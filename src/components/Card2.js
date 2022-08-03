import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiCard(user) {
    console.log(user.user.name);
    
  return (
    <Card   sx={{ maxWidth: 345 ,marginTop: "10px" ,marginBottom:"10px", boxShadow: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/250/150"
         
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {user.user.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {user.user.reg}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
