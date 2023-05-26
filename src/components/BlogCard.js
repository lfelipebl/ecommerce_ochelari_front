import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-img-1.jpg' className='img-fluid w-100' alt='blog img'/>
            </div>
            <div className='blog-content'>
                <p className='blog-date'>23 Mayo, 2023</p>
                <h5 className='blog-title'>¿Quieres que tus gafas sean alusinantes?</h5>
                <p className='blog-desc'>Prueba nuestras gafas 3D. Gafas que ya no son lisas ni plaas y cobran vida con diferentes tonalidades creados por la perspectiva. </p>
                <Link to="/new-in/:id" className='button'>Leer mas</Link>  
            </div>
        </div>
  )
}

export default BlogCard