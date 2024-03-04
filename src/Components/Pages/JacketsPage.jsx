import React from 'react'
import { useState } from 'react';

import jk1 from '../Images/Jackets/jk1.avif'
import jk2 from '../Images/Jackets/jk2.avif'
import jk3 from '../Images/Jackets/jk3.avif'
import jk4 from '../Images/Jackets/jk4.avif'
import jk5 from '../Images/Jackets/jk5.avif'
import jk6 from '../Images/Jackets/jk6.avif'
import jk7 from '../Images/Jackets/jk7.avif'
import jk8 from '../Images/Jackets/jk8.avif'
import jk9 from '../Images/Jackets/jk9.avif'
import jk10 from '../Images/Jackets/jk10.avif'
import jk11 from '../Images/Jackets/jk11.avif'
import jk12 from '../Images/Jackets/jk12.avif'
import jk13 from '../Images/Jackets/jk13.avif'
import jk14 from '../Images/Jackets/jk14.avif'
import jk15 from '../Images/Jackets/jk15.avif'
import jk16 from '../Images/Jackets/jk16.avif'
import jk17 from '../Images/Jackets/jk17.avif'
import jk18 from '../Images/Jackets/jk18.avif'
import jk19 from '../Images/Jackets/jk19.avif'
import jk20 from '../Images/Jackets/jk20.avif'



function JacketsPage() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

  return (
    <div className='container-fluid'>

        <div className='row'>

            <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Jackets</p>

            <div className='d-flex justify-content-end pe-2 pb-1'>
                <h6 className='text-start cap inames me-5'>“Mastering the art of effortless style.”</h6>
                
                <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
                <p>{count}</p>

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
                <img className='items ' src={jk2} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk3} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk4} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk5} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk7} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk8} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk9} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk10} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk11} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk12} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk13} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk14} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk15} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk16} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk17} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk18} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk19} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={jk20} alt="" />
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

export default JacketsPage