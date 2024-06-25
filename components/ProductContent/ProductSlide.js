import { baseUrl } from '@utils/urls'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductSlide() {

    const [silderData, setsliderData] = useState([])
    const fetchData = async () => {
        await axios.get(`${baseUrl}/api/get-banner`).then((res) => {
            setsliderData(res.data.result)
        }).catch((err) => {
        })
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div className="product-slide">
            <div className={`container-fluid items ${silderData?.length <= 2 && ""}`}>
                {
                    silderData?.map((item, index) => {
                        return (
                            <div className={`${(((index + 1) / 2) == 1) ? "a-product p-0" : "b-product p-0"} `} key={index}>
                                <img src={item?.banner_image ? baseUrl + "/" + item?.banner_image : "#"} alt={item?.alt_title} className=' img-fluid slider-banner-img' onClick={() => {
                                    window.location = item?.banner_url
                                }} />
                                {/* <div className="left">
                                    <p className="red">Get  Ready To Fight</p>
                                    <h5>TAKE ON THE DAY!</h5>
                                    <p>Explore our Eco-Friendly Protein Collection for a best body building energy</p>
                                </div>
                                <div className="right">
                                    <img src={baseUrl+"/"+item?.banner_image} alt="img" className='w-100' />
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductSlide
