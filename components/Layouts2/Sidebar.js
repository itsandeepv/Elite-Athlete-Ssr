import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategoryBySection } from '../../redux/actions/categoryBySectionActions';


function Sidebar({setopenSidebar}) {
    const dispatch = useDispatch()
    const { brandData } = useSelector((state) => state)
    const { categoryBySectionData } = useSelector((state) => state)

    useEffect(() => {
        dispatch(getCategoryBySection("/api/get-category-by-section"))
    }, [])

    console.log(brandData , "<<<<<<");

    return (
        <div className="main-sidebar">
            <div className="logo" >
                <img src="assets/icons/footer-logo.svg" alt="logo" className="logo-img" />
                <i className="fa-solid fa-x" onClick={()=>{setopenSidebar(false)}}></i>
            </div>
            <ul className="main-list">
                <li className='has-dropdown'>
                    <a href="#" className='main-a'><span>Brands</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    {brandData?.brandData?.brands.map((item, index) => (
                    <ul  key={index} >
                        <li><a href={`/all-product?type=brand&id=${item?.id}`}>{item.name}</a></li>
                    </ul>
                    ))}
                </li>
                {categoryBySectionData?.categoryBySectionData?.map((item, index) => (
    <li className='has-dropdown' key={index}>
        <a href="#" className='main-a'>
            <span>{item?.product_section_name}</span> 
            <span><i className="fa-solid fa-chevron-down"></i></span>
        </a>
        {item.categories?.map((cate, index) => (
            <ul key={index}>
                <li>
                    <a href={`/all-product?type=category&id=${cate?.id}`}>
                        {cate.name}
                    </a>
                </li>
            </ul>
        ))}
    </li>
))}


                {/* <li className='has-dropdown'>
                    
                    <a href="#" className='main-a'><span>Top 10</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                    
                    <a href="#" className='main-a'><span>Shop by Sports</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li>
                <li className='has-dropdown'>
                
                    <a href="#" className='main-a'><span>Top 15</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    <ul>
                        <li><a href="#">Brand1</a></li>
                        <li><a href="#">Brand2</a></li>
                        <li><a href="#">Brand3</a></li>
                        <li><a href="#">Brand4</a></li>
                    </ul>
                </li> */}
            </ul>
        </div>
    )
}

export default Sidebar
