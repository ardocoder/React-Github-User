import axios from "axios";
import React, {useState} from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }
    
    const handleClick = async () => {
        console.log(searchInput)

        const res = await axios('https://api.github.com/users/:username')

        setRepos(res);
    }

    return (
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
    )
}

export default SearchBar;