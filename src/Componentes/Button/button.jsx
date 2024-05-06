import './styles.css'
import image from '../../Loading.png'
import {useState} from 'react'

function Button () {
    
    return(
        <>
            <div className='button'>
                Label
            </div>
        </>
        )
};
const Loading = () => {
    return <div>
                <img src={image} />
            </div>
};
export default Button