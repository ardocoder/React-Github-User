import React, { Component, Fragment } from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Profile from "../Profile/Profile";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                <SearchBar />
                <Profile />
                </div>
            </Fragment>
        )
    }
}

export default Home;