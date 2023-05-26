import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';

const Wishlist = () => {
  return (
    <>
      <Meta title={'Favoritos'}/>
      <BreadCrumb title='Favoritos'/>

      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img src='images/Cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                <div className='wishklist-card-img'>
                  <img className='img-fluid w-100' src='images/Product-img-1.jpg' alt='Img-whishlist'/>
                </div>
                <div className='bg-white'>
                  <h6 className='product-brand'>Oackley</h6>
                  <h5 className='product-reference'>Sutro 0OO9406</h5>
                  <p className='product-price'>$ 730,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Wishlist