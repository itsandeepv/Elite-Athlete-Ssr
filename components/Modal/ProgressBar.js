import moment from 'moment';
import React from 'react'

function ProgressBar({ itemData,shipped, outOfDelivery, delivered }) {

    console.log(itemData , "<<<<<<<<itemData");
    
    return (
        <div className="progress-bar container-fluid">
            <div className="tracking-title">
                <div className="point" id="order-placed">Order Placed</div>
                <div className={`point ${shipped ? 'active' : ''}`} id="shipped">Shipped</div>
                <div className={`point ${outOfDelivery ? 'active' : ''}`} id="out-delivery">Out of Delivery</div>
                <div className={`point ${delivered ? 'active' : ''}`} id="delivered">Delivered</div>
            </div>
            <div className="tracking-bar">
                <div className={`one ${shipped || outOfDelivery || delivered ? 'active' : ''}`}></div>
                <div className={`two ${outOfDelivery || delivered ? 'active' : ''}`}></div>
                <div className={`three ${delivered ? 'active' : ''}`}></div>
            </div>
            <div className="tracking-date">
                <div className="date">{moment(itemData?.order_date).calendar()}</div>
                <div className="date">Wed, 13th Sep</div>
                <div className="date">Wed, 13th Sep</div>
                <div className="date">Thu, 14th Sep</div>
            </div>
        </div>
    );
}

export default ProgressBar
