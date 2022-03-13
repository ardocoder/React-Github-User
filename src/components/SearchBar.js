import React from "react";

const SearchBar = (props) => {
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
                        value={props.value}
                        onChange={props.onChange}
                    />
                    </div>
                    <div className="col-1">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={props.onClickSearch}
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