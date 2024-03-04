import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import '../Components/HomeStyle.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import banner1 from '../Components/Images/banner.jpg'

import shirts from '../Components/Images/HpImg/shirt.avif'
import jeans from '../Components/Images/HpImg/jeans.avif'
import tshirts from '../Components/Images/HpImg/tshirt.avif'
import shorts from '../Components/Images/HpImg/shorts.avif'
import jackets from '../Components/Images/HpImg/jackets.avif'
import trousers from '../Components/Images/HpImg/trousers.avif'
import brandimg from '../Components/Images/logo.png'
import quality from '../Components/Images/HpImg/quality.jpg'



function HomePage() {


  return (
    <div className=''>
        <h1 className='text-center c1'>"<mark className='bg-black red'>Fashions</mark> <mark className='bg-black fadee'>fade</mark>, <mark className='bg-black red'>Style</mark> is eternal."</h1>
        <hr />

        <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Men</p>

        <div className='container-fluid text-center'>
          <div className='row d-flex justify-content-around align-items-center'>
            
            <div className='col'>
              <Link to='/shirts' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={shirts} alt="" />
              <h5 className='inames'>Shirts</h5>
              </Link>
            </div>

            <div className='col'>
              <Link to='/jeans' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={jeans} alt="" />
              <h5 className='inames'>Jeans</h5>
              </Link>
            </div>

            <div className='col'>
              <Link to='/tshirts' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={tshirts} alt="" />
              <h5 className='inames'>T-shirts</h5>
              </Link>
            </div>

            <div className='col'>
              <Link to='/shorts' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={shorts} alt="" />
              <h5 className='inames'>Shorts</h5>
              </Link>
            </div>

            <div className='col'>
              <Link to='/jackets' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={jackets} alt="" />
              <h5 className='inames'>Jackets</h5>
              </Link>
            </div>

            <div className='col'>
              <Link to='/trousers' className='text-white text-decoration-none'>
              <img className='items pb-1 rounded' src={trousers} alt="" />
              <h5 className='inames'>Trousers</h5>
              </Link>
            </div>

          </div>

        </div>

        <div className='container-fluid text-center div2'>

          <div className='row align-items-center m-4 div2'>

            <div className='col d-flex justify-content-center'>
              <img className='brandimg rounded-3' src={ brandimg } alt="" />
            </div>

            <div className='col '>
              <p className='inames'>Our Men’s Clothing is a dynamic and contemporary brand that seamlessly blends style, comfort, and quality. Our mission is to empower men with clothing that not only looks great but also feels great. 
                Whether you’re dressing up for a formal occasion or seeking casual everyday wear, AV has got you covered. Our collection features a wide range of meticulously crafted garments, from formal trousers 
                that exude sophistication to casual hoodies and sweatpants that effortlessly combine comfort and style.</p>
            </div>

          </div>

        </div>

        <div className='container-fluid text-center div2'>

          <div className='row align-items-center m-4 div2'>

              <div className='col '>
                <p className='inames'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, earum! Minima cumque repellat recusandae, corrupti rerum, harum possimus aliquam perferendis ex voluptatum, sed maiores eum doloribus ab nesciunt? Aspernatur atque quibusdam obcaecati facilis?</p>
              </div>

              <div className='col d-flex justify-content-center'>
                <img className='brandimg rounded-3' src={ quality } alt="" />
              </div>

          </div>

        </div>



    </div>

  )
}

export default HomePage