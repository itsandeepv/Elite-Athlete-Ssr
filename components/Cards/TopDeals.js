import React from 'react'

function TopdealsCard() {
  return (
    <div className="top-deals p-2">
        <div className="item-slider px-2">
          <div className="left">
            <p className='cap'>500mg - 200 vcaps</p>
            <h5>Quercetion</h5>
            <p>Rs. 5,000 <span>Rs. 10,000</span></p>
            <div className="rate">
              <p>50% off</p>
              <p>Save Rs.5,000</p>
            </div>
            <a href="#">View Product <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="right">
            <div className="bg"></div>
            <img src="assets/images/top-deal-1.png" alt="img" />
          </div>
        </div>
    </div>
  )
}

export default TopdealsCard
