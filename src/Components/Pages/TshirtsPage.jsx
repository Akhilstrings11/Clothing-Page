import React from 'react'

import { useState } from 'react'

import ts1 from '../Images/TShirts/ts1.avif'
import ts2 from '../Images/TShirts/ts2.avif'
import ts3 from '../Images/TShirts/ts3.avif'
import ts4 from '../Images/TShirts/ts4.avif'
import ts5 from '../Images/TShirts/ts5.avif'
import ts6 from '../Images/TShirts/ts6.avif'
import ts7 from '../Images/TShirts/ts7.avif'
import ts8 from '../Images/TShirts/ts8.avif'
import ts9 from '../Images/TShirts/ts9.avif'
import ts10 from '../Images/TShirts/ts10.avif'
import ts11 from '../Images/TShirts/ts11.avif'
import ts12 from '../Images/TShirts/ts12.avif'
import ts13 from '../Images/TShirts/ts13.avif'
import ts14 from '../Images/TShirts/ts14.avif'
import ts15 from '../Images/TShirts/ts15.avif'
import ts16 from '../Images/TShirts/ts16.avif'
import ts17 from '../Images/TShirts/ts17.avif'
import ts18 from '../Images/TShirts/ts18.avif'
import ts19 from '../Images/TShirts/ts19.avif'
import ts20 from '../Images/TShirts/ts20.avif'




function TshirtsPage() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

  return (
    <div className='container-fluid'>
        <div className='row'>

        <p className='h4 inames ps-4 text-decoration-underline fw-bold'>T-Shirts</p>

        <div className='d-flex justify-content-end pe-2 pb-1'>

            <h6 className='text-start cap inames me-5'>“Simplicity is the ultimate sophistication.”</h6>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>

          
          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts1} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts2} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts3} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts4} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts5} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts6} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts7} alt="" />
              <h6>U.S.Polo</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts8} alt="" />
              <h6>H&M</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts9} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts10} alt="" />
              <h6>Here&Now</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts11} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts12} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts13} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts14} alt="" />
              <h6>Mast&Harbour</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts15} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts16} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts17} alt="" />
              <h6>Indian Garrage.co</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts18} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts19} alt="" />
              <h6>Denim</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts20} alt="" />
              <h6>Zudio</h6>
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

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts2} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts3} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts4} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts5} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts6} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts7} alt="" />
              <h6>U.S.Polo</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts8} alt="" />
              <h6>H&M</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts9} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts10} alt="" />
              <h6>Here&Now</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts11} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts12} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts13} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts14} alt="" />
              <h6>Mast&Harbour</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts15} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts16} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts17} alt="" />
              <h6>Indian Garrage.co</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts18} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts19} alt="" />
              <h6>Denim</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts20} alt="" />
              <h6>Zudio</h6>
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

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts2} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center  p-1 mb-2'>
              <img className='items ' src={ts3} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts4} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts5} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts6} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts7} alt="" />
              <h6>U.S.Polo</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts8} alt="" />
              <h6>H&M</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts9} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts10} alt="" />
              <h6>Here&Now</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts11} alt="" />
              <h6>Adidas</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts12} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts13} alt="" />
              <h6>Highlander</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts14} alt="" />
              <h6>Mast&Harbour</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts15} alt="" />
              <h6>Zara</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts16} alt="" />
              <h6>Nike</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts17} alt="" />
              <h6>Indian Garrage.co</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts18} alt="" />
              <h6>DNMX</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts19} alt="" />
              <h6>Denim</h6>
              <small>Men Double pocket Shirt</small>
              <p>&#8377; 757 <font>&#8377;2.045</font></p>
              <button className=' btn btn-outline-danger'>BUY</button> <br />
              <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
          </div>

          <div className=' col text-center p-1 mb-2'>
              <img className='items ' src={ts20} alt="" />
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

export default TshirtsPage