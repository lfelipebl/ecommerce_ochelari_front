import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import BlogCard from '../components/BlogCard.js';

const Newin = () => {
  return (
    <>
        <Meta title={'New-in'}/>
        <BreadCrumb title='New-in'/>

        <div className='new-wrapper home-wrapper-2 py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        {/* Filtro*/}
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Busca por categoría</h3>
                            <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id=''/>
                                            <label className='form-check-label' htmlFor=''>Lentes de sol</label>     
                                        </div>          

                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id=''/>
                                            <label className='form-check-label' htmlFor=''>Lentes de vista</label>     
                                        
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id=''/>
                                            <label className='form-check-label' htmlFor=''>Accesorios</label>     
                                        
                                        </div>      
                            </div>
                        </div>
                    </div>

                    {/* News*/}
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div> 
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Newin