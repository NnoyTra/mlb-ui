
import React, {Component} from "react";
import TeamDetails from "./teamDetails";
import { connect } from 'react-redux';
import { findAllTeamsFunc } from '../CONNECTOR/teamListConnector';

class TeamList extends Component {

    componentDidMount(){
        this.props.findAllTeamsFunc();
    }
    render(){
        const teamList = this.props.teamList;
        if(teamList.length > 0) {
        return (
        <div>
            <h4>Team List</h4>
                <div>
                    {
                        teamList.map((team)=>(
                            <TeamDetails key={team.oid} myTeam={team}/>
                        ))
                    }
                </div>
        </div>
        );
        }
        else {
            return (
                <h3>EMPTY LIST</h3>
            );
        }
    }
}

const mapStateToProps = state =>({
    teamList: state.teams.teamList
});

const mapDispatchToProps = {
    findAllTeamsFunc
};
export default connect(mapStateToProps, mapDispatchToProps) (TeamList);