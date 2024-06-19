import React from 'react'

function Breadcrums({ breadcumsDetails }) {
    return (
        <div className='breadcums py-3 d-lg-flex align-items-center justify-content-between'>
            <ul className='m-0 py-2 pl-0 d-flex gap-1'>
                {
                    breadcumsDetails?.map((item, index) => {
                        return (
                            <li key={index} >
                                <a className='light-gray' href={item?.path}>{item?.title} {breadcumsDetails?.length == index+1 ? "":"/"}  </a>
                            </li>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default Breadcrums