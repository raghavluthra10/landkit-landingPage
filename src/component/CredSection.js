import React from 'react';
import './CredSection.css';

const CredSection = () => {
    return (
        <div  className='credSection'>
            
            <img  
            alt=''
            src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a'
            />

            <img  
            alt=''
            src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/coinbase_logo.png?itok=UOBuPHOG'
            />

            <img  
            alt=''
            src='data:image/png;base64,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'
            />

            <img  
            alt=''
            src='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/netflix_2014.png?itok=qtd05Dk3'
            />

            <img  
            alt=''
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLFJkQebjKFyxzPShNN1cgRpoAZkQoWo7lOwkBMJYaOQvw4VraVfAHqV6mgWtV22FG88&usqp=CAU'
            />

            <img  
            alt=''
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVXGEWSmUdRHdK2O1h7WZWqfARl4s2YJK6g&usqp=CAU'
            />

        </div>
    )
}

export default CredSection
