import React from 'react';
import ReactStarts from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link to='product/:id' className='product-card position-relative'>
              <div className='product-whislist position-absolute'>
                <Link to="/"> <img className='img-fluid' src='images/Favourite-small.svg' alt='addcart'/></Link>
              </div>

              <div className='product-img size-img-product-1'>
                  <img className='img-fluid'src='images/Product-img-1.jpg' alt='product img'/>
              </div>
              
              <div className='product-details'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406</h5>
                  <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className='product-price'>$ 730,000</p>
              </div>

              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to="/"> <img src='images/View.svg' alt='addcart'/></Link>
                  <Link to="/"> <img src='images/Cart-add.svg' alt='addcart'/></Link>
                </div>  
              </div>
          </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link className='product-card position-relative'>
              <div className='product-whislist position-absolute'>
                <Link to="/"> <img className='img-fluid' src='images/Favourite-small.svg' alt='addcart'/></Link>
              </div>

              <div className='product-img'>
                  <img className='img-fluid'src='images/Product-img-1.jpg' alt='product img'/>
              </div>
              
              <div className='product-details'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406</h5>
                  <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className='product-price'>$ 730,000</p>
              </div>

              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to="/"> <img src='images/View.svg' alt='addcart'/></Link>
                  <Link to="/"> <img src='images/Cart-add.svg' alt='addcart'/></Link>
                </div>  
              </div>
          </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link className='product-card position-relative'>
              <div className='product-whislist position-absolute'>
                <Link to="/"> <img className='img-fluid' src='images/Favourite-small.svg' alt='addcart'/></Link>
              </div>

              <div className='product-img'>
                  <img className='img-fluid'src='images/Product-img-1.jpg' alt='product img'/>
              </div>
              
              <div className='product-details'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406 </h5>
                  <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className={`short-description ${grid === 12 ? "d-block" : "d-none"}`}>Texto inicial del producto Texto inicial del producto Texto inicial del producto Texto inicial del producto Texto inicial del producto</p>
                  <p className='product-price'>$ 730,000</p>
              </div>

              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to="/"> <img src='images/View.svg' alt='addcart'/></Link>
                  <Link to="/"> <img src='images/Cart-add.svg' alt='addcart'/></Link>
                </div>  
              </div>
          </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link className='product-card position-relative'>
              <div className='product-whislist position-absolute'>
                <Link to="/"> <img className='img-fluid' src='images/Favourite-small.svg' alt='addcart'/></Link>
              </div>

              <div className='product-img'>
                  <img className='img-fluid'src='images/Product-img-1.jpg' alt='product img'/>
              </div>
              
              <div className='product-details'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406</h5>
                  <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className='product-price'>$ 730,000</p>
              </div>

              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to="/"> <img src='images/View.svg' alt='addcart'/></Link>
                  <Link to="/"> <img src='images/Cart-add.svg' alt='addcart'/></Link>
                </div>  
              </div>
          </Link>
      </div>

      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
          <Link className='product-card position-relative'>
              <div className='product-whislist position-absolute'>
                <Link to="/"> <img className='img-fluid' src='images/Favourite-small.svg' alt='addcart'/></Link>
              </div>

              <div className='product-img'>
                  <img className='img-fluid'src='images/Product-img-1.jpg' alt='product img'/>
              </div>
              
              <div className='product-details'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406 Luis Felipe Baquero Lombana</h5>
                  <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className='product-price'>$ 730,000</p>
              </div>

              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to="/"> <img src='images/View.svg' alt='addcart'/></Link>
                  <Link to="/"> <img src='images/Cart-add.svg' alt='addcart'/></Link>
                </div>  
              </div>
          </Link>
      </div>
    </>
  )
}

export default ProductCard