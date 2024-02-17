import Breadcrums from '@components/Breadcrums/Breadcrums'
import TopdealsCard from '@components/Cards/TopDeals'
import Layout from '@components/Layouts/Layout'
import React, { useState } from 'react'

function ProductDetailsPage() {

    const [tabs, settabs] = useState(1)
    const breadcumsDetails = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Weight Loss",
            path: "/"
        },
        {
            title: "Creatine Monohydrate Creapure",
            path: "/"
        },
    ]

    return (
        <Layout>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrums breadcumsDetails={breadcumsDetails} />
                    </div>
                </div>
                <div>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div>
                                product details
                            </div>
                            <div className='mt-lg-2'>
                                <div className='product-description'>
                                    <ul className='d-flex'>
                                        <li className='light-gray bold-600' onClick={() => settabs(1)}>
                                            Description
                                        </li>
                                        <li className='light-gray bold-600 isSectionActive' onClick={() => settabs(2)}>
                                            Nutrition
                                        </li>
                                        <li className='light-gray bold-600' onClick={() => settabs(3)}>
                                            REVIEW (2242)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {
                                tabs == 1 ?
                                    <div>
                                        <h5 className='heading- light-dark bold-600'>
                                            OLIMP NUTRITION CREATINE MONOHYDRATE CREAPURE - 500 GRAMS
                                        </h5>
                                        <p className='commen-text py-2'>
                                            <b> OLIMP CREATINE MONOHYDRATE CREAPURE : - </b> is a micronised form of creatine which has better solubility and better tissue absorptiveness than the traditional monohydrate. Creatine molecule is the basic energy vehicle in muscle cells, as a phosphate stores high-energy phosphoric acid groups (phosphate radicals) and distributes them for protein synthesis and muscle fibre contractions. Diet supplementation with OLIMP CREATINE MONOHYDRATE results in: - rapid re-synthesis of ATP (direct energy source) - substantial increase in strength and lean muscle mass - anti-catabolic effects - increased energy saturation of the body.Only for adults, <br />
                                            especially strength and endurance athletes.
                                        </p>
                                        <div>
                                            <h5 className='headin light-gray py-2'>
                                                Additional description
                                            </h5>
                                            <p className='commen-text py-2'>
                                                <b> OLIMP CREATINE MONOHYDRATE CREAPURE : - </b> Creatine certainly has the potential to enhance muscular development. Purchasing the right creatine supplement may be able to ensure those interested in achieving their physique improvement goals can do so. Creapure Monohydrate might be one of the best products on the market since it offers a high efficiency in which the body can absorb helpful creatine. The solubility and tissue absorption capabilities of this product are among the best consumers will find on the market. For that reason alone, investing in this supplement is strongly recommended.Creatine molecules offer a tremendous source of energy for the muscle cells. Among the reasons for this would be the fact creatine helps phosphate radicals be removed from storage and distributed through the muscle cells allowing for maximum strength, recovery, and muscle building gains.When you take a serving of Creapure Monohydrate, you can feel confident all these benefits will be maximized. A mere 5 grams serving size is capable of delivering these much sought after results. One single container offers a full 100 servings further ensuring the investment made on this particular supplement would be a good one.The zero amount of calories, protein, and carbohydrates certainly prevents this supplement from contributing to fat gain although using it may contribute to increased weight.Used as directed.
                                                <br /> The supplement can be used on off days as well as during regularly scheduled workout sessions.
                                                The zero amount of calories, protein, and carbohydrates certainly prevents this supplement from contributing to fat gain although using it may contribute to increased weight.Used as directed.
                                                <br /> The supplement can be used on off days as well as during regularly scheduled workout sessions.
                                            </p>
                                        </div>
                                    </div> : tabs == 2 ?
                                        <div>
                                            Nutrition
                                        </div>
                                        : tabs == 3 ?
                                            <div>
                                                <div className='row'>
                                                    <h5 className='gray py-2'>Customer Name</h5>
                                                    <p className='review-text'>
                                                        Some of the most exciting pieces from the spring 2022 season are the accessories.  Standouts include opera gloves at Rokh, futuristic handbags from Coperni, and Acne Studio’s bonnets. See how street stylers kept pace, accessorizing themselves just like the models on the runway.
                                                    </p>
                                                    <div className='review-img'>
                                                        <img src='assets/images/reviewimg.png' alt='img' />
                                                        <img src='assets/images/reviewimg.png' alt='img' />
                                                        <img src='assets/images/reviewimg.png' alt='img' />
                                                    </div>
                                                    <div className='d-flex justify-content-between'>
                                                        <p className='gray'>
                                                            26th July, 2024
                                                        </p>
                                                        <div className='d-flex gap-2'>
                                                            <div className='d-flex gap-2 '>
                                                                <span className='cursor-pointer'>
                                                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M22.0008 10.1333C22.0008 8.73333 20.8675 8 19.3341 8H14.8675C15.2008 6.8 15.3341 5.66667 15.3341 4.66667C15.3341 0.8 14.2675 0 13.3341 0C12.7341 0 12.2675 0.0666669 11.6675 0.4C11.4675 0.533334 11.4008 0.666667 11.3341 0.866667L10.6675 4.46667C9.93415 6.33333 8.13415 8 6.66748 9.13333V18.6667C7.20081 18.6667 7.73415 18.9333 8.40081 19.2667C9.13415 19.6 9.86748 20 10.6675 20H17.0008C18.3341 20 19.3341 18.9333 19.3341 18C19.3341 17.8 19.3341 17.6667 19.2675 17.5333C20.0675 17.2 20.6675 16.5333 20.6675 15.6667C20.6675 15.2667 20.6008 14.9333 20.4675 14.6C21.0008 14.2667 21.4675 13.6667 21.4675 13C21.4675 12.6 21.2675 12.2 21.0675 11.8667C21.6008 11.4667 22.0008 10.8 22.0008 10.1333ZM20.6008 10.1333C20.6008 11 19.7341 11.0667 19.6008 11.4667C19.4675 11.9333 20.1341 12.0667 20.1341 12.8667C20.1341 13.6667 19.1341 13.6667 19.0008 14.1333C18.8675 14.6667 19.3341 14.8 19.3341 15.6V15.7333C19.2008 16.4 18.2008 16.4667 18.0008 16.7333C17.8008 17.0667 18.0008 17.2 18.0008 17.9333C18.0008 18.3333 17.5341 18.6 17.0008 18.6H10.6675C10.1341 18.6 9.60081 18.3333 8.93415 18C8.40081 17.7333 7.86748 17.4667 7.33415 17.3333V10.3333C9.00081 9.06667 11.1341 7.2 11.9341 4.86667V4.73333L12.5341 1.4C12.8008 1.33333 13.0008 1.33333 13.3341 1.33333C13.4675 1.33333 14.0008 2.13333 14.0008 4.66667C14.0008 5.66667 13.8008 6.73333 13.4675 8H13.3341C12.9341 8 12.6675 8.26667 12.6675 8.66667C12.6675 9.06667 12.9341 9.33333 13.3341 9.33333H19.3341C20.0008 9.33333 20.6008 9.66667 20.6008 10.1333Z" fill="#5A0563" />
                                                                        <path d="M6.00081 20H2.00081C1.26748 20 0.66748 19.4 0.66748 18.6667V9.33333C0.66748 8.6 1.26748 8 2.00081 8H6.00081C6.73415 8 7.33415 8.6 7.33415 9.33333V18.6667C7.33415 19.4 6.73415 20 6.00081 20ZM2.00081 9.33333V18.6667H6.00081V9.33333H2.00081Z" fill="#5A0563" />
                                                                    </svg>
                                                                </span>
                                                                1876
                                                            </div>
                                                            <div className='d-flex gap-2 '>
                                                                <span className='cursor-pointer'>
                                                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0.00162785 9.86666C0.00162773 11.2667 1.13496 12 2.66829 12L7.13496 12C6.80163 13.2 6.66829 14.3333 6.66829 15.3333C6.66829 19.2 7.73496 20 8.66829 20C9.26829 20 9.73496 19.9333 10.335 19.6C10.535 19.4667 10.6016 19.3333 10.6683 19.1333L11.335 15.5333C12.0683 13.6667 13.8683 12 15.335 10.8667L15.335 1.33333C14.8016 1.33333 14.2683 1.06667 13.6016 0.733332C12.8683 0.399997 12.135 -2.79753e-07 11.335 -3.49691e-07L5.00163 -9.03369e-07C3.6683 -1.01993e-06 2.6683 1.06666 2.6683 2C2.6683 2.2 2.66829 2.33333 2.73496 2.46667C1.93496 2.8 1.33496 3.46666 1.33496 4.33333C1.33496 4.73333 1.40163 5.06667 1.53496 5.4C1.00163 5.73333 0.534961 6.33333 0.534961 7C0.534961 7.4 0.734963 7.8 0.934962 8.13333C0.401629 8.53333 0.00162791 9.2 0.00162785 9.86666ZM1.40163 9.86666C1.40163 9 2.26829 8.93333 2.40163 8.53333C2.53496 8.06666 1.86829 7.93333 1.86829 7.13333C1.86829 6.33333 2.86829 6.33333 3.00163 5.86666C3.13496 5.33333 2.6683 5.2 2.6683 4.4L2.6683 4.26667C2.80163 3.6 3.80163 3.53333 4.00163 3.26667C4.20163 2.93333 4.00163 2.8 4.00163 2.06666C4.00163 1.66667 4.4683 1.4 5.00163 1.4L11.335 1.4C11.8683 1.4 12.4016 1.66667 13.0683 2C13.6016 2.26667 14.135 2.53333 14.6683 2.66667L14.6683 9.66667C13.0016 10.9333 10.8683 12.8 10.0683 15.1333L10.0683 15.2667L9.46829 18.6C9.20163 18.6667 9.00163 18.6667 8.66829 18.6667C8.53496 18.6667 8.00163 17.8667 8.00163 15.3333C8.00163 14.3333 8.20163 13.2667 8.53496 12L8.66829 12C9.06829 12 9.33496 11.7333 9.33496 11.3333C9.33496 10.9333 9.06829 10.6667 8.66829 10.6667L2.66829 10.6667C2.00163 10.6667 1.40163 10.3333 1.40163 9.86666Z" fill="#5A0563" />
                                                                        <path d="M16.0016 -4.66255e-07L20.0016 -1.16564e-07C20.735 -5.24537e-08 21.335 0.599999 21.335 1.33333L21.335 10.6667C21.335 11.4 20.735 12 20.0016 12L16.0016 12C15.2683 12 14.6683 11.4 14.6683 10.6667L14.6683 1.33333C14.6683 0.599999 15.2683 -5.30365e-07 16.0016 -4.66255e-07ZM20.0016 10.6667L20.0016 1.33333L16.0016 1.33333L16.0016 10.6667L20.0016 10.6667Z" fill="#5A0563" />
                                                                    </svg>
                                                                </span>
                                                                186
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div> : ""

                            }
                        </div>
                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col py-2'>
                                    <h2 className='heading-large'>
                                        Related Products
                                    </h2>
                                </div>
                                <div className='col-lg-12 d-flex flex-column justify-content-center align-items-center mx-0'>
                                    <TopdealsCard />
                                    <TopdealsCard />
                                    <TopdealsCard />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default ProductDetailsPage