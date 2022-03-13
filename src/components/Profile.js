import React, { useEffect, useState } from "react";

const Profile = () => {
//     const [name, setName] = useState('');
//     const [userName, setUserName] = useState('');
//     const [followers, setFollowers] = useState('');
//     const [following, setFollowing] = useState('');
//     const [userImage, setuserImage] = useState('');
//     const [err, setErr] = useState('');

    return (
        <div className="card" style={{ width:300}}>
        <img src="https://placeimg.com/200/150/tech" className="card-img-top" alt="card" />
        <div className="card-body">
            <h5 className="card-title">Name</h5>
            <p className="card-text">User Name</p>
            <p className="card-text">Followers</p>
            <p className="card-text">Following</p>
        </div>
        </div>
     )
}

export default Profile;