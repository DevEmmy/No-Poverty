import React, {useState} from 'react'
import Nav from '../LandingPage/Nav'
import Footer from '../LandingPage/Footer'

function Auth() {
    const {learner, setLearner} = useState(true);


    const Learners = ()=>{
        return(
            <div className='learners_compo'>
                <h1>Become a Learner</h1>
                <h3>"a quote on learning" - "the person's name</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quibusdam quis ipsa ab laudantium. Eum aut quis commodi mollitia debitis.
                </p>
            </div>
        )
    }


    const Volunteers = ()=>{
        return(
            <div className="volunteers_compo">
                <h1>Become a Volunteer</h1>
                <h3>"</h3>
            </div>
        )
    }
  return (
    <div className='auth_compo'>
        <Nav />
        <div className="auth_options">
            <div className="auth_option">For Learners</div>
            <div className="auth_option">For Volounteers</div>
        </div>
        <Footer />
    </div>
  )
}

export default Auth