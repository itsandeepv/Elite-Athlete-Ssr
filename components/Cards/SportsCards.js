import React from 'react'

function SportsCards() {
    return (
        <div className='sports-Cards p-3 d-flex gap-4 align-items-center '>
            <div>
                <img src='assets/images/stars.png' />
            </div>
            <div>
                <h3 className='heading-one light-black'>
                    Neeraj Chopra
                </h3>
                <p className='text-one py-2 light-black'>
                    Men's javelin throw
                </p >
                <p className='text-description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    )
}

export default SportsCards