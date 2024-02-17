import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
const Wraper = styled.div`
    background:${Colors.lightbackground};
    & .container{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:15px;
        & .rt-row{
            display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:15px;
            & .rt-col{ 
                width:calc(20% - 45px);
                & .clint-logo{width:200px;display:flex;align-items:center;text-align:center;box-shadow:0 0 7px rgba(2,16,48,.15);border-radius: 5px;}
                & img{width:200px;max-width:100%;border-radius: 5px;}
            }
        }
    }
    @media(max-width:1199px){
        .container{
            & .rt-row{
                & .rt-col{width:calc(25% - 45px);}
            }
        }
    }
    @media(max-width:991px){
        .container{
            & .rt-row{
                & .rt-col{width:calc(35% - 45px);}
            }
        }
    }
    @media(max-width:667px){
        .container{
            & .rt-row{
                & .rt-col{width:calc(50% - 45px);}
            }
        }
    }
    @media(max-width:520px){
        .container{
            & .rt-row{
                & .rt-col{width:calc(85% - 45px);display: contents;}
            }
        }
    }
`;

const OurClients = () => {
    return (
        <>
            <Wraper>
                <div className="container">     
                    <div className="home-heading">Our Clients</div>
                    {/* <marquee width="100%" direction="left" height="auto" > */}
                            <div className="rt-row" >
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/djambo-slijterij.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/starvyapar.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/easy-shoppers.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/metafli.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/gymvitals.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/blogilates.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/rana-car-booking.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/toadfootwear.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/canntri.png"/></div>
                                </div>
                                <div className="rt-col">
                                    <div className="clint-logo"><img src="/assets/clients/logo/daily-greens.png"/></div>
                                </div>
                               
                            </div>
                    {/* </marquee> */}
                </div>
            </Wraper>
        </>
    );
};
export default OurClients;