import React from 'react';
import './AirbnbCard.css';

const AirbnbCard = () => {
    return (
        <div  className='airbnbCard'>
            <div className='airbnbCard__top'>
                <h1>
                    Our customers are our biggest fans.
                </h1>

                <div>
                    We don't like to brag, but we don't mind letting our customers do it for us.
                    <br />
                    Here are a few nice things folks have said about our themes over the years.
                </div>
            </div>

            <div className='airbnbCard__bottom'>
                <img
                src='https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
                />

                <div>
                    <img 
                    src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a'
                    alt=''
                    />

                    <span>
                        "LandKit is hands down the most useful front
                        
                        end Bootstrap them I've ever used. I can't
                        
                        wait to use it again for my next project."
                    </span>

                    <span className='airbnbCrad__bottomName'> DAVE GAMACHE </span>
                </div>
            </div>
        </div>
    )
}

export default AirbnbCard
