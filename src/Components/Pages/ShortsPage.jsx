import React from 'react'
import { useState } from 'react';

import sh1 from '../Images/Shorts/sh1.avif'
import sh2 from '../Images/Shorts/sh2.avif'
import sh3 from '../Images/Shorts/sh3.avif'
import sh4 from '../Images/Shorts/sh4.avif'
import sh5 from '../Images/Shorts/sh5.avif'
import sh6 from '../Images/Shorts/sh6.avif'
import sh7 from '../Images/Shorts/sh7.avif'
import sh8 from '../Images/Shorts/sh8.avif'
import sh9 from '../Images/Shorts/sh9.avif'
import sh10 from '../Images/Shorts/sh10.avif'
import sh11 from '../Images/Shorts/sh11.avif'
import sh12 from '../Images/Shorts/sh12.avif'
import sh13 from '../Images/Shorts/sh13.avif'
import sh14 from '../Images/Shorts/sh14.avif'
import sh15 from '../Images/Shorts/sh15.avif'
// import sh16 from '../Images/Shorts/sh16.avif'
// import sh17 from '../Images/Shorts/sh17.avif'
// import sh18 from '../Images/Shorts/sh18.avif'
// import sh19 from '../Images/Shorts/sh19.avif'
// import sh20 from '../Images/Shorts/sh20.avif'


function ShortsPage() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

  return (
    <div className='container-fluid'>

        <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Shorts</p>

        <div className='d-flex justify-content-end pe-2 pb-1'>

        <h6 className='text-start cap inames me-5'>“Leaving a mark with my impeccable style.”</h6>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>

        <div className='row'>
            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh1} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh2} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh3} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh4} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh5} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh7} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh8} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh9} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh10} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh11} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh12} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh13} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh14} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh15} alt="" />
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
                <img className='items ' src={sh2} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh3} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh4} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={sh5} alt="" />
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

export default ShortsPage