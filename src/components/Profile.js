import React, { useEffect, useState } from "react";

const Profile = () => {
    const [name, setName] = useState('');
    const [login, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    // const [err, setErr] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/example')
        .then(res => res.json())
        .then(data => {
            setData(data);
        });
    }, []);

    const setData = ({
        name,
        login,
        followers,
        following,
        public_repos,
        avatar_url
    }) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);

    }

    return (
        <div className="card" style={{ width:300 }}>
        <img src={avatar} className="card-img-top" alt="card" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{login}</p>
            <p className="card-text">{followers} Followers</p>
            <p className="card-text">{following} Following</p>
            <p className="card-text">{repos} Repository</p>
        </div>
        </div>
     )
}

export default Profile;