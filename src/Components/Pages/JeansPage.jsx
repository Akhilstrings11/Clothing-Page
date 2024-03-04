import React from 'react'
import { useState } from 'react';

import j1 from '../Images/Jeans/j1.avif'
import j2 from '../Images/Jeans/j2.avif'
import j3 from '../Images/Jeans/j3.avif'
import j4 from '../Images/Jeans/j4.avif'
import j5 from '../Images/Jeans/j5.avif'
import j6 from '../Images/Jeans/j6.avif'
import j7 from '../Images/Jeans/j7.avif'
import j8 from '../Images/Jeans/j8.avif'
import j9 from '../Images/Jeans/j9.avif'
import j10 from '../Images/Jeans/j10.avif'
import j11 from '../Images/Jeans/j11.avif'
import j12 from '../Images/Jeans/j12.avif'
import j13 from '../Images/Jeans/j13.avif'
import j14 from '../Images/Jeans/j14.avif'
import j15 from '../Images/Jeans/j15.avif'
import j16 from '../Images/Jeans/j16.avif'
import j17 from '../Images/Jeans/j17.avif'
import j18 from '../Images/Jeans/j18.avif'
import j19 from '../Images/Jeans/j19.avif'
import j20 from '../Images/Jeans/j20.avif'


function JeansPage() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };


  return (
    <div className='container-fluid'>

        <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Jeans</p>

        <div className='d-flex justify-content-end pe-2 pb-1'>

        <h6 className='text-start cap inames me-5'>“Life’s too short to wear boring clothes!”</h6>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>

        
        <div className='row'>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j1} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={j2} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={j3} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j4} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j5} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j7} alt="" />
                <h6>U.S.Polo</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j8} alt="" />
                <h6>H&M</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j9} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j10} alt="" />
                <h6>Here&Now</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j11} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j12} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j13} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j14} alt="" />
                <h6>Mast&Harbour</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j15} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j16} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j17} alt="" />
                <h6>Indian Garrage.co</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j18} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j19} alt="" />
                <h6>Denim</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={j20} alt="" />
                <h6>Zudio</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

        </div>
    </div>
  )
}

export default JeansPage