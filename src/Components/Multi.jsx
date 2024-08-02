import React from 'react'
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

const Multi = () => {
  return (
    <div style={{marginTop:"150px"}} >
        <h1 style={{textAlign:"center"}} >Glimpses Of Sessions Conducted By Jawan Pakistan</h1>
      <div style={{textAlign:"center" }}>
        <img style={{padding:"5px"}} src={img4} width="270px" height="280px" alt="" />
        <img style={{padding:"5px"}} src={img5} width="270px" height="280px" alt="" />
        <img style={{padding:"5px"}} src={img6} width="550px" height="280px" alt="" />
      </div>
      <div style={{textAlign:"center"}}>
        <img style={{padding:"5px"}} src={img7} width="550px" height="280px" alt="" />
        <img style={{padding:"5px"}} src={img8} width="270px" height="280px" alt="" />
        <img style={{padding:"5px"}} src={img9} width="270px" height="280px" alt="" />
      </div>
    </div>
  )
}

export default Multi