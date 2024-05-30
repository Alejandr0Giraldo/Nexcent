import './styles.css'
import icon_membership from '../../assets/Icon.png'
function Community() {
    return(
        <>
            <div className='container-title'>
                <p className='title'>Manage your entire community in a single system</p>
            </div>
            <div className=' container-target'>
                <div className='icon-title'>
                    <img src={icon_membership} alt=""/>
                    <h1>Membership Organisations</h1>
                </div>
                <div className='description'>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </>
    )
}
export default Community;