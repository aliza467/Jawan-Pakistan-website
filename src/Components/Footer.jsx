import React from 'react'
import img1 from "../assets/img1.png"

const Footer = () => {
  return (
    <div>
         <footer className="footer">
      <div className="container">
        <div>< img style={{width:"200px", height:"100px" , marginRight:"300px"}} src={img1} alt="" /></div>
        <div>
            <ul>
                <li>Company </li>
                <li>Home</li>
                <li>About Us</li>
            </ul>
        </div>
        <div >
            <ul >
                <li>Contact Details</li>
                <li>Muhammad Ali Mughal</li>
            </ul>
        </div>
      </div>
    </footer>
      
    </div>
  )
}

export default Footer
