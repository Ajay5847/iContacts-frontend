import React, { useState } from 'react'
import './CreateContact.scss'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { createContact } from '../../redux/slices/contactSlice';
import { axiosClient } from '../../axios/axisoClient';
import toast from 'react-hot-toast';

function CreateContact() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // Make the Axios request to create the contact
            const response = await axiosClient.post("/api/contacts", { name, mobile, email });
            if (response.status === "ok") {
                // Dispatch the createContact action
                await dispatch(createContact(response.data));
                toast.success("Contact Created")
                // Navigate to the home page
                navigate('/');
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <div className="CreateContact">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Want to Update Your Name</label>
                <input
                    value={name}
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="number">Update Mobile Number</label>
                <input
                    value={mobile}
                    type="number"
                    placeholder="Your Number"
                    id="number"
                    onChange={(e) => setMobile(e.target.value)}
                />
                <label htmlFor="email">Update Email</label>
                <input
                    value={email}
                    type="text"
                    placeholder="Your Email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="submitbutton">
                    <button className="submit btn-secondary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateContact