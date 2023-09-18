// import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai'
import { BsDownload, BsPlusLg } from 'react-icons/bs'
import './Navbar.scss'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

function Navbar({ setSortedContacts }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getData = useSelector(state => state.contactReducer.contactData);

    async function handleSort() {
        // Check if there is data to sort
        if (getData?.contacts) {
            const sorted = [...getData.contacts];
            sorted.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
            setSortedContacts(sorted);
        }
    }
    return (
        <div className='Navbar center'>
            <div className="navbar-container center">
                <div className="left center" onClick={() => navigate('/')}>
                    <h1>Contacts</h1>
                </div>
                <div className="middle">
                    <input placeholder="Search Contact" />
                </div>
                <div className="right center">
                    <div className="icon">
                        <BsDownload />
                    </div>
                    <div className="icon" onClick={() => navigate('/createcontact')}>
                        <BsPlusLg />
                    </div>
                    <div className="icon" onClick={handleSort}>
                        <AiOutlineSortAscending />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar