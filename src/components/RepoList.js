import React from "react";

const RepoList = (props) => {
    const {repos} = props;
    console.log('Repos: ', repos);

    return (
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">repo 1</li>
                <li className="list-group-item">repo 2</li>
                <li className="list-group-item">repo 3</li>
            </ul>
        </div>
    )
}

export default RepoList;