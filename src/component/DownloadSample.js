import React from 'react';
import './DownloadSample.css';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const DownloadSample = () => {
    return (
        <div className='downloadSample' >
            <div className='downloadSample__left'>
                <img 
                src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                alt=''
                />

                <form>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Password' />
                    <Button>
                        Download a sample
                    </Button>
                </form>
            </div>

            <div className='downloadSample__right'>
                <div className='downloadSample__rightHead'>
                    The most useful resource
                    <br />
                    <span>
                        ever created for a dev
                    </span>
                </div>

                <div className='downloadSample__rightDesc'>
                    Using LandKit to build your sites means never worrying
                    <br />
                    about designing another page or cross browser
                    <br />
                    compatibility. Our ever-growing library of components
                    <br />
                    and pre-designed layouts will make your life easier.
                </div>

                <div className='downloadSample__rightCheck'>
                    <div>
                        <span>
                            <CheckCircleIcon /> <span> Lifetime updates </span>
                        </span>

                        <span>
                            <CheckCircleIcon /> <span> Tech support </span>
                        </span>
                    </div>
                    
                    <div>
                        <span>
                            <CheckCircleIcon /> <span> Tons of assets </span>
                        </span>

                        <span>
                            <CheckCircleIcon /> <span> Integration ready </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSample
