import notebook from '../../assets/icons/carbon_notebook-reference.svg';
import vector from '../../assets/icons/Vector.svg';
import Robot from '../../assets/icons/Robot.svg';
import idIcon from '../../assets/icons/IdentificationCard.svg'
import './Advantages.css';

function Advantages(){
    return(
        <div className='adv-div'>
            <h1 style={{textAlign: 'center'}}>Why Participate in <span style={{color: '#0FA958'}}>AI Challenges?</span></h1>
            <div className='adv-content'>
                <div className='content-1' style={{marginBottom: '30px'}}>
                   <div className='skill-div'>
                        <img src={notebook} alt='icon'/>
                        <h4>Prove your skills</h4>
                        <p style={{fontSize: '16px'}}>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                    </div> 
                    <div className='community-div'>
                        <img src={vector} alt='icon'/>
                        <h4>Learn from community</h4>
                        <p style={{fontSize: '16px'}}>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>
                    </div>
                </div>
                <div className='content-1'>
                   <div className='skill-div'>
                        <img src={Robot} alt='icon'/>
                        <h4>Challenge yourself</h4>
                        <p style={{fontSize: '16px'}}>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                    </div> 
                    <div className='community-div'>
                        <img src={idIcon} alt='icon'/>
                        <h4>Earn recognition</h4>
                        <p style={{fontSize: '16px'}}>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages;