import React from "react";

const RepoList = (props) => {
    const {repos} = props;
    console.log('Repos: ', repos);

    const repoList = repos.length !== 0 ? (
        repos.data.map((item) => (
        <li className="list-group-item" key={item.id}>
            <a href={item.html_url}>{item.name}</a>
        </li>
        ))
    ) : (
        <li className="list-group-item">No Repository</li>
    );

    return (
        <div>
            <ul className="list-group list-group-flush">
                {repoList}
            </ul>
        </div>
    )
}

export default RepoList;