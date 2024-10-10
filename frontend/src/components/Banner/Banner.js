import React from 'react'
import img from '../Images/banner1.png'
import './Banner.css'
// import Button from '../Button/Button'
import { useHistory} from 'react-router'

function Banner({setFirstEmail, firstEmail}) {
    // const [firstEmail, setFirstEmail] = useState('')
    const history = useHistory();

    const signupHandler = () =>{
        let path = `/signup`
        history.push(path)
    }
    return (
        <div id="main-div">
        <div className="banner">
            <div className="content">
                <h1 id="h1-banner">Scheduling App by <span id="span-react-node">React & NodeJS</span></h1>
                <p id="p-tag">Bookly is your hub for allowing users to schedule appointments, meetings, and events with ease, eliminating the need for back-and-forth emails</p>
                <div className="signup-banner">
                    <input type="email" id="input-banner"  value={firstEmail} placeholder="Enter your email" onChange={setFirstEmail}/>
                    <button id="button-banner" onClick={signupHandler}>Sign Up</button>
                </div>
                <p id="message-banner">Create your free account. No credit card required.</p>
            </div>
            <img className="img" src={img} alt="banner"></img>
            
        </div>
  
       </div>
    )
}

export default Banner
