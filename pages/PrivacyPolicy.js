import React, { useEffect, useState } from 'react'
import { baseUrl } from '../utils/urls'
import axios from 'axios'
import Layout from '@components/Layouts/Layout';
import Breadcrums from '@components/Breadcrums/Breadcrums';
import PropTypes from 'prop-types';

function PrivacyPolicy({pageDataS}) {
    const urlParams = new URLSearchParams(window.location.search);
    const pagename = urlParams.get('pagename');
    const [pageData, setpageData] = useState(pageDataS|| {})
    // console.log(pageDataS, "<<<<<window.pageDataS" ,pageData);
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: pageData?.title,
            path: "#"
        },
    ]

    return (
        <Layout>
            <div className='row container-fluid'>
                <div className='col'>
                    <Breadcrums breadcumsDetails={breadcumsDetails} />
                </div>
            </div>
            <div className='container-fluid d-flex align-items-center '>
                <div className='banner-container mb-4 bg-blue w-100'>
                    <h2 className='text-light py-2 text-center w-100' >{pageData?.title}</h2>
                </div>
            </div>
            <div className='container-fluid' style={{ position: "relative",minHeight:"300px" }}>
                <div>
                    {/* {!pageData &&
                        <LoaderSmall />
                    } */}
                    <div className='priv-policy'>
                        <div
                            dangerouslySetInnerHTML={{ __html: pageData?.content }}
                        ></div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

PrivacyPolicy.propTypes = {
    pagename: PropTypes.string,
  };
  


export async function getServerSideProps(context) {
    const { query } = context;
    const pagename = query.pagename || '';
    var pageDataS;
    await axios.get(baseUrl + "/api/get-all-pages").then((res) => {
        if (res.data?.responseCode == 200) {
            pageDataS = res.data?.result?.find((item) => item?.slug == pagename)  
        }
    }).catch((err) => {
        console.log(err);
    })
        return { props: { pageDataS } }
}

export default PrivacyPolicy