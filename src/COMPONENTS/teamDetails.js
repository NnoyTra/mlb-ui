import React, {Component} from "react";
import { connect } from 'react-redux';
import yankeesLogo from './../IMG/yankeesLogo.jfif'

class TeamDetails extends Component {
    render(){
        const team = this.props.myTeam;
        return (
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={yankeesLogo} alt="team Logo"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{team.name}</h5>
                        <p className="card-text">{team.state}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapToStateToProps = state => ({
    team: state.teams.teamDetails
})
export default connect(mapToStateToProps, {}) (TeamDetails);