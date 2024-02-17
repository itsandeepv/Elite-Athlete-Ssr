import Breadcrums from '@components/Breadcrums/Breadcrums'
import ProductCard from '@components/Cards/ProductCard'
import Layout from '@components/Layouts/Layout'
import React, { useState } from 'react'

function Product() {
    const [tabs, settabs] = useState(1)
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Weight Loss",
            path: "/"
        },
    ]
    return (
        <React.Fragment>
            <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrums breadcumsDetails={breadcumsDetails} />
                    </div>
                </div>
            </div>
                <div className="product-items">
                    <div className="container-fluid heading-main">
                        <h3>Weight Loss</h3>
                    </div>
                    <div className="container-fluid main-cont">
                        
                        <div className="filter-sec">
                            <h6>Filter</h6>
                            <p className='head'>BRAND</p>
                            <label htmlFor="check1"><input type="checkbox" name="check1" id="check1" /> <span>Lousis Philippe(10)</span></label>
                            <label htmlFor="check2"><input type="checkbox" name="check2" id="check2" /> <span>Lousis Philippe(10)</span></label>
                            <label htmlFor="check3"><input type="checkbox" name="check3" id="check3" /> <span>Lousis Philippe(10)</span></label>
                            <p className='head'>PRICE</p>
                            <label htmlFor="check4"><input type="checkbox" name="check4" id="check4" /> <span>Rs. 300 to Rs. 1000 (5)</span></label>
                            <label htmlFor="check5"><input type="checkbox" name="check5" id="check5" /> <span>Rs. 300 to Rs. 1000 (5)</span></label>
                            <label htmlFor="check6"><input type="checkbox" name="check6" id="check6" /> <span>Rs. 300 to Rs. 1000 (5)</span></label>
                            <p className='head'>DISCOUNT RANGE</p>
                            <label htmlFor="check7"><input type="checkbox" name="check7" id="check7" /> <span>10% and above</span></label>
                            <label htmlFor="check8"><input type="checkbox" name="check8" id="check8" /> <span>10% and above</span></label>
                            <label htmlFor="check9"><input type="checkbox" name="check9" id="check9" /> <span>10% and above</span></label>
                        </div>
                        <div className="all-items">
                        
                            <div className="sel-container">
                                <span>Sort by :</span>
                                <select>
                                    <option value="1">Recommended</option>
                                    <option value="2">Recommended2</option>
                                    <option value="3">Recommended3</option>
                                </select>
                            </div>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Product
