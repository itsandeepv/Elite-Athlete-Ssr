import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
const Wraper = styled.div`
    & .container{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:3px;
        & .aboutus-heading{font-size:23px;font-weight:700;color:${Colors.blue};text-align:center;line-height:30px;}
        & .aboutus-text{font-size:16px;line-height:22px;font-weight:400;color:#858585;margin:0 auto;padding:5px 0;}
    }
`;

const AboutUs = () => {
    return (
        <>
            <Wraper>
                <div className="container">     
                    <div className="home-heading">Maximize Your Business Via Innovative & Latest Technologies</div>
                    <p className="aboutus-text">We handover the innovative and latest technologies that have the power to maximize your business. Our experts designed a proven digital marketing programs to drive maximum growth to your business. We proudly believe to provide the highest standards of feature-rich mobile/web solutions to empower our clients business. With years of experience & team of professionals successfully raise the technical excellence & highlight professionalism from us. Worked for beginners Entreprises and make them achieve their initial goals. We are generally known as the best digital marketing agency in the region who is handling oversea clients with our wide network in India.</p>
                    <p className="aboutus-text">Our major area of expertise in web designing, web development, search engine marketing, online marketing, search engine optimization, content marketing, email marketing, Social media ads, social media optimization, and e-commerce solution. Our team of developers, designers, digital marketing experts, content writer all are known for delivering the best results.</p>
                    <p className="aboutus-text">We collaborated with a certified team of professional best in their profession. In general, we worked and support various successful startups and large-scale enterprises by providing the best IT solutions. Our focus is to create and innovate new ideas and strategies for the success of our clients. As a result of high accuracy and transparency in the work, we able to make client achieve their desired goals. At Bajawa Infotech, you not only get the best IT Solutions but also received a culture where we maintain professionalism.</p>
                    <p className="aboutus-text">Our smart working style let you know who we are! We present cost-effective IT Solutions in broad ways across the globe. We stand for our clients and to make them achieve the best results organically. In fact, it's important to know that businesses do not only need hard work for success. It needs smart work and support of smart people to take the business to the next level. Fortunately, we do both at a genuine cost.</p>           
                </div>
            </Wraper>
        </>
    );
};
export default AboutUs;