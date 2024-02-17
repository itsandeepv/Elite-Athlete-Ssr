import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from "styled-components";
import c from "@constants/Common";
import colors from '@constants/Colors';
import ShopebyGoal from '@components/ShopebyGoal';
import TopdealSection from '@components/TopdealSection';
import ShopebySports from '@components/ShopebySports';
import ProductSlide from '@components/ProductContent/ProductSlide';
import TopBrandsSection from '@components/TopBrandsSection';
import TopStarsSection from '@components/TopStarsSection';
import Layout from '@components/Layouts/Layout';
const MainWrap = styled.div`
    background:${colors.white};text-align:center;padding:0 20px;font-size:20px;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;min-height:100vh;
    & img{max-width:300px;width:100%;}
    & h1{font-size:50px;font-weight:300;text-align:center;margin:0;}
    & p{font-weight:300;}
`;
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
                <link rel="canonical" href={`${c.BASE_URL}`} />
            </Head>
            <Layout>
                <ShopebyGoal />
                <TopdealSection />
                <ShopebySports />
                <ProductSlide />
                <TopBrandsSection />
                <TopStarsSection />
            </Layout>
        </React.Fragment>
    );
}
export default HomePage;