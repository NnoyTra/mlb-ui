
import React, {Component} from "react";
import TeamDetails from "./teamDetails";
import { connect } from 'react-redux';
import { findAllTeamsFunc } from '../ACTIONS/teamActions';
import PropTypes from 'prop-types';

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

TeamList.propTypes = {
    teamList: PropTypes.object.isRequired,
    findAllTeamsFunc: PropTypes.func.isRequired

}

const mapStateToProps = state =>({
    teamList: state.teams.teamList
});
export default connect(mapStateToProps, {findAllTeamsFunc}) (TeamList);