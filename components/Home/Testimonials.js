import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Wraper = styled.div`
    background: url(/assets/images/portfolio-banner.png) no-repeat;
    background-size: cover;
    & .container{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:15px;
        & .testimonials-heading{font-size:23px;font-weight:700;color:${Colors.white};text-align:center;line-height:30px;}
        & .testimonials-container{
            display:flex;justify-content:center;
            & .testimonials{width:100%;}

        }
        & .splide__arrow{top:35%;}
        & .splide__pagination{display:none;}
        & .rt-row{
            display:flex;flex-direction:column;justify-content:center;width:900px;align-items:center;padding-right:15px;gap: 15px;margin:0 auto;
            & .rating{padding:0 3px;}
            & .rt-col{ 
                flex:1;display:flex;gap:15px;align-items:center;border-radius: 90px 90px;background:${Colors.green};
                & .rt-col-text{padding: 0 8px;}
                & .client-message{font-size:15px;padding-right:8px;color:${Colors.white};}
                & .client-name{font-size:16px;font-weight:600;color: ${Colors.orange};text-transform:uppercase;}
                & img{max-width:100%;border-radius:50%;}
            }
        }
    }
    @media(max-width:1199px){ & .rt-col{width:calc(70% - 10px);}}
    @media(max-width:991px){
        & .container{
            & .testimonials-heading{text-align:center;}
            & .testimonials-container{
                display:flex;justify-content:center;
                & .testimonials{width:100%;}
    
            }
            & .rt-row{
                flex-wrap: wrap;width:100%;min-width:300px;
                & .rt-col{ 
                    width:calc(70% - 10px);display:flex;gap:3px;align-items:center;border-radius: 90px 90px;background:${Colors.green};
                    & .rt-col-text{padding: 0 8px;}
                    & .client-message{font-size:12px;padding-right:8px;color:${Colors.white}; margin:0 auto;}
                    & .client-name{font-size:14px;margin:0;padding:7px 0;}
                    & img{max-width:100%;width:100px;border-radius:50%;}
                }
            }
        }
    }   
    @media(max-width:667px){
        & .container{
            padding:20px 0;background:${Colors.lightbackground};
            & .testimonials-heading{font-size:15px;font-weight:700;color:${Colors.blue};text-align:center;line-height:30px;}
            & .testimonials-container{
                display:flex;justify-content:center;
                & .testimonials{width:100%;}
    
            }
            & .splide__arrow{top:20%;}
            & .splide__pagination{display:none;}
            & .rt-row{
                flex-wrap: wrap;width:100%;min-width:300px;
                & .rt-col{ 
                    width:calc(70% - 10px);display:flex;gap:3px;align-items:center;border-radius: 90px 90px;background:${Colors.green};
                    & .rt-col-text{padding: 0 8px;}
                    & .client-message{font-size:12px;padding-right:8px;color:${Colors.white}; margin:0 auto;}
                    & .client-name{font-size:14px;margin:0;padding:7px 0;}
                    & img{max-width:100%;width:100px;border-radius:50%;}
                }
            }
        }
    }   
`;

const Testimonials = () => {
    return (
        <>
            <Wraper>
                <div className="container">     
                    <div className="testimonials-heading">Success Stories From Our Partners</div>
                    <div className="testimonials-container">
                        <div className="testimonials">
                            <Splide  >
                                <SplideSlide>
                                    <div className="rt-row">
                                        <div className="rt-col">
                                            <img src="/assets/clients/profile-pic-1577694294-dhwal-shah.jpg"/>
                                            <div className="rt-col-text">
                                                <p className="client-message">Raman was professional and showed me UI/ UX mockup as I expected.. Hoping to work with him again in future</p>
                                                <h4 className="client-name">- Dhaval Shah, United States</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="rt-row">
                                        <div className="rt-col">
                                            <img src="/assets/clients/profile-pic-1577709135-highorbit.png"/>
                                            <div className="rt-col-text">
                                                <p className="client-message">The work submitted is of great quality. Great professionalism.</p>
                                                <h4 className="client-name">- Highorbit Careers, India</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="rt-row">
                                        <div className="rt-col">
                                            <img src="/assets/clients/profile-pic-1577694314-amit-vikram.jpg"/>
                                            <div className="rt-col-text">
                                                <p className="client-message">Great work done by Regius Technologies, team is really very skilled and time bound with very competitive rates</p>
                                                <h4 className="client-name">- Amit vikram, India</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="rt-row">
                                        <div className="rt-col">
                                            <img src="/assets/clients/default-user.png"/>
                                            <div className="rt-col-text">
                                                <p className="client-message">Excellent service, Excellent team, dedicated about your time. We are very happy with the services of ‘Regius Technologies Pvt. Ltd.’ for our website development and maintenance. There 24x7 support team always available to help us to solve any kind of website issue. As a enterprenuer I was willing to launch my project as soon as possible and team of Regius Technologies helped me to do so.</p>
                                                <h4 className="client-name">- Amit Arora, India</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                            <span className="rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(240,187,64,1)"></path></svg></span>
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                </div>
            </Wraper>
        </>
    );
};
export default Testimonials;