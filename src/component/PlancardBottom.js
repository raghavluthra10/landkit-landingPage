import React from 'react';
import './PlancardBottom.css';
import HelpIcon from '@material-ui/icons/Help';

const PlancardBottom = ({ title, desc }) => {
    return (
        <div className='plancardBottom'>
            <div className='plancardBottom__que?'>
                <HelpIcon className='plancardBottom__queIcon' />
            </div>

            <div className='plancardBottom__main'>
                <div className='plancardBottom__title'>
                    {title}
                </div>

                <div className='plancardBottom__body'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default PlancardBottom
