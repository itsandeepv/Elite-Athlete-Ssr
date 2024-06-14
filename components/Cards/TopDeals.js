import { formatCurrency } from '@helpers/frontend'
import { baseUrl } from '@utils/urls'
import React from 'react'

function TopdealsCard({ details }) {

  return (
    <div className="top-deals p-2">
      <div className="complt px-2">
        <h5>{details?.product_name}</h5>
        <div className="item-slider">
          <div className="left">
            <p className='cap'></p>
            {
              details?.product_attributes?.length > 0 ?
                <small>{details?.product_attributes[0]?.attribute_name}</small> : ""

            }
            {
              details?.product_attributes.length > 0 ?
                <p>
                  {(details?.product_attributes[0]?.price != "0.00" && details?.product_attributes[0]?.old_price > "0.00") ? formatCurrency(Number(details?.product_attributes[0]?.price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.price),) : "")}
                  {(details?.product_attributes[0]?.old_price != "0.00" && details?.product_attributes[0]?.old_price > "0.00") ? <span>
                    {details?.product_attributes[0]?.old_price != "0.00" ? formatCurrency(Number(details?.product_attributes[0]?.old_price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.old_price),) : "")}
                  </span> : ""}
                </p>
                :
                <p>
                  {(details?.price != "0.00" && details?.price > "0.00") ? formatCurrency(Number(details?.price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.price),) : "")}
                  {(details?.old_price != "0.00" && details?.old_price > "0.00") ? <span>
                    {details?.old_price != "0.00" ? formatCurrency(Number(details?.old_price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.old_price),) : "")}
                  </span> : ""}
                </p>


            }
            {
              (details?.product_attributes.length > 0 && parseInt(details?.product_attributes[0]?.discount) > 0) ?
                <div className="rate">
                  <p>{details?.product_attributes[0]?.discount}% off</p>
                  <p>Save {(details?.product_attributes[0]?.price != "0.00" && details?.product_attributes[0]?.price > "0.00") ? formatCurrency(Number(details?.product_attributes[0]?.discounted_price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.old_price),) : "")}</p>
                </div> :
                (details?.product_attributes.length == 0 && parseInt(details?.discount) > 0) ?
                  <div className="rate">
                    <p>{details?.discount}% off</p>
                    <p>Save {(details?.price != "0.00" && details?.price > "0.00") ? formatCurrency(Number(details?.discounted_price),) : (details?.product_attributes?.length > 0 ? formatCurrency(Number(details?.product_attributes[0]?.old_price),) : "")}</p>
                  </div> : ""
            }
            {
            }
            {/* <NavLink to={} */}
            <a onClick={() => {
              window.location = `/product-details?id=${details?.id}${details?.product_attributes[0]?.attribute_name ? "&vrN=" + details?.product_attributes[0]?.attribute_name : ""}`
            }}
          >View Product <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="right">
          <div className="bg"></div>
          <img src={baseUrl + "/" + details?.thumbnail} alt="img" />
        </div>
      </div>
    </div>
    </div >
  )
}

export default TopdealsCard
