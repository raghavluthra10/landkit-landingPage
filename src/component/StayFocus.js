import React from 'react';
import './StayFocus.css';
import Switch from '@material-ui/core/Switch';


const StayFocus = () => {
    return (
        <div className='stayFocus'>
            <div className='stayFocus__top'>
                <div className='stayFocus__topLeft' >
                    <h3>
                        Stay focused on your business
                        <br/>
                        <span> Let us handle the design</span>.
                    </h3>

                    <div className='stayFocus__topDesc'>
                        You have a business to run. Stop worrying about cross-
                        <br />
                        browser bugs, designing new pages, keeping your
                        <br  />
                        components up to date. Let us do that for you.
                    </div>

                    <div className='stayFocus__topStats'>
                        <div>
                            100%
                            <br />
                            <span> Satisfaction </span>
                        </div>

                        <div>
                            24/7
                            <br />
                            <span> Support </span>
                        </div>

                        <div>
                            100k+
                            <br />
                            <span> Sales </span>
                        </div>
                    </div>
                </div>

                <div className='stayFocus__topRight'>
                    <img src='https://image.freepik.com/free-vector/meditation-man-work-business-working-design-concept_1198-943.jpg' alt='' />
                </div>
            </div>

            <div className='stayFocus__bottom'>
                <h1> Fair, simple price for all </h1>

                <div>
                    All types of businesses need access to development resources, so we
                    <br />
                    give you the option to decide how much you need to use.
                </div>

                <div>
                    Annual <Switch />  Monthly
                </div>
            </div>
        </div>
    )
}

export default StayFocus
