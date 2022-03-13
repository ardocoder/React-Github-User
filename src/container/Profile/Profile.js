import React, { useEffect, useState } from "react";
import RepoList from "../../components/RepoList";

function Profile() {
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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <RepoList />
        </div>
     )
}

export default Profile;