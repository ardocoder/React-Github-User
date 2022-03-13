import axios from "axios";
import React, {Fragment, useState} from "react";
import Profile from "./Profile";
import RepoList from "./RepoList";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);
    const [post, setPost] = useState([]);

    const getPostAPI = () => {
        axios.get(`https://api.github.com/users/${searchInput}`)
        .then(data => {
            setPost(data);
        })
    }

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }
    
    const handleClick = async () => {
        console.log(searchInput)

        try {
            const res = await axios(`https://api.github.com/users/${searchInput}/repos`)
            setRepos(res);

            getPostAPI()
                
        } catch(err) {
            console.log(err)
        }

    };

    return (
        <Fragment>
        <div className="row" style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="col">
            <h3>Search Github User</h3>
            <div className="card">
                <div className="card-body">
                <div className="form-row">
                    <div className="col-11">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type github username"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="col-1">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="card" style={{ width:500 }}>
            <div className="card-body">
                <h3 className="card-title">Result Repository List</h3>
            </div>
        </div>
        <RepoList repos={repos} />
        <Profile post={post} />
        </Fragment>
    )
}

export default SearchBar;