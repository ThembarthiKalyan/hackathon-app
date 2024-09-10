import Header from "../Header/Header";
import Button from '@mui/material/Button';
import rocket from '../../assets/icons/PicsArt_04-14-04.42 1.svg';
import './Homepage.css';
import Project from "../Project/Project";
import Advantages from "../Advantages/Advantages";
import { Link } from "react-router-dom";
import Challenges from "../Challenges/Challenges";

function HomePage(){

    return(
        <div>
            <Header/>
            {/* <div>
                <div className="create-div">
                    <div className="rec-div"></div>
                    <div className="content-div">
                        <h1 style={{marginBottom: 0}}>Accelerate innovation</h1>
                        <h1 style={{marginTop: "5px"}}>with Global AI Challenges</h1>
                        <p>AI Challenges at DPhi simulate real-world problems. It is a</p>
                        <p>great place to put your AI/Data Science skills to test on</p>
                        <p>diverse datasets allowing you to faster learning through</p>
                        <p>competitions.</p>
                        <Button variant="contained" style={{background: "white", color: "black", marginTop: "15px"}}>Create Challenge</Button>
                    </div>
                    <img src={rocket} alt='rocket' className="rocket"/>
                </div>
            </div> */}
            <div className="create-div">
                    <div className="rec-div"></div>
                    <div className="content-div">
                        <h1 style={{marginBottom: 0}}>Accelerate innovation</h1>
                        <h1 style={{marginTop: "5px"}}>with Global AI Challenges</h1>
                        <p>AI Challenges at DPhi simulate real-world problems. It is a</p>
                        <p>great place to put your AI/Data Science skills to test on</p>
                        <p>diverse datasets allowing you to faster learning through</p>
                        <p>competitions.</p>
                        <Link to='/challenge'><Button variant="contained" style={{background: "white", color: "black", marginTop: "15px"}}>Create Challenge</Button></Link>
                        
                    </div>
                    <img src={rocket} alt='rocket' className="rocket"/>
            </div>
            <Project/>
            <Advantages/>
            <Challenges/>
            <div></div>
            <div></div>
        </div>
    )
}

export default HomePage;