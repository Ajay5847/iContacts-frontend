// import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai'
import { BsDownload, BsPlusLg } from 'react-icons/bs'
import './Navbar.scss'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

function Navbar({ setSortedContacts, setFilteredContacts }) {
    const navigate = useNavigate();
    const getData = useSelector(state => state.contactReducer.contactData);
    const [search, setSearch] = useState('');

    async function handleSearch(e) {
        const searchValue = e.target.value;
        setSearch(searchValue); // Update the search state

        if (getData?.contacts) {
            // Filter contacts based on the search input
            const filtered = getData.contacts?.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));
            if (filtered.length === 0) {
                toast.error('Contact Not Found');
            }
            setFilteredContacts(filtered); // Update the filtered contacts state
        }
    }

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
            toast.success("Contacts Sorted")
        }
    }

    async function downloadContactsAsCSV() {
        try {
            const contacts = getData.contacts;

            // Convert the contacts array to a CSV string
            const csv = contacts.map((contact) => {
                return `${contact.name},${contact.mobile},${contact.email}`;
            }).join('\n');

            // Create a Blob object with the CSV data
            const blob = new Blob([csv], { type: 'text/csv' });

            // Create a temporary URL for the Blob
            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'contacts.csv'; // Set the desired file name

            // Trigger the download
            link.click();

            // Clean up the temporary URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading contacts:', error);
        }
    }
    return (
        <div className='Navbar center'>
            <div className="navbar-container center">
                <div className="left center" onClick={() => navigate('/')}>
                    <h1>Contacts</h1>
                    <div className="search">
                        <input placeholder="Search Contact" value={search} onChange={handleSearch} />
                    </div>
                </div>
                <div className="right center">
                    <div className="icon" onClick={downloadContactsAsCSV}>
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