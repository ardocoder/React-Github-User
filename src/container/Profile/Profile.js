import React, { useState } from "react";

function Profile() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [userImage, setuserImage] = useState('');
    const [searchBar, setSearchBar] = useState('');
    const [err, setErr] = useState('');

    return (
        <div className="card" style={{ width:400 }}>
        <img className="card-img-top" src="avatar.png" alt="Card" style={{ width:100 }} />
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Lorem ipsum </p>
        </div>
        </div>
     )
}

export default Profile;