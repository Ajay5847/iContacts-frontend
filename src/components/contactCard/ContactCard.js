import React from 'react'
import './ContactCard.scss'
import profileImg from '../../assets/user.png'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { axiosClient } from '../../axios/axisoClient'
import toast from 'react-hot-toast'
import { getContactData } from '../../redux/slices/contactSlice'

function ContactCard({ contact }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleDelete() {
        try {
            await axiosClient.delete(`/api/contacts/${contact._id}`);
            dispatch(getContactData());
            toast.success("contact deleted");
        } catch (error) {
            toast.error("Internal Server Error")
        }
    }
    return (
        <div className='ContactCard center'>
            <div className="contactcard-container center">
                <div className="profile-img">
                    <img src={profileImg} alt="profile" />
                </div>
                <div className="name">
                    <p>{contact.name}</p>
                </div>
                <div className="mobile-number">
                    <h4>+91 {contact.mobile}</h4>
                </div>
                <div className="email">
                    <p>{contact.email}</p>
                </div>
                <div className="bottom-icons">
                    <div className="edit-icon icon" onClick={() => navigate(`/updatecontact/${contact._id}`)} >
                        <MdModeEdit />
                    </div>
                    <div className="delete-icon icon" onClick={handleDelete}>
                        <MdDelete />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard