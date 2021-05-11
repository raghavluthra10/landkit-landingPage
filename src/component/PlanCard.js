import React from 'react';
import './PlanCard.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Button } from '@material-ui/core';
import PlancardBottom from './PlancardBottom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const PlanCard = () => {
    return (
        <div className='planCard'>
            <div className='planCard__top'>
                <div className='planCard__left'>
                    <span> STANDARD </span>

                    <div className='planCard__leftPrice'>
                        $29/mo 
                        <span> per seat </span>
                    </div>

                    <div className='planCard__leftCheck'>
                            <div>
                                <CheckCircleIcon className='planCard__leftCheckIcon' /> Rich, responsive landing pages
                            </div>
                            <div>
                                <CheckCircleIcon className='planCard__leftCheckIcon' /> 100+ styled components
                            </div>
                            <div>
                                <CheckCircleIcon className='planCard__leftCheckIcon' /> Flexible, simple license
                            </div>
                            <div>
                                <CheckCircleIcon className='planCard__leftCheckIcon' /> Speedy build tooling
                            </div>
                            <div>
                                <CheckCircleIcon className='planCard__leftCheckIcon' /> 6 months free support included
                            </div>
                    </div>
                   
                   <Button> Get it now </Button>
                </div>

                <div className='planCard__right'>
                    <span> ENTERPRISE </span>

                    <div className='planCard__rightDesc'>
                        We offer variable pricing with 
                        <br  />
                        discounts for larger organizations. Get
                        <br  />
                        in touch with us for and we'll figure out
                        <br  />
                        something that works for everyone.
                    </div>

                    <Button> Contact us </Button>
                </div>
            </div>
            
            <div className='planCard__bottom'>
                {/* cards */}
                <div>
                    <PlancardBottom 
                    title='Can I use LandKit for my clients?'
                    desc='Absolutely. The Bootstrap Themes license allows you to
                    build a website for personal use or for a client.'
                    />

                    <PlancardBottom  
                    title='Do I get free updates?'
                    desc='Yes. We update all of our themes with each Bootstrap
                    update. plus are constantly adding new components,
                    pages, and features to our themes'
                    />
                </div>
                
                <div>
                    <PlancardBottom 
                    title='Is there a money back gaurantee?'
                    desc='Yup! Bootstrap Themes come with a satisfaction
                    gaurantee. Submit a return and get your money back.'
                    />

                    <PlancardBottom 
                    title='DOes it work with Rails? React? Laravel?'
                    desc='Yes. LandKit has basic CSS/JS files you can include. if
                    you want to enable deeper customization, you can
                    integrate it into your assets pipeline or build processes.'
                    />
                </div>
            </div>

            <div className='planCard__buyNow'>
                <span>
                    GET STARTED
                </span>

                <div className='planCard__buyNowHead'>
                    Get LandKit and save your time.
                </div>

                <div className='planCard__buyNowDesc'>
                    Stop wasting time trying to do it the 'right way' and build a site from scratch.
                    <br />
                    LandKit is faster, easier and you still have complete control.
                </div>

                <Button>
                    Buy it now <ArrowForwardIcon  />
                </Button>
            </div>
        </div>
    )
}

export default PlanCard
