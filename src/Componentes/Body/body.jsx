import './styles.css'
import loginMobile from '../../assets/rafiki.png'
import Button from "../Button/button.jsx";



function Body() {
    return(
        <>
            <div className="mobile-container">
                <img src={loginMobile} alt=""/>
                <div className='p-mobile'>
                    <h2>The unseen of spending three years at Pixelgrade</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Body