import React from "react";
import styled from "styled-components";
import Colors from "@constants/Colors";
import c from "@constants/Common";
const Wraper = styled.div`
    & .container{
        width:${c.width};max-width:100%;margin:0 auto;padding:20px;box-sizing:border-box;display:flex;flex-direction:column;row-gap:3px;
        & .aboutus-heading{font-size:23px;font-weight:700;color:${Colors.blue};text-align:center;line-height:30px;}
        & .aboutus-text{font-size:16px;line-height:22px;font-weight:400;color:#858585;margin:0 auto;padding:5px 0;}
        & .rt-row{
            display:flex;justify-content:center;padding:15px;padding-top:90px;
            & .rt-col{
                flex:1;text-align:center;padding:10px 15px 20px;background:#f7a600;
                & .rt-img{transform: translateY(-48px);}
                & .exp-heading-text{font-size:15px;line-height:25px;color:${Colors.white};padding: 0 20px;}
                & .exp-heading{font-size:20px;text-align:center;color:${Colors.white};font-weight:600;padding-top:6px;}
                &:first-child {border-radius: 5px 0 0 5px;background: #d5305d;}
                &:last-child {border-radius: 0px 5px 5px 0px; background: #a0b829;}
                &:hover{transform:scale(1.1);transition:0.5s;}
            }
        }
    }
    @media(max-width:991px){
        .container{
            & .rt-row{flex-direction:column;}
            & .exp-heading-text{margin-bottom:25px;}
        }
    }

    @media(max-width:400px){
        & .exp-heading-text{margin-bottom:25px;}
    }
`;

const MarketingSection = () => {
    return (
        <>
            <Wraper>
                <div className="container">     
                    <div className="home-heading">Looking for Best Digital Marketing Company in India</div>
                    <p className="aboutus-text">Regius Technologies is the one-stop destination for all digital marketing solutions. We are recognized as one of the best Digital Marketing Company in India for providing the best digital services. With years of experience & vast clients network, we assure to offer the best digital marketing services. We are a trusted brand, who known to bring incredible changes in your business through our digital marketing services. Our speciality to connect your business with the target audience to maximize sales and business revenue. In fact, our squad of digital marketing experts act as a backbone for our clients business to achieve the target goals.</p>
                    <p className="aboutus-text">In the online market, traffic is the root of the business to generate sales. In general, a digital marketing campaign is a booster for businesses to enhance their brand. Regius Technologies assures to promote your business and drive maximum leads. A website with no digital marketing support is like selling in a desert.</p>
                    <p className="aboutus-text">In the digital market, the internet becomes the hub of 90% of businesses over the globe. It makes businesses to reach the customers easily with the help of digital marketing agencies. Regius Technologies is well experienced Digital Marketing Company in India that take your business or brand to your target audience. In results, your brand or business will reach to only those from whom your brand is made.</p>
                    <p className="aboutus-text">It becomes easy to create brand awareness in a specific location, gender, age, and interest. Fortunately, if you facing issue in reaching to the right audience or sales, reach to Regius Technologies. We assure to provide the best digital marketing services in the region to promote digitally your business. Our team of professional digital marketers have that quality and skillset to take your business to your potential customers. We offer the best digital marketing programs to boost your brand and sales at genuine cost. Let's know your requirement to work together in future.</p>
                    <div className="rt-row" >
                        <div className="rt-col">
                            <img className="rt-img" src="/assets/images/our-mission.png"/>
                            <div className="exp-heading">OUR MISSION</div>
                            <p className="exp-heading-text">Our mission is to provide the best digital marketing services globally to all businesses. Each and every online business need to take the support of digital experts to excel their visibility in the online market industry.</p>
                        </div>
                        <div className="rt-col">
                            <img className="rt-img" src="/assets/images/our-vision.png"/>
                            <div className="exp-heading">OUR VISION</div>
                            <p className="exp-heading-text">Our vision is to upgrade the standard of the digital marketing industry to produce the best results for businesses. By raising the standard of online businesses, business owners and consumers both able to enjoy the services.</p>
                        </div>
                        <div className="rt-col">
                            <img className="rt-img" src="/assets/images/our-value.png"/>
                            <div className="exp-heading">OUR VALUES</div>
                            <p className="exp-heading-text">Our values are simply defined as to be committed towards our clients and implement the best strategies to drive the desired results for our customers. For us, our passion to offer the most reliable services to our customer is the best thing.</p>
                        </div>
                    </div>
                
                
                </div>
            </Wraper>
        </>
    );
};
export default MarketingSection;