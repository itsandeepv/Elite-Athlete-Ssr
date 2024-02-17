import React from 'react'

function ProductCard() {
  return (
    <div className="item">
    <div className="img">
        <img src="assets/images/davai.png" alt="item-image" />
    </div>
    <a href='/product-details'>
    <div className="second-sec">
        <div className="rating">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span>5.0</span>
        </div>
        <p className="head">Full Spectrum</p>
        <p className='size'>500mg - 60 caps</p>
        <div className='rate'><p className="cross">Rs. 2500</p> <span>Rs. 2500</span></div>
    </div>
    </a>
</div>
  )
}

export default ProductCard
