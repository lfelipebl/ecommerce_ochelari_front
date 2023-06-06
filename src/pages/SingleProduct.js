import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';

const SingleProduct = () => {
  return (
    <>
        <Meta title={'Inicio-de-sesión'}/>
        <BreadCrumb title='Inicio-de-sesión'/>

        <div className='main-product-wrapper py-5 home-wrapper-2'>
            
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'></div>
                </div>
            </div>

            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='bg.white p-3'>
                            <h4>Descripción</h4>
                            <p className=''>lorem</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default SingleProduct