import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from "styled-components";
import c from "@constants/Common";
import colors from '@constants/Colors';
import Layout from '@components/Layouts/Layout';

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{`Home - `}</title>
                <meta name="description" content="Home" />
                <meta name="keywords" content="Home" />
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Home Page" />
                <link rel="stylesheet" href={`${c.BASE_URL}/styles/styles.css`} />
                <link rel="stylesheet" href={`${c.BASE_URL}/styles/responsive.css`} />
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
export default Landing;