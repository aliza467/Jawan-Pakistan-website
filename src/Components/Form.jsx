import React from 'react'
import { useState } from 'react';
import  '../App.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
      };
  return (
    
    
    <div>
        
         <form onSubmit={handleSubmit}  style={{border:"2px solid gray", padding:"50px"}}>
      <div>
      <h1>Contact</h1>
        <label htmlFor="name">Name:</label><br />
        <input
        style={{width:"400px"}}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          style={{width:"400px"}}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Phone Number:</label><br />
        <input
        style={{width:"400px"}}
          height="700px"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label><br />
        <textarea
        style={{width:"400px"}}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button style={{backgroundColor:"green"}} type="submit">Submit</button>
    </form>
      
    </div>
  )
}

export default Form
