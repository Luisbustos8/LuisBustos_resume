import './contact.css'

import git from '../Assets/git.png'
import phone from '../Assets/phone .png'
import mail from '../Assets/mail.png'
import linkedin from '../Assets/linkedin.png'

const Contact = () => {
     
    return (
        <div className='Contact'>
            <div className='contact'>
               <a href='https://github.com/Luisbustos8' target="_blank"> <img className='git' src={git} /> </a>
                <a href='tel:663200116'><img className='phone' src={phone} /></a>
                <a href="mailto:luisabustoslucas@gmail.com"><img className='mail' src={mail} /></a>
                <a href='https://www.linkedin.com/in/luisalejandrobustos/' target="_blank"><img className='lin' src={linkedin} /></a>
            </div>
        </div>
    )
};

export default Contact;