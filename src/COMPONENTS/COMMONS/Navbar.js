import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { findAllTeamsFunc, renderTeamForm } from './../../CONNECTOR/teamListConnector'

class Navbar extends Component {
    render() {
        return (
            <div className="my-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/home">Home</NavLink>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/teams" onClick={() => {this.props.findAllTeamsFunc()}}>Teams <span className="sr-only">(current)</span></NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/reservations">Reservations</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/teamForm" onClick={() => {this.props.renderTeamForm()}}>Create Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}
const mapToStateToProps = state => ({
    state: state
});

const mapDispatchToProps = {
    findAllTeamsFunc, renderTeamForm
};
export default connect(mapToStateToProps, mapDispatchToProps) (Navbar);