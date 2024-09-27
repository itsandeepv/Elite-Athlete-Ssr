import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import c from "@constants/Common";
import ShopebyGoal from '@components/ShopebyGoal';
import TopdealSection from '@components/TopdealSection';
import ProductSlide from '@components/ProductContent/ProductSlide';
import TopBrandsSection from '@components/TopBrandsSection';
import Layout from '@components/Layouts/Layout';
import { baseUrl } from '@utils/urls';
import HomeBanner from '@components/ProductContent/HomeBanner';
import axios from 'axios';
import TopBrands from '@components/Modal/TopBrands';
const HomePage = ({ topdealdata, homeBannerdata, shopbydata, starsdata }) => {
    const [productSection, setProductSection] = useState(shopbydata || []);
    const [loading, setLoading] = useState(true);
    // console.log(topdealdata, homeBannerdata, shopbydata, starsdata);
    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);
    }, []);
    
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/get-product-sections-with-item-count`);
            if (res.status === 200) {
                setProductSection(res.data.result);
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

   
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{`Home - ${c.APP_NAME}`}</title>
                <meta name="description" content="Suppkart offers premium, 100% original gym supplements directly from global brands to customers in India. Shop top-quality supplements for bodybuilding, fitness, and endurance, guaranteed original and imported." />
                <meta name="keywords" content="Home" />
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Suppkart offers premium, 100% original gym supplements directly from global brands to customers in India. Shop top-quality supplements for bodybuilding, fitness, and endurance, guaranteed original and imported." />
                <meta property="og:url" content={c.BASE_URL} />
                <meta property="og:site_name" content={c.APP_NAME} />
                <meta property="og:image" content={`${c.BASE_URL}/assets/images/logo.png`} />
                <link rel="canonical" href={`${c.BASE_URL}`} />
            </Head>
            <Layout>
                {homeBannerdata && topdealdata && productSection && starsdata ?
                    <React.Fragment>
                        <HomeBanner homeBannerdata={homeBannerdata} />
                        <TopdealSection topdealdata={topdealdata} />
                        <ShopebyGoal productSection={productSection[0]} />
                        <ProductSlide />
                        {productSection.slice(1).map((item) => (
                            <ShopebyGoal key={item.id} productSection={item} />
                        ))}
                        <TopBrandsSection starsdata={starsdata} />
                        <TopBrands />
                    </React.Fragment> : ""
                }
            </Layout>
        </React.Fragment>
    );
}

export async function getServerSideProps() {

    let homeBannerdata ;
    let topdealdata ;
    let shopbydata ;
    let starsdata;
    let isLoad = true;
    await axios.get(`${baseUrl}/api/get-slider`).then((res) => {
        if (res.status == 200) {
            homeBannerdata = res.data.result||[]
        }
        isLoad = false
    }).catch((err) => { 
        isLoad = false
        console.log(err)
     })
    await axios.get(`${baseUrl}/api/get-all-products-by-top-deal`).then((res) => {
        topdealdata = res.data.result||[]
    }).catch((err) => { console.log(err); })
    await axios.get(`${baseUrl}/api/get-sport-stars`).then((res) => {
        starsdata = res.data.result ||[]
    }).catch((err) => { console.log(err); })
    try {
        const res = await axios.get(`${baseUrl}/api/get-product-sections-with-item-count`);
        if (res.status === 200) {
            shopbydata = res.data.result || []
        }
    } catch (err) {
        console.log(err);
    }
   
    return { props: { homeBannerdata, topdealdata, shopbydata, starsdata ,isLoad } }
}



export default HomePage;