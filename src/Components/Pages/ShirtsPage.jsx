
import React, { useState } from 'react'

import '../Pages/PagesStyle.css'

import s1 from '../Images/Shirts/s1.avif'
import s2 from '../Images/Shirts/s2.avif'
import s3 from '../Images/Shirts/s3.avif'
import s4 from '../Images/Shirts/s4.avif'
import s5 from '../Images/Shirts/s5.avif'
import s6 from '../Images/Shirts/s6.avif'
import s7 from '../Images/Shirts/s7.avif'
import s8 from '../Images/Shirts/s8.avif'
import s9 from '../Images/Shirts/s9.avif'
import s10 from '../Images/Shirts/s10.avif'
import s11 from '../Images/Shirts/s11.avif'
import s12 from '../Images/Shirts/s12.avif'
import s13 from '../Images/Shirts/s13.avif'
import s14 from '../Images/Shirts/s14.avif'
import s15 from '../Images/Shirts/s15.avif'
import s16 from '../Images/Shirts/s16.avif'
import s17 from '../Images/Shirts/s17.avif'
import s18 from '../Images/Shirts/s18.avif'
import s19 from '../Images/Shirts/s19.avif'
import s20 from '../Images/Shirts/s20.avif'



function ShirtsPage() {


    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  

  return (

    <div className='container-fluid'>

        <p className='h4 inames ps-4 text-decoration-underline fw-bold'>Shirts</p>

        <div className='d-flex justify-content-end pe-2 pb-1'>

        <h6 className='text-start cap inames me-5'>“Walking the streets like it’s my runway.”</h6>
            
            <svg className=' ' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <p>{count}</p>

        </div>

        <div className='row'>
          
            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s1} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s2} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s3} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s4} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s5} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s7} alt="" />
                <h6>U.S.Polo</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s8} alt="" />
                <h6>H&M</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s9} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s10} alt="" />
                <h6>Here&Now</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s11} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s12} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s13} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s14} alt="" />
                <h6>Mast&Harbour</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s15} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s16} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s17} alt="" />
                <h6>Indian Garrage.co</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s18} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s19} alt="" />
                <h6>Denim</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s20} alt="" />
                <h6>Zudio</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s3} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s4} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s5} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s7} alt="" />
                <h6>U.S.Polo</h6>
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

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s2} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s3} alt="" />
                <h6>Adidas</h6>
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

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s2} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center  p-1 mb-2'>
                <img className='items ' src={s3} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s4} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s5} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s6} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s7} alt="" />
                <h6>U.S.Polo</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s8} alt="" />
                <h6>H&M</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s9} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s10} alt="" />
                <h6>Here&Now</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s11} alt="" />
                <h6>Adidas</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s12} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s13} alt="" />
                <h6>Highlander</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s14} alt="" />
                <h6>Mast&Harbour</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s15} alt="" />
                <h6>Zara</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s16} alt="" />
                <h6>Nike</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s17} alt="" />
                <h6>Indian Garrage.co</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s18} alt="" />
                <h6>DNMX</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s19} alt="" />
                <h6>Denim</h6>
                <small>Men Double pocket Shirt</small>
                <p>&#8377; 757 <font>&#8377;2.045</font></p>
                <button className=' btn btn-outline-danger'>BUY</button> <br />
                <button className=' btn btn-outline-secondary' onClick={handleIncrement} >Add to Cart</button>
            </div>

            <div className=' col text-center p-1 mb-2'>
                <img className='items ' src={s20} alt="" />
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

export default ShirtsPage