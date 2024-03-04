import React from 'react'
import { useState } from 'react';

import s1 from '../Components/Images/Shirts/s3.avif'
import j1 from '../Components/Images/Jeans/j1.avif'
import ts1 from '../Components/Images/TShirts/ts1.avif'
import sh1 from '../Components/Images/Shorts/sh1.avif'
import jk1 from '../Components/Images/Jackets/jk1.avif'
import s2 from '../Components/Images/Shirts/s3.avif'
import j2 from '../Components/Images/Jeans/j1.avif'
import ts2 from '../Components/Images/TShirts/ts1.avif'
import sh2 from '../Components/Images/Shorts/sh1.avif'
import jk2 from '../Components/Images/Jackets/jk1.avif'
import s3 from '../Components/Images/Shirts/s3.avif'
import j3 from '../Components/Images/Jeans/j1.avif'
import ts3 from '../Components/Images/TShirts/ts1.avif'
import sh3 from '../Components/Images/Shorts/sh1.avif'
import jk3 from '../Components/Images/Jackets/jk1.avif'
import s4 from '../Components/Images/Shirts/s3.avif'
import j4 from '../Components/Images/Jeans/j1.avif'
import ts4 from '../Components/Images/TShirts/ts1.avif'
import sh4 from '../Components/Images/Shorts/sh1.avif'
import jk4 from '../Components/Images/Jackets/jk1.avif'

function MenPage() {


  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };


  return (

    <div className='container-fluid'>

      <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Men's Page <span className='h6 text-cener ps-4 capp'>“Breaking fashion rules, setting new trends.”</span></p>

        <div className='d-flex justify-content-end pe-2 pb-1'>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>


      <div className='row'>
t
        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={s1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={j1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={ts1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={sh1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={jk1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={s1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={j1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={ts1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={sh1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={jk1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={s1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={j1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={ts1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={sh1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={jk1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={s1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={j1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={ts1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={sh1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={jk1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={s1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={j1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={ts1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={sh1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

        <div className=' col text-center p-1 mb-2'>
            <img className='items ' src={jk1} alt="" />
            <h6>DNMX</h6>
            <small>Men Double pocket Shirt</small>
            <p>&#8377; 757 <font>&#8377;2.045</font></p>
            <button className=' btn btn-outline-danger'>BUY</button> <br />
            <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
        </div>

      </div>

    </div>


  )
}

export default MenPage