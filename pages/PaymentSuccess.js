import Layout from '@components/Layouts/Layout';
import React, { useEffect, useState } from 'react'

function PaymentSuccess({ }) {

    useEffect(() => {
        localStorage.removeItem('order_id');
    }, []);

    return (
        <Layout>
            <div className='popup-success'>
                <div className='popup'>
                    <h2 className='text-center'>Thank You !</h2>
                    <i className="fa-solid fa-check"></i>
                    <a href="/order-history" >Go to Order</a>
                </div>
            </div>
        </Layout>
    )
}

export default PaymentSuccess
