import Breadcrums from '@components/Breadcrums/Breadcrums'
import Layout from '@components/Layouts/Layout'
import React from 'react'

function PrivacyPolicy() {
    const breadcumsDetails = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"Privacy Policy",
            path:"/"
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
                    <div>
                        <h2 className='heading-large'>INTRODUCTION</h2>
                        <p className='commen-text py-2'>
                            Welcome to Power Body Nutrition Ltd.'s privacy notice.
                        </p>
                        <p className='commen-text py-2'>
                            We respect your privacy and are committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) including any data you may provide through this website when you sign up to our newsletter, enquire about or purchase a product or service, take part in a competition or supply services to us.                        </p>
                        <p className='commen-text py-2'>
                            This notice tells you about your privacy rights and how the law protects you.
                        </p>
                        <p className='commen-text py-2'>
                            Please contact us if you require a pdf copy. Please also use the Glossary to understand the meaning of some of the terms used in this privacy notice.                                                </p>

                    </div>
                    <div>
                        <h3 className='heading-large'>Important information and who we are</h3>
                        <p className='commen-text py-2'>
                            Welcome to Power Body Nutrition Ltd.'s privacy notice.
                        </p>
                        <p className='commen-text py-2'>
                            We respect your privacy and are committed to protecting your personal data. This privacy notice will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) including any data you may provide through this website when you sign up to our newsletter, enquire about or purchase a product or service, take part in a competition or supply services to us.                        </p>
                        <p className='commen-text py-2'>
                            This notice tells you about your privacy rights and how the law protects you.
                        </p>
                        <p className='commen-text py-2'>
                            Please contact us if you require a pdf copy. Please also use the Glossary to understand the meaning of some of the terms used in this privacy notice.                                                </p>

                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default PrivacyPolicy