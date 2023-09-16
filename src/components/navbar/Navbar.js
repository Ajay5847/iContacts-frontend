// import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { AiOutlineSortAscending } from 'react-icons/ai'
import { BsDownload, BsPlusLg } from 'react-icons/bs'
import './Navbar.scss'

function Navbar() {

    return (
        <div className='Navbar center'>
            <div className="navbar-container center">
                <div className="left center">
                    <h1>Contacts</h1>
                </div>
                <div className="middle">
                    <input placeholder="Search Contact" />
                </div>
                <div className="right center">
                    <div className="icon">
                        <BsDownload />
                    </div>
                    <div className="icon">
                        <BsPlusLg />
                    </div>
                    <div className="icon">
                        <AiOutlineSortAscending />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar