import React from 'react';
import './StatsSection.css';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import CodeIcon from '@material-ui/icons/Code';

const StatsSection = () => {
    return (
        <div className='statsSection'>
            <div className='statsSection__left'>
                <div className='statsSection__leftHead'>
                    We have lots of experience
                    <br />
                    <span> building Bootstrap themes</span>.
                </div>

                <div className='statsSection__leftDesc' >
                    We've built well over a dozen Bootstrap themes and sold
                    <br />
                    tens of thousands of copies.
                </div>

                <div className='statsSection__leftMain'>
                    <div className='statsSection__leftMainUp'>
                        <FlipCameraAndroidIcon className='statsSection__leftMainIcon' />

                        <div>
                            <h3> Bootstrap users since the beginning </h3>

                            <span>
                                We've been developing with Bootstrap since it was
                                <br />
                                publicly released in 2011.
                            </span>
                        </div>
                    </div>

                    <div className='statsSection__leftMainDown'>
                        <CodeIcon className='statsSection__leftMainIcon' />

                        <div>
                            <h3> Deep understanding of Bootstrap </h3>

                            <span> 
                                We've watched Boostrap grow up over the years and 
                                <br  />
                                understand it better than almost anyone.    
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='statsSection__right'>
                <img
                src='https://image.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg'
                alt=''
                />
            </div>
        </div>
    )
}

export default StatsSection
