import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    houseType: '',
    buildingStatus: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // Loading state for loader

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true); // Show loader

    // Use EmailJS to send the form data
    emailjs.send(
      'service_0asiqpr', // Replace with your EmailJS Service ID
      'template_ilc20cm', // Replace with your EmailJS Template ID
      formData,
      'nEc_n5PD_NicOuOpS' // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setLoading(false); // Hide loader after success
    })
    .catch((err) => {
      console.error('Failed to send message. Error: ', err);
      alert('Failed to send message. Please try again later.');
      setLoading(false); // Hide loader after failure
    });

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      number: '',
      houseType: '',
      buildingStatus: '',
      message: '',
    });
  };

  return (
    <>
      <div id='contact' className='contact-cont'>
        <div className='contact-form'>
          <h1>Let's Talk</h1>
          <form onSubmit={handleSubmit} className='cont-input'>
            <p>Name</p>
            <input name="name" value={formData.name} onChange={handleChange} required />
            
            <p>Email</p>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
            <p>Number</p>
            <input type="tel" name="number" value={formData.number} onChange={handleChange} required />
            
            <p>House Type</p>
            <select name="houseType" value={formData.houseType} onChange={handleChange} required>
              <option value="" disabled>Select an Option</option>
              <option value="Flat">Flat</option>
              <option value="Duplex">Duplex</option>
              <option value="Terrace">Terrace</option>
              <option value="Others">Others</option>
            </select>
            
            <p>Status of Building</p>
            <select name="buildingStatus" value={formData.buildingStatus} onChange={handleChange} required>
              <option value="" disabled>Select an Option</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Finished">Finished</option>
              <option value="Others">Others</option>
            </select>
            
            <p>Additional Message</p>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <div className='contact-btn'>
              {loading ? (
                <div className="loader"></div> // Loader
              ) : (
                <button type="submit" className='contact-btn'>Submit</button> // Submit button
              )}
            </div>
          </form>
        </div>
        <div className='contact-content'>
          <h1>Let's Talk</h1>
          <p>Looking to bring your home into the future? Automating your house is the key to ultimate convenience and control. 
              Whether you're interested in smart lighting, security systems, or whole-home automation, we're here to help. 
              Reach out to us today and let's discuss how we can make your home smarter, safer, and more efficient.
          </p>
          <div className='contact-img'></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
