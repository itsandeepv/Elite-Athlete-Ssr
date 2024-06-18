import Layout from '@components/Layouts/Layout';
import React, { useEffect, useState } from 'react'

function PaymentFailed({ }) {

    useEffect(() => {
        localStorage.removeItem('order_id');
    }, []);


    return (
        <Layout>
            <div className='popup-success popup-failed'>
                <div className='popup'>
                    <h2>Payment Failed</h2>
                    <i className="fa-solid fa-cancel"></i>
                    <a href="/" >Go back to Home</a>
                </div>
            </div>
        </Layout>
    )
}

export default PaymentFailed
