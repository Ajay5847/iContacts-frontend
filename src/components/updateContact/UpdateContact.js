import React, { useEffect, useState } from 'react'
import './UpdateContact.scss'
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/slices/contactSlice';
import { axiosClient } from '../../axios/axisoClient';
import toast from 'react-hot-toast';

function UpdateContact() {
    const data = useSelector(state => state.contactReducer.contactData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const params = useParams();

    const findContact = async () => {
        const oldContact = await data?.contacts?.find((item) => item._id === params.id);
        setName(oldContact?.name || '');
        setMobile(oldContact?.mobile || '');
        setEmail(oldContact?.email || '');
    }

    useEffect(() => {
        findContact();
    }, [data]);

    async function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // Make the Axios request to create the contact
            const response = await axiosClient.put(`/api/contacts/${params.id}`, { name, mobile, email });
            if (response.status === "ok") {
                toast.success("contact Updated")
                navigate('/');
            }
        } catch (error) {
            toast.error(error);
        }
    }

    return (
        <div className="UpdateContact">
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

export default UpdateContact