import React from 'react'
import profileImg from '../../assets/user.png'

function UpdateContact() {
    return (
        <div className="update-contact">
            <div className="container">
                <div className="left-part">
                    <div className="input-user-img">
                        <label htmlFor="user-img" className="labelImg">
                            <img src={profileImg} alt="ajay" />
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="user-img"
                            className="inputImg"
                        // onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div className="right-part">
                    <form>
                        <label htmlFor="name">Want to Update Your Name</label>
                        <input
                            value="bull"
                            type="text"
                            placeholder="Your Name"
                            id="name"
                        // onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="number">Update Mobile Number</label>
                        <input
                            value="9989767"
                            type="number"
                            placeholder="Your Number"
                            id="number"
                        // onChange={(e) => setBio(e.target.value)}
                        />
                        <label htmlFor="email">Update Email</label>
                        <input
                            value="email"
                            type="text"
                            placeholder="Your Email"
                            id="email"
                        // onChange={(e) => setBio(e.target.value)}
                        />
                        <div className="submitbutton">
                            <button className="submit btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateContact