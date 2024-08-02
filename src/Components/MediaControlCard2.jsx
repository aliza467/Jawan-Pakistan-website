import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import img3 from '../assets/img3.png'


const MediaControlCard = () => {
  return (
    <Card sx={{display:"flex"   ,ml:"20px",  mt:"50px", pt:5}}>
        <div>
      <img style={{width:"500px" }} src={img3} alt="" />
      </div>
      <CardContent>
      
        <Typography variant='h4' color="#006839"  sx={{fontWeight:600, pt:"20px" ,pl:"20px"}}>
        Mission And Vision
 <br />Behind Jawan Pakistan
        </Typography>
        <Typography variant='p' textAlign="left" color="#A9B2C0" component="p" sx={{pr:"70px"}} >
        Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed  youth. <br /><br />
        <br/>

        Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
        
        
        
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default MediaControlCard;