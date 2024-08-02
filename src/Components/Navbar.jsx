import React from 'react'
import { AppBar, Container, Toolbar, Typography} from '@mui/material'
import img1 from "../assets/img1.png"


const Navbar = () => {
  return (
    
    <AppBar position="static" sx={{backgroundColor:'white', color:"black"
    }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
        <Typography
         
          sx={{
            ml:"80px",
            mr: 4,
            display: { xs: 'none', md: 'flex' },
            
            fontWeight: 500,
            letterSpacing: '.3rem',
            
            textDecoration: 'none',
          }}
        >
          <img style={{width:"200px"}} src={img1} alt="" />
        </Typography>
        <Typography
         
          sx={{
            ml:"70px",
            mr: 4,
            display: { xs: 'none', md: 'flex' },
           
            fontWeight: 500,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
         Home
        </Typography>

        <Typography
         
          sx={{
            mr: 4,
            display: { xs: 'none', md: 'flex' },
            
            fontWeight: 500,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
         About us
        </Typography>

        <Typography
         
         sx={{
           mr: 4,
           display: { xs: 'none', md: 'flex' },
           
           fontWeight: 500,
           letterSpacing: '.3rem',
           color: 'inherit',
           textDecoration: 'none',
         }}
       >
        Tranings
       </Typography>

       <Typography
         
         sx={{
           mr: 5,
           display: { xs: 'none', md: 'flex' },
           
           fontWeight: 500,
           letterSpacing: '.3rem',
           color: 'inherit',
           textDecoration: 'none',
         }}
       >
       Contact Us
       </Typography>

       

        
        
        
      </Toolbar>
    </Container>
  </AppBar>
    
  )
}

export default Navbar
