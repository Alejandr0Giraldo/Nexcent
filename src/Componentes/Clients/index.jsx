import './styles.css'
import logo1 from '../../assets/Logo (1).png'
import logo2 from '../../assets/Logo (2).png'
import logo3 from '../../assets/Logo (3).png'
import logo4 from '../../assets/Logo (4).png'
import logo5 from '../../assets/Logo (5).png'
import oddologo from '../../assets/oddologo.png'

function Clients() {
    return(
        <>
            <div className="container-clients">
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='logos-container'>
                <img src={logo1} alt=""/>
                <img src={logo2} alt=""/>
                <img src={logo3} alt=""/>
                <img src={logo4} alt=""/>
                <img src={logo5} alt=""/>
                <img src={oddologo} alt=""/>
            </div>

        </>
    )

}

export default Clients;