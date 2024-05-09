import './styles.css'
import Button from '../Button/button'
import ilustration from '../../assets/Illustration.png'


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
                    <div className='button-login'><Button /></div>
                </div>
            </nav>
            <section className='container-section'>
                <div>
                    <p>Lessons and insights </p>
                    <p>from 8 years</p>
                    <p>Where the grow</p>
                    <div><Button /></div>
                </div>
                <div>
                    <img src={ilustration} alt=""/>
                </div>
            </section>
        </>
    )
}

export default Home