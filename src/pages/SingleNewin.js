import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';

const SingleNewin = () => {
  return (
    <>
        <Meta title={'Noticia'}/>
        <BreadCrumb title='Noticia'/>

        <div className='new-wrapper home-wrapper-2 py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/new-in' className='d-flex align-items-center gap-10'>
                                <img src='/images/arrow.svg' alt='arrow'/>
                                 Volver a noticias
                            </Link>
                            <h3 className='title'>¿Quieres que tus gafas sean alusinantes?</h3>
                            <img src='/images/blog-img-1.jpg' className='img-fluid w-100 my-4' alt='single-blog'/> 
                            <p>Prueba nuestras gafas con efecto 3D Gafas que ya no son lisas ni planas y cobran vida con diferentes tonalidades creadas por la perspectiva.Precisión, innovación y compromiso son solo algunos de los sentimientos que han despertado. ¿Deseas descubrir más información sobre esta tendencia tridimensional?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleNewin