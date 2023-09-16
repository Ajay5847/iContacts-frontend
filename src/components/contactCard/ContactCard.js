import React from 'react'
import './ContactCard.scss'
import profileImg from '../../assets/user.png'
import { MdModeEdit, MdDelete } from 'react-icons/md'

function ContactCard() {
    return (
        <div className='ContactCard center'>
            <div className="contactcard-container center">
                <div className="profile-img">
                    <img src={profileImg} alt="profile" />
                </div>
                <div className="name">
                    <p>Ajay Kumar</p>
                </div>
                <div className="mobile-number">
                    <h4>+91 889780367</h4>
                </div>
                <div className="email">
                    <p>ajay@346689</p>
                </div>
                <div className="bottom-icons">
                    <div className="icon" >
                        <MdModeEdit />
                    </div>
                    <div className="icon">
                        <MdDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard