
import React, {Component} from "react";
import TeamDetails from "./teamDetails";
import { connect } from 'react-redux';
import { findAllTeamsFunc } from '../CONNECTOR/teamListConnector';

class TeamList extends Component {

    render(){
        if (this.props.state.renderFlags.renderTeamList) {
            const teamList = this.props.state.teamList;
            if(teamList.length > 0) {
            return (
            <div>
                <br />
                <h4>Team List</h4>
                    <div>
                        { teamList.map((team)=>( <TeamDetails key={team.oid} myTeam={team}/> )) }
                    </div>
            </div>
            );
            }
            else {
                return (
                    <h3>EMPTY LIST</h3>
                );
            }
        } else {
            return(
                <div></div>
            );
        }
    }
}

const mapStateToProps = state =>({
    state: state.teams
});

const mapDispatchToProps = {
    findAllTeamsFunc
};
export default connect(mapStateToProps, mapDispatchToProps) (TeamList);