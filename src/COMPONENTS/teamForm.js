import React, { Component } from "react";
import { Team } from '../MODELS/team'
import { connect } from 'react-redux';
import { saveTeamFunc } from '../CONNECTOR/teamListConnector';

class TeamForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            state: "",
            errors: {
                name: [],
                state: []
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="name">Team Name</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Team Name" value={this.state.name} onChange={this.onChange} />
                    </div>
                    <p>{this.state.errors.name}</p>
                    <div className="form-group">
                        <label htmlFor="state">Team State</label>
                        <input type="text" className="form-control" name="state" id="state" placeholder="State" value={this.state.state} onChange={this.onChange} />
                        <p>{this.state.errors.state}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
    onSubmit(e) {
        e.preventDefault();
        const team = new Team();
        team.name = this.state.name;
        team.state = this.state.state;
        console.log(team);
        //this.setState({name: "", description: "" }); 
        //THE BACKEND CALL
        this.props.saveTeamFunc(team, this.props.history);
    }
    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }
    
}
const mapToStateToProps = state => ({
    team : state.teams.teamDetails
})
export default connect(mapToStateToProps, {saveTeamFunc}) (TeamForm);