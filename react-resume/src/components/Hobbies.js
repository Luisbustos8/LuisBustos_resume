import './Hobbies.css'
import AF from '../Assets/AF.png'
import micro from '../Assets/micro.png'
import air from '../Assets/air.png'
import ski from '../Assets/ski.png'

const Hobbies = () => {

    return (
        <div>
            <div className='tellMeMore'>
                <div class='aboutAndHobbies'>
                    <h3 className='hobbies'>HOBBIES</h3>
                    <div className='firstHobbies'>
                        <img className='AF' src={AF} />
                        <img className='micro' src={micro} />
                    </div>
                    <div className='secondHobbies'>
                        <img className='ski' src={ski} />
                        <img className='air' src={air} />
                    </div>
                </div>
                <div className='about'>
                    <h3 className='aboutMe'>About Me</h3>
                    <div className='text-contaier'>
                        <p className='description'> I am a frontend developer and communicator who loves this profession, especially web development. 
                            I am a passionate madman about the radio. I love made podcast about American Football, especially from the NFL and the 
                            Minnesota Vikings. I also other sports like football, basketball, crossfit and ski. The last one I practice it every winter. In this
                            point two others passions come together. I love travel and skiing. All years I travel to different places of Europe for to practice ski.
                            I am an outgoing person who likes to converse with people about a lot of things!   </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;