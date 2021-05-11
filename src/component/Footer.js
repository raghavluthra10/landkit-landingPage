import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__first'>
                <span className='footer__firstLandkit'>
                    LandKit.
                </span>

                <span  className='footer__firstDesc'>
                    A better way to build.
                </span>

                <div className='footer__icons'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                </div>
            </div>

            <div className='footer__second'>
                <span>
                    PRODUCTS
                </span>

                <div>
                    <span>
                        Page Builder
                    </span>
                    
                    <span>
                        UI Kit
                    </span>
                    
                    <span>
                        Styleguide
                    </span>

                    <span>
                        Documentation
                    </span>

                    <span>
                        Changelog
                    </span>
                </div>

            </div>

            <div className='footer__third'>
                <span>
                    SERVICES
                </span>

                <div>
                    <span>
                        Documentation
                    </span>

                    <span>
                        Changelog
                    </span>

                    <span>
                        Pagebuilder
                    </span>

                    <span>
                        UI Kit
                    </span>
                </div>
            </div>

            <div className='footer__fourth'>
                <span>
                    CONNECT
                </span>

                <div>
                    <span>
                        Page Builder
                    </span>

                    <span>
                        UI Kit
                    </span>

                    <span>
                        Styleguide
                    </span>

                    <span>
                        Documentation
                    </span>

                    <span>
                        Changelog
                    </span>

                    <span>
                        Documentation
                    </span>

                    <span>
                        Changelog
                    </span>
                </div>
            </div>

            <div className='footer__fifth'>
                <span>
                    LEGAL
                </span>

                <div>
                    <span>
                        Documentation
                    </span>

                    <span>
                        Changelog
                    </span>

                    <span>
                        Pagebuilder
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
