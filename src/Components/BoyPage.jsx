import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import b1 from './Images/Boys/k1.avif'
import b2 from './Images/Boys/k2.avif'
import b3 from './Images/Boys/k3.avif'
import b4 from './Images/Boys/k4.avif'
import b5 from './Images/Boys/k5.avif'
import b6 from './Images/Boys/k6.avif'
import b7 from './Images/Boys/k7.avif'
import b8 from './Images/Boys/k8.avif'
import b9 from './Images/Boys/k9.avif'
import b10 from './Images/Boys/k10.avif'
import b11 from './Images/Boys/k11.avif'
import b12 from './Images/Boys/k12.avif'
import b13 from './Images/Boys/k13.avif'
import b14 from './Images/Boys/k14.avif'
import b15 from './Images/Boys/k15.avif'
import b16 from './Images/Boys/k16.avif'
import b17 from './Images/Boys/k17.avif'
import b18 from './Images/Boys/k18.avif'
import b19 from './Images/Boys/k19.avif'
import b20 from './Images/Boys/k20.avif'
import b21 from './Images/Boys/f1.avif'
import b22 from './Images/Boys/f2.avif'
import b23 from './Images/Boys/f3.avif'
import b24 from './Images/Boys/f4.avif'
import b25 from './Images/Boys/f5.avif'
import b26 from './Images/Boys/f6.avif'
import b27 from './Images/Boys/f7.avif'
import b28 from './Images/Boys/f8.avif'
import b29 from './Images/Boys/f9.avif'
import b30 from './Images/Boys/f10.avif'
import b31 from './Images/Boys/f11.avif'
import b32 from './Images/Boys/f12.avif'
import b33 from './Images/Boys/f13.avif'
import b34 from './Images/Boys/f14.avif'
import b35 from './Images/Boys/f15.avif'
import b36 from './Images/Boys/f16.avif'
import b37 from './Images/Boys/f17.avif'
import b38 from './Images/Boys/f18.avif'
import b39 from './Images/Boys/f19.avif'
import b40 from './Images/Boys/f20.avif'




function BoyPage() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (

    <div className='container-fluid'>

      <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Boy's Page <span className='h6 text-cener ps-4 capp'>“Breaking fashion rules, setting new trends.”</span>
      </p>

      <div className='d-flex justify-content-end pe-2 pb-1'>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>

        <div className='row'>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b1} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b2} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b3} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b4} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b5} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b6} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b7} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b8} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b9} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b10} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b11} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b12} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b13} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b14} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b15} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b16} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b17} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b18} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b19} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b20} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b21} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b22} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b23} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b24} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b25} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b26} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b27} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b28} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b29} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b30} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b31} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b32} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b33} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b34} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b35} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b36} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b37} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b38} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b39} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={b40} alt="" />
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

export default BoyPage