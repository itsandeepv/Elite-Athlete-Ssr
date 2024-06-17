import { getCategoryBySection } from '@redux/actions/categoryBySectionActions';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

function Sidebar({ setopenSidebar }) {
    const dispatch = useDispatch()
    const { brandData } = useSelector((state) => state)
    const { categoryData } = useSelector((state) => state)
    const { categoryBySectionData } = useSelector((state) => state)
    const [showSidebar, setShowSidebar] = useState(false)
    const [showSidebar2, setShowSidebar2] = useState(false)
    const [showSidebar3, setShowSidebar3] = useState({})
    useEffect(() => {
        dispatch(getCategoryBySection("/api/get-category-by-section"))
    }, [])
    return (
        <div className="main-sidebar">
            <div className="logo" >
                <img src="assets/icons/footer-logo.svg" alt="logo" className="logo-img" />
                <i className="fa-solid fa-x" onClick={() => { setopenSidebar(false) }}></i>
            </div>
            <ul className="main-list">

                <li className={`has-dropdown ${showSidebar ? "showSidebar" : ""}`} onClick={() => { setShowSidebar(!showSidebar) }}>
                    <a href="#" className='main-a'><span>Brands</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    {brandData?.brandData?.brands?.map((item, index) => (
                        <ul key={index} >
                            <li><a href={`/all-product?type=brand&id=${item?.id}`}>{item.name}</a></li>
                        </ul>
                    ))}
                </li>
                <li className={`has-dropdown ${showSidebar2 ? "showSidebar" : ""}`} onClick={() => { setShowSidebar2(!showSidebar2) }}>
                    <a href="#" className='main-a'><span>Categories</span> <span><i className="fa-solid fa-chevron-down"></i></span></a>
                    {categoryData?.categoryData?.map((item, index) => (
                        <ul key={index} >
                            <li><a href={`/all-product?type=category&id=${item?.id}`}>{item.name}</a></li>
                        </ul>
                    ))}
                </li>
                {categoryBySectionData?.categoryBySectionData?.map((item, index) => (
                    <li className={`has-dropdown ${showSidebar3[`showSidebar3${index}`] ? "showSidebar" : ""}`} onClick={() => {
                        setShowSidebar3(() => ({
                            [`showSidebar3${index}`]: showSidebar3[`showSidebar3${index}`] && showSidebar3[`showSidebar3${index}`] == true ? false : true
                        }))
                    }} key={index}>
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

            </ul>
        </div>
    )
}

export default Sidebar
