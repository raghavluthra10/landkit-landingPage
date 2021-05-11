import React from 'react';
import './HeroSection.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import HeroSectionCard from './HeroSectionCard';
import RepeatIcon from '@material-ui/icons/Repeat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CodeIcon from '@material-ui/icons/Code';

const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className='heroSection__top'>
                <div className='heroSection__topLeft'>
                    <h1>
                            Welcome to <span> LandKit </span>.
                        <br/>
                            Develop anything.
                    </h1>

                    <h3>
                        Build a beautiful, modern website with flexible
                        <br/>
                        Bootstrap components built from scratch.
                    </h3>

                    <div className='heroSection__topLeftBtn'>
                        <Button className='heroSection__topLeft1Btn'>
                            View all pages <ArrowForwardIcon  />
                        </Button>

                        <Button>
                            Documentation
                        </Button>

                    </div>
                </div>
                <div className='heroSection__topRight'>
                    <img 
                    src='https://image.freepik.com/free-vector/illustration-businesspeople-having-video-conference_218660-8.jpg' 
                    alt=''
                    />
                </div>
            </div>

            <div className='heroSection__bottom'>
                <HeroSectionCard
                icon={<RepeatIcon className='HeroSectionCard__icon' />}
                heading='Built for developers'
                desc='LandKit is built to make your life easier.
                        Variables, build tooling, documentation,
                        and reusable components.'
                />

                <HeroSectionCard 
                icon={<BusinessCenterIcon className='HeroSectionCard__icon' />}
                heading='Designed to be modern'
                desc='Designed with the latest trends in mind.
                        LandKit feels modern, minimal, and beautiful.'
                />
                
                <HeroSectionCard 
                icon={<CodeIcon className='HeroSectionCard__icon' />}
                heading='Documentation for everything'
                desc="We've written extensive documentation for 
                        components and tools, so you never have to
                        reverse engineer anything."
                />
            </div>
        </div>
    )
}

export default HeroSection
