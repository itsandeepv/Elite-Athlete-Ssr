import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
const Wraper = styled.div`
    & .container{
        position:relative;
        & .banner-img{max-width: 100%;}
        & .bannertext{
            position:absolute;top:10%;left:20%;
            & .heading{
                font-size:35px;font-weight:600;color:${Colors.black};line-height:60px;margin-bottom:15px;
                & span{color:${Colors.green};}
            }
            & .contact-btn{
                border:2px solid ${Colors.green};border-radius:7px;color:${Colors.blue};font-weight:800;padding:10px 40px;font-size:18px;text-transform: uppercase;
                &:hover{background:${Colors.blue};color:#fff;border:none;}
                }
        }
        & .rt-row{
            display:flex;justify-content:center;gap:1px;padding:15px;background:${Colors.lightbackground};
            & .rt-col{
                flex:1;text-align:center;border-right:2px solid ${Colors.lightborder};
                & img{width:40px;height:40px;}
                & .exp-heading{font-size:18px;text-align:center;color:${Colors.blue};font-weight:600;padding-top:6px;}
                &:last-child {border-right:none;}
            }
        }
        
    }
    @media(max-width:1199px){
        .container{
            & .bannertext{
                position:absolute;top:10%;left:20%;
                & .heading{
                    font-size:25px;font-weight:600;line-height:40px;
                    }
                & .contact-btn{padding:10px 30px;font-size:25px;}
                }
            }
            
        }
    @media(max-width:991px){
        .container{
            & .bannertext{
                position:absolute;top:0;left:23%;
                & .heading{
                    font-size:25px;font-weight:600;line-height:20px;
                    }
                & .contact-btn{padding:10px 30px;font-size:20px;line-height:55px}
                }
            }
            & .rt-row{
                & .rt-col{
                    & img{width:35px;height:35px;}
                    & .exp-heading{font-size:15px;}
                }
            }
        }
    @media(max-width:667px){
        .container{
            & .bannertext{
                position:absolute;top:0;left:23%;
                & .heading{
                    font-size:15px;font-weight:600;line-height:5px;
                    }
                & .contact-btn{padding:5px 10px;font-size:15px;line-height:40px}
                }
            }
            & .rt-row{
                flex-direction: column;
                & .rt-col{
                    padding: 25px 0;
                    & .exp-heading{font-size:15px;}
                }
            }
        }

`;

const HomeBanner = () => {
    return (
        <>
            <Wraper>
                <div className="container"> 
                    <img className="banner-img" src="/assets/images/banner.png"/>
                    <div className="bannertext">
                    <h1 className="heading">Think Big. We Make IT, <span>Possible!</span></h1>    
                    <a className="contact-btn" href="/contact-us">Contact Us</a> 
                    </div>
                </div>
                <div className="container">
                    <div className="rt-row" >
                        <div className="rt-col">
                            <img src="/assets/images/project-delivered.png"/>
                            <div className="exp-heading">2500+ Project Delivered</div>
                        </div>
                        <div className="rt-col">
                            <img src="/assets/images/returning-customers.png"/>
                            <div className="exp-heading">85% Returning Clients</div>
                        </div>
                        <div className="rt-col">
                            <img src="/assets/images/professional-it-expert.png"/>
                            <div className="exp-heading">55+ Professional IT Experts</div>
                        </div>
                    </div>
                </div>

            </Wraper>
        </>
    );
};
export default HomeBanner;