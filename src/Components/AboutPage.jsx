import React from 'react' 
import '../Components/ApCp.css'

function AboutPage() {
  return (
    <div>
      
      <div class="container-fluid text-center">
        <h1 className='inames' >About Us</h1>
        <p className='inames'>Welcome to our website! We are a passionate team dedicated to providing high-quality products/services to our customers. Our mission is to deliver the Best Quality.</p>
        <br />
        <p className='inames'>Here are some key points about us:</p>
        <ul className='list-group list-group-flush'>
            <li className='list-group-item bg-black text-light inames'>Founded in 2023</li>
            <li className='list-group-item bg-black text-light inames'>Located in Some, Country</li>
            <li className='list-group-item bg-black text-light inames'>Our values: Integrity, Innovation & Collaboration</li>
            <br />
            <br />
            <h4 className='inames'>Meet Our Team</h4>
            <ul className='list-group list-group-numbered'>
                <li className='list-group-item bg-black text-light inames'>Akhil - Founder</li>
                <li className='list-group-item bg-black text-light inames'>Sunny - Manager</li>
                <li className='list-group-item bg-black text-light inames'>Praveen - HR</li>
                <li className='list-group-item bg-black text-light inames'>Kiran - AM</li>
            </ul>
        </ul>
        <br />
        <p className='inames'>Contact us at akhilmatta6@gmail.com or follow us on social media: Akhil Strings, Akhil11, @akhil_strings_.</p>
    </div>

    </div>
  )
}

export default AboutPage