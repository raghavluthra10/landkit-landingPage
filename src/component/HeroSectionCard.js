import React from 'react';
import './HeroSectionCard.css';

const HeroSectionCard = ({ icon, heading, desc }) => {
    return (
        <div className='heroSectionCard'>
            <div className='HeroSectionCard__iconDiv'>
                {icon}
            </div>

            <div className='heroSectionCard__heading'>
               {heading}
            </div>

            <div className='heroSectionCard__desc'>
                {desc}
            </div>
        </div>
    )
}

export default HeroSectionCard
