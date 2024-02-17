import React from 'react';
import Head from 'next/head';
import styled from "styled-components";
import c from '@constants/Common';
import colors from '@constants/Colors';
const NotFoundWrap = styled.div`
    max-width:${c.width};margin:0 auto;padding:40px 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;box-sizing:border-box;
    & p{margin:0;font-size:18px;color:${colors.black};}
`;
const NotFound = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <React.Fragment>
                <NotFoundWrap>
                    <p>We are Sorry. The Page You're Looking for Can't be Found.</p>
                </NotFoundWrap>
            </React.Fragment>
        </React.Fragment>
    );
}
export default NotFound;