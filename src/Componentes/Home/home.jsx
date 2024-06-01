import './styles.css'
import Button from '../Button/button'
import logo from '../../assets/Logo.png'
import Banner from '../Banner/index.jsx'
import Clients from "../Clients/index.jsx";
import Community from "../Community/index.jsx";

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
                    <div className='button-login'><Button/></div>
                </div>
            </nav>
            <div>
                <Banner/>
            </div>
            <div>
                <Clients />
            </div>
            <div className='container-title'>
                <p className='title'>Manage your entire community in a single system</p>
            </div>
            <div className='container-card-community'>
                <Community/>
                <Community/>
                <Community/>
            </div>
        </>
    )
}

export default Home