import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import img2 from '../assets/img2.png'

const MediaControlCard = () => {
  return (
    <Card sx={{display:"flex"   ,ml:"30px", p:"20px", mt:"50px", pt:5}}>
      <CardContent>
        <Typography variant='h3' color="#006839"  sx={{fontWeight:600, pt:"20px" ,pl:"20px"}}>
        Introduction of <br /> Jawan Pakistan
        </Typography>
        <Typography variant='p' color="#A9B2C0" component="p" sx={{padding:"10px" , margin:"5px"}}>
        The foundation of every state is the education and skills set of its youth. Jawan Pakistan  
        is such an organization of Pakistan who is not only working on youth education but also 
         enhancing skills set in youth either Free of cost or in a very low cost. This initiative,
          initially developed by a single person and with almost no seed capital, promotes 
           entrepreneurship and innovation and Sustainable Development Goal, which promotes  inclusive and sustainable economic growth.
        </Typography>
      </CardContent>
      <div>
      <img style={{width:"600px"}} src={img2} alt="" />
      </div>
    </Card>
  );
}

export default MediaControlCard;