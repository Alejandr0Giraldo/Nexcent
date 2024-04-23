import './styles.css'
import image from '../../Loading.png'
import {useState} from 'react'

function Button () {
    const [loading, setLoading] = useState(false)
    cosnt handleClick = () => {
        setLoading(!loading)
    };
    return(
        <>
            < onclick={handleClick} className='button'>
                Label
                {loading && <Loading />}
            </>
        </>
        )
};
const Loading = () => {
    return <div>
                <img src={image} />
            </div>
};
export default Button