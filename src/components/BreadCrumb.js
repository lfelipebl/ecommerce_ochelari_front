import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
    const { title } = props;
  return (
    <div className='breadcrumb home-wrapper-2 py-3 mb-0'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12 d-flex'>
                    <p className='text-breadcrumb mb-0'>
                        <Link to="/" className='text-breadcrumb'>
                        Home &nbsp; 
                        </Link>
                            / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb