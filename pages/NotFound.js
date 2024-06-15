import Layout from '@components/Layouts/Layout'
import React from 'react'

function NotFound() {
  return (
    <Layout>
    <div className='not-found' style={{Width:"100%" , overflow:"hidden"}}>
      <img src="assets/images/page-not-found.webp" alt="" style={{maxHeight:"400px"}} />
      <p className='my-3 text-center'>Unfortunately the page you are looking for has been moved or deleted</p>
      <a href="/">GO TO HOMEPAGE</a>
    </div>
    </Layout>
  )
}

export default NotFound
