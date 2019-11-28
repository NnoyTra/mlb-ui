import React, {Component} from "react";
import { connect } from 'react-redux';

class TeamDetails extends Component {
    render(){
        const team = this.props.myTeam;
        return (
        <div>
            <h5>{team.oid}-{team.name}-{team.state}</h5>
        </div>
        );
    }
}

const mapToStateToProps = state => ({
    team: state.teams.teamDetails
})
export default connect(mapToStateToProps, {}) (TeamDetails);