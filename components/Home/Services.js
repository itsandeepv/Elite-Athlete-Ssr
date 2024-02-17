import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
const Wraper = styled.div`
    & .container{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:15px;
        & .rt-row{
            display:flex;justify-content:center;gap:20px;padding:15px;
            & .rt-col{ 
                flex:1;
                & .rt-services{
                    text-align: center;
                    & .rt-col-img{border-radius: 50%;}
                    & .rt-services-heading{margin-bottom:8px;font-size:20px;line-height:25px;color:${Colors.blue};}
                    & .rt-services-text{font-size:16px;color:#858585;padding: 0 30px;line-height:25px;-webkit-line-clamp:5;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;}
                    & .rt-services-link{border:1px solid ${Colors.green};line-height:30px;background:transparent;border-radius:7px;color:${Colors.blue};font-weight:600;padding:5px 10px;font-size:16px;}
                    &:hover > .rt-services-heading{color:${Colors.lightRed};}
                    &:hover > .rt-services-link{color:${Colors.white};background:${Colors.blue};}
                
                }
            }
        }
    }
    @media(max-width:991px){
        .container{
            & .rt-row{
                flex-direction: column;  
            }
        }
    }
    @media(max-width:400px){
        & .rt-services-link{line-height:25px !important;font-size:14px!important;} 
    }
`;

const Services = () => {
    return (
        <>
            <Wraper>
                <div className="container">     
                    <div className="home-heading">Build & Deploy Excellence Services</div>
                    <div className="rt-row" >
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services1.png"/>
                                <h2 className="rt-services-heading">Website Development</h2>
                                <p className="rt-services-text">With us, get optimum solutions related to Web development services. Our experts provide genuine development packages with technical, design, and development support. We offer an environment where 24x7 support is given to the client for any kind of assistance.</p>
                                <button type="button" className="rt-services-link" >Learn More Website Development</button>
                            </div>
                        </div>
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services2.png"/>
                                <h2 className="rt-services-heading">eCommerce Development</h2>
                                <p className="rt-services-text">With more than 4 plus year of experience in eCommerce development. Our in-house team of professionals brings value by providing Magneto & Shopify platform to take your business to the next level in the market. It's the best time to get online now.</p>
                                <button type="button" className="rt-services-link" >Learn More eCommerce Development</button>
                            </div>
                        </div>
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services3.png"/>
                                <h2 className="rt-services-heading">Mobile App Development</h2>
                                <p className="rt-services-text">We have a passion to create dynamic, innovative, and user-friendly applications for our customers. Our team of professionals are best in mobile app development, Strong Web backend development, UI experts, and project managers. We assure to deliver quality work in given deadlines.</p>
                                <button type="button" className="rt-services-link" >Learn More Mobile App Development</button>
                            </div>
                        </div>
                    </div>
                    <div className="rt-row" >
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services4.png"/>
                                <h2 className="rt-services-heading">Website Design</h2>
                                <p className="rt-services-text">Transform your website design in catchy design to hold the users on your platform. Let's connect and share your requirement to make it happen in reality. We have professional designers who can makeover your business website in the best way.</p>
                                <button type="button" className="rt-services-link" >Learn More Website Design</button>
                            </div>
                        </div>
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services5.png"/>
                                <h2 className="rt-services-heading">Digital Marketing</h2>
                                <p className="rt-services-text">We help hundreds of clients by designing ROI related Digital Marketing Campaigns to generate leads for businesses. It's easy to reach potential customers with specific locations to get new customers. Our digital marketers can help you to maximize your reach on social media.</p>
                                <button type="button" className="rt-services-link" >Learn More Digital Marketing</button>
                            </div>
                        </div>
                        <div className="rt-col">
                            <div className="rt-services">
                                <img className="rt-col-img" src="/assets/images/services6.png"/>
                                <h2 className="rt-services-heading">Search Engine Optimization</h2>
                                <p className="rt-services-text">Make your presence on the first page of the search engine to drive traffic on your website. Our best SEO packages let you decide your business needs. It can be local, global, or any digital platform. We make your website on top ranking via ethical ways & techniques.</p>
                                <button type="button" className="rt-services-link">Learn More Search Engine Optimization</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wraper>
        </>
    );
};
export default Services;