import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card3 = () => {
  return (
    <Card sx={{ maxWidth: 15000, mt:"60px", ml:"40px"}}>
      <CardActionArea sx={{textAlign:"center"}}>
        <img  src="https://jawanpakistan12.web.app/images/image.jpg" alt="" style={{borderRadius:"350px", width:"270px"}} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" color="#006839"  sx={{fontWeight:600, pt:"20px" ,pl:"20px"}}>
            Muhammad Ali Mughal 
          </Typography>
          <Typography>Founder of Jawan Pakistan</Typography><br /> <br />
          <Typography   variant='p' sx={{fontSize:"16px"}} color="#A9B2C0" component="p">
          We aim to be most efficient provider of business process outsourcing services by setting the  <br /> industry standards for cost and quality of services. Our long term success will be driven by  <br /> our relentless focus on recruiting and developing the most talented pool of human capital in   <br /> our industry.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Card3
