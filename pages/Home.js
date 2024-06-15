import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import c from "@constants/Common";
import colors from '@constants/Colors';
import ShopebyGoal from '@components/ShopebyGoal';
import TopdealSection from '@components/TopdealSection';
import ShopebySports from '@components/ShopebySports';
import ProductSlide from '@components/ProductContent/ProductSlide';
import TopBrandsSection from '@components/TopBrandsSection';
import TopStarsSection from '@components/TopStarsSection';
import Layout from '@components/Layouts/Layout';
import { baseUrl } from '@utils/urls';
import HomeBanner from '@components/ProductContent/HomeBanner';
import axios from 'axios';
import TopBrands from '@components/Modal/TopBrands';

const HomePage = ({ topdealdata, homeBannerdata, shopbydata ,starsdata }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // console.log(starsdata, "<<<<<<<<<<productSection");
    const [productSection, setProductSection] = useState(shopbydata || []);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/get-product-sections-with-item-count`);
            if (res.status === 200) {
                setProductSection(res.data.result);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{`Home - ${c.APP_NAME}`}</title>
                <meta name="description" content="Home" />
                <meta name="keywords" content="Home" />
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Home Page" />
                <meta property="og:url" content={c.BASE_URL} />
                <meta property="og:site_name" content={c.APP_NAME} />
                <meta property="og:image" content={`${c.BASE_URL}/assets/images/logo.png`} />
                <link rel="canonical" href={`${baseUrl}`} />
            </Head>
            <Layout>
                <HomeBanner homeBannerdata={homeBannerdata} />
                <TopdealSection topdealdata={topdealdata} />
                <ShopebyGoal productSection={productSection[0]} />
                <ProductSlide />
                {productSection.slice(1).map((item) => (
                    <ShopebyGoal key={item.id} productSection={item} />
                ))}
                <TopBrandsSection starsdata={starsdata} />
                <TopBrands />
            </Layout>
        </React.Fragment>
    );
}

export async function getServerSideProps() {

    let homeBannerdata;
    let topdealdata;
    let shopbydata;
    let starsdata;
    await axios.get(`${baseUrl}/api/get-slider`).then((res) => {
        if (res.status == 200) {
            homeBannerdata = res.data.result
        }
    }).catch((err) => { console.log(err) })
    await axios.get(`${baseUrl}/api/get-all-products-by-top-deal`).then((res) => {
        topdealdata = res.data.result
    }).catch((err) => { console.log(err); })
    await axios.get(`${baseUrl}/api/get-sport-stars`).then((res) => {
        starsdata = res.data.result
    }).catch((err) => { console.log(err); })
    try {
        const res = await axios.get(`${baseUrl}/api/get-product-sections-with-item-count`);
        if (res.status === 200) {
            shopbydata = res.data.result
        }
    } catch (err) {
        console.log(err);
    }
    // console.log(productSection ,res , "<<<<<<<productSection");
    return { props: { homeBannerdata, topdealdata, shopbydata ,starsdata } }
}



export default HomePage;