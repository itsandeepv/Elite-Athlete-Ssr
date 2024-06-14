
import React, { useState } from 'react'
import Slider from 'react-slick'
import dynamic from 'next/dynamic';
import c from "../config/index"
import Head from 'next/head';

const Breadcrums = dynamic(() => import('@components/Breadcrums/Breadcrums'));
const Layout = dynamic(() => import('@components/Layouts/Layout'));

function Aboutus({ props }) {
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About us",
            path: "/"
        },
    ]

    // console.log(props, "<<<<<<<testArr");
    const testArr = [
        {
            id: 1,
            title: "OUR STORY",
            heading: "About our Store",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`,
            sideImage: [
                'assets/images/back2A.png', 'assets/images/front2A.png'
            ],
        },
        {
            id: 2,
            title: "WHO WE ARE",
            heading: "Tell about Us",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`,
            sideImage: [
                'assets/images/back1A.png', 'assets/images/front1A.png'
            ],
        }
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const topArray = [1, 2, 3, 4, 5, 6]
    const imageArray = [
        'assets/images/i06.png',
        'assets/images/i01.png',
        'assets/images/avatar2.png',
        'assets/images/avatar4.png',
        'assets/images/i05.png',
        'assets/images/front1A.png',
    ]
    return (
        <React.Fragment>
            <Head>
                <meta charset="utf-8" />
                <title>{`About Us - ${c.APP_NAME}`}</title>
                <meta name="description" content="About Us" />
                <meta name="keywords" content="About Us" />
                <meta name="author" content={c.APP_NAME} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Us" />
                <meta property="og:description" content="About Us Page" />
                <meta property="og:url" content={c.BASE_URL} />
                <meta property="og:site_name" content={c.APP_NAME} />
                <meta property="og:image" content={`${c.BASE_URL}/assets/images/logo.png`} />
                <link rel="canonical" href={`${c.BASE_URL}/about-us`} />
            </Head>
            <Layout>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <Breadcrums breadcumsDetails={breadcumsDetails} />
                        </div>
                    </div>
                </div>
                <div className='banner-container'>
                    <div className='container-fluid d-flex align-items-center '>
                        <div>
                            <h2 className='text-light pb-3' >We believe we can all make a Perfect Body.</h2>
                            <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div className='container-fluid '>
                    <div>
                        {
                            testArr?.map((item, index) => {
                                return (
                                    <div key={index} className={`row py-3 align-items-center ${item?.id == 2 ? "flex-row-reverse" : ""}`}>
                                        <div className='col-lg-6 d-flex justify-content-center text-center'>
                                            <div className='left-content'>
                                                <img src='assets/images/back2A.png' className='about-image1' />
                                                <img src='assets/images/front2A.png' className='about-image2' />
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='right-content'>
                                                <div className='about-title gray bold-600'>
                                                    {item?.title}
                                                </div>
                                                <h2 className='bold-600 text-dark'>
                                                    {item?.heading}
                                                </h2>
                                                <p className='commen-text py-1'>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='row ' >
                        <div className='text-center'>
                            <h2>What Our Customers Say...</h2>
                            <p className='commen-text py-3 text-center'>See what other people, prototype testers and supporters told about us.</p>
                        </div>
                        <div className='row about-us-slider'>
                            <Slider {...settings}>
                                {
                                    topArray?.map((item, index) => {
                                        return (
                                            <div key={index} className='col-lg-4 p-2'>
                                                <div className='px-lg-4 d-flex flex-column gap-3'>
                                                    <div className='d-flex gap-3 py-1 align-items-center'>
                                                        <span>
                                                            <img src='assets/images/userimage.png' />
                                                        </span>
                                                        <div>
                                                            <h5 className='gray'>
                                                                Edward Morinho
                                                            </h5>
                                                            <p className='commen-text'>
                                                                Aimfit Gym
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span className='py-1'>
                                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="rgba(240,187,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    </span>
                                                    <p className='commen-text py-2'>
                                                        Testimonial carousel is modern and stylish
                                                        addon for SP Page Builder . Instantly raise
                                                        your website appearance with this stylish
                                                        new addon.
                                                    </p>
                                                    <div className='py-2'>
                                                        <svg width="45" height="40" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M45.3125 22.75C47.8516 22.75 50 20.6016 50 18.0625V5.5625C50 2.92578 47.8516 0.875 45.3125 0.875H32.8125C30.1758 0.875 28.125 2.92578 28.125 5.5625V29C28.125 37.5938 35.0586 44.625 43.75 44.625H44.5312C45.8008 44.625 46.875 43.5508 46.875 42.2812V37.5938C46.875 36.2266 45.8008 35.25 44.5312 35.25H43.75C40.2344 35.25 37.5 32.418 37.5 29V22.75H45.3125ZM17.1875 22.75C19.7266 22.75 21.875 20.6016 21.875 18.0625V5.5625C21.875 2.92578 19.7266 0.875 17.1875 0.875H4.6875C2.05078 0.875 0 2.92578 0 5.5625V29C0 37.5938 6.93359 44.625 15.625 44.625H16.4062C17.6758 44.625 18.75 43.5508 18.75 42.2812V37.5938C18.75 36.2266 17.6758 35.25 16.4062 35.25H15.625C12.1094 35.25 9.375 32.418 9.375 29V22.75H17.1875Z" fill="#DBDBDB" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='container-fluid background-light'>
                    <div className='row justify-content-center'>
                        <div className='text-center py-2'>
                            <h2>#Elite Athlete Nutrition ON INSTAGRAM</h2>
                            <p className='commen-text py-3 text-center'>The best thing about a monochrome product scheme</p>
                        </div>
                        <div className='row '>
                            <div className='Elite-item-contianer'>
                                {
                                    imageArray?.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={item} alt='img' />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}



export async function getServerSideProps(context) {
    const testArr = [
        {
            id: 1,
            title: "OUR STORY",
            heading: "About our Store",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`,
            sideImage: [
                'assets/images/back2A.png', 'assets/images/front2A.png'
            ],
        },
        {
            id: 2,
            title: "WHO WE ARE",
            heading: "Tell about Us",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.`,
            sideImage: [
                'assets/images/back1A.png', 'assets/images/front1A.png'
            ],
        }
    ]
    // Return the data as props
    // console.log(testArr , "<<<<<<<");
    return {
        props: {
            testArr
        }
    };
}
export default Aboutus