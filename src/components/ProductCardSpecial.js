import React from 'react';
import ReactStarts from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCardSpecial = () => {
  return (
    <div className='col-4 mb-3'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img classname='img-fluid' src='images/SpecialProduct-img-1.jpg' alt='product-special'/>
                </div>

                <div className='special-product-content'>

                    <h6 className='special-product-brand'>RAY•BAN</h6>
                    <h5 className='product-reference'>Clubmaster 0RB3016</h5>

                    <ReactStarts 
                    count={5}
                    value="4"
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                    />

                    <p className='product-price'>       
                        <span><strike>$ 930,000</strike><br />$ 730,000</span>
                    </p>

                    <Link className='button'>Comprar</Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCardSpecial