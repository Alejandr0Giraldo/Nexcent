import './styles.css'
import Button from '../Button/button'
import ilustration from '../../assets/Illustration.png'
import logo from '../../assets/Logo.png'




function Home (){

    return(
        <>
            <nav className='navbar'>
                <div>
                    <div><img src={logo} alt=""/></div>
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
                    <div className='big-info'>
                        <p>Lessons and insights </p>
                        <p className='green-years'>from 8 years</p>
                    </div>
                    <p>Where to grow your business as a photographer: site or social media?</p>
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