// import React, { Components } from 'react';
import './Homess.css';
import Sectionone from '../Sectionone/Sectionone';
import Banner from '../Banner/Banner';

function Homess(){
        return(
            <div className='second'>
                <div className='container'>
                    <div className='row'>
                        <Banner/>
                        <Sectionone/>
                    </div>
                </div>
            </div>
        )
    }

export default Homess
