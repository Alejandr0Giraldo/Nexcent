import Button from "../Button/button.jsx";
import ilustration from "../../assets/Illustration.png";
import './styles.css';

function Banner() {
    return(
        <>
            <section className='container-section'>
                <div>
                    <div className='big-info'>
                        <p>Lessons and insights </p>
                        <p className='green-years'>from 8 years</p>
                    </div>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <div><Button/></div>
                </div>
                <div>
                    <img src={ilustration} alt=""/>
                </div>
            </section>
        </>
        )


}

export default Banner
