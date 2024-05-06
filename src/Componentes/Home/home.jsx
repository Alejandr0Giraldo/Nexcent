import './styles.css'
import Button from '../Button/button'


function Home (){
    return(
        <>
            <nav className='navbar'>
            <div>
                <div>Nexent</div>
            </div>
            <div className='categories'>
                <div>Home</div>
                <div>Service</div>
                <div>Feature</div>
                <div>Product</div>
                <div>Testimonial</div>
                <div>FAQ</div>
            </div>
            <div className='users'>
                <div>login</div>
                <div className='button'><Button /></div>
            </div>
            </nav>
        </>
    )
}

export default Home