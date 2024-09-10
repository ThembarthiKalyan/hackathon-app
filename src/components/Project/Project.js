import ai from '../../assets/icons/Group 1000002515.svg';
import contact from '../../assets/icons/Group 1000002516.svg';
import icon3 from '../../assets/icons/Group 1000002518.svg';
import './Project.css';

function Project(){
    return(
        <div className='list-div'>
            <ul className='ul-div'>
                <li style={{borderRightStyle: 'solid'}}>
                    <img src={ai} alt='ai'/>
                    <div>
                        <h4 className='zero-margin'>100K+</h4>
                        <p className='zero-margin'>AI model submissions</p>
                    </div>
                </li>
                <li style={{borderRightStyle: 'solid'}}>
                    <img src={contact} alt='ai'/>
                    <div>
                        <h4 className='zero-margin'>50K+</h4>
                        <p className='zero-margin'>Data Scientists</p>
                    </div>
                </li>
                <li>
                    <img src={icon3} alt='ai'/>
                    <div>
                        <h4 className='zero-margin'>100+</h4>
                        <p className='zero-margin'>AI Challenges hosted</p>
                    </div>
                </li>
            </ul>
        </div>
        
    )
}

export default Project;