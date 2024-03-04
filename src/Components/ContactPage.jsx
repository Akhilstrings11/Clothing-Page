import React from 'react'
import { useState } from 'react';

function ContactPage() {

  function validateForm() {
    const form = document.getElementById('contactForm');
    const firstName = form.elements.firstName.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    if (!firstName || !email || !message) {
        alert('Please fill in all required fields.');
        return false; // Prevent form submission
    }
    // Additional validation logic (e.g., email format) can be added here

    // Form is valid, allow submission
    return true;
}

  return (
    <div>

      <div className="container">
          <h1 className='text-center inames'>Contact Us</h1>
          <p className='text-center inames'>We'd love to hear from you! Fill out the form below:</p>
          <div className="contact-form">
            <form id='contactForm' onSubmit="return validateForm()">
              <input type="text" placeholder="Your Name" name='firstName'/>
              <input type="text" placeholder="Your Email" name='email'/>
              <textarea placeholder="Your Message" name='message'></textarea>
              <input type="submit" value="Send Message" className='btn btn-outline-danger p-1 ps-2 pe-2'/>
            </form>
          </div>
      </div>

    </div>
  )
}

export default ContactPage