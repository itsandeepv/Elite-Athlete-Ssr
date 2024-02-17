import React from 'react'

function Breadcrums({ breadcumsDetails }) {
    return (
        <div className='breadcums py-3 d-lg-flex align-items-center justify-content-between'>
            <ul className='m-0 py-2 pl-0 d-flex gap-1'>
                {
                    breadcumsDetails?.map((item, index) => {
                        return (
                            <li key={index} >
                                <a className='light-gray' href={item?.path}>{item?.title}  / </a> 
                            </li>
                        )
                    })
                }
            </ul>
            <div className='d-flex gap-2'>
                <p className='bold-600 '><span className='bold-600 text-dark'>MY CART</span> - - - - - - - - - - - - - - </p>
                <p className='bold-600 light-gray'><span>Address</span> - - - - - - - - - - - - - -   </p>
                <p className='bold-600 light-gray'><span> Payment</span></p>
            </div>
        </div>
    )
}

export default Breadcrums