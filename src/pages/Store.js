import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import ProductCard from '../components/ProductCard.js';

const Store = () => {

    const [grid, setGrid] = useState(4);
    return (
    <>
        <Meta title={'Store'}/>
        <BreadCrumb title='Store'/>

        {/* Wrapper store*/}
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>

                    {/* Filter*/}
                    <div className='col-3'>

                        {/* Categoría de producto*/}
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Categoría</h3>
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


                        {/* Marcas*/} 
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Marcas</h3>
                            <ul className=''>
                            </ul>
                        </div>

                        {/* Filter by*/}
                        <div className='filter-card mb-3'>
                           <div><h3 className='filter-title'>Filtrar por</h3></div>

                            {/* Price*/}
                            <div><h5 className='filter-subtitle'>Precio</h5></div>
                            <div className='filter-price d-flex align-items-center gap-10'>
                                <div className='mb-3'>
                                    <input className='form-control py-1' type='email' placeholder='' id='floatingInput'/>
                                    <label htmlFor='floatingInput'></label>
                                </div>
                                <div className='mb-3'>
                                    <input className='form-control py-1' type='email' placeholder='' id='floatingInput1'/>
                                    <label htmlFor='floatingInput1'></label>
                                </div>
                            </div>

                            {/* Price*/}
                            <div><h5 className='filter-subtitle'>Color</h5></div>
                            <div>
                                <ul className='colors ps-0 d-flex flex-wrap gap-10'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>


                        {/* TAGs*/}
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Etiqueta</h3>
                            <div className='product-tag d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge text-secondary rounded-3 py-2'>New In</span>
                                <span className='badge text-secondary rounded-3 py-2 px-3'>Verano</span>
                                <span className='badge text-secondary rounded-3 py-2 px-3'>Abril</span>
                                <span className='badge text-secondary rounded-3 py-2 px-3'>Día mamá</span>
                            </div>
                        </div>

                    </div>

                    {/* Filter sort*/}
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=' d-flex align-items-center gap-10'>
                                    <div className='mb-0 d-block' style={{width:"115px"}}>Ordenar por:</div>
                                    <select name='' className='form-control form-select' id="">
                                        <option value="price-des">Precio de mayor a menor</option>
                                        <option value="price-asc">Precio de menor a mayor</option>
                                        <option value="best-selling">Los más vendidos</option>
                                        <option value="sale">Descuentos</option>
                                    </select>
                                </div>

                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalProducts mb-0'>21 productos</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img 
                                            onClick={()=>{setGrid(3);}}
                                            src='images/gr4.svg'
                                            className='d-block img-fluid'
                                            alt='grid'/>
                                        <img 
                                            onClick={()=>{setGrid(4);}}
                                            src='images/gr3.svg'
                                            className='d-block img-fluid'
                                            alt='grid'/>
                                        <img 
                                            onClick={()=>{setGrid(6);}}
                                            src='images/gr2.svg'
                                            className='d-block img-fluid'
                                            alt='grid'/>
                                        <img 
                                            onClick={()=>{setGrid(12);}}
                                            src='images/gr1.svg'
                                            className='d-block img-fluid'
                                            alt='grid'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Store