import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveTeamFunc, TeamDetailsFieldChange, clearTeamDetails, uploadTeamDetails } from '../CONNECTOR/teamListConnector';
import TeamCard from './teamCard';

class TeamForm extends Component {

    componentWillUnmount() {
        this.props.clearTeamDetails()
    }
     constructor(props) {
        super(props);
        this.state = this.props.state.teamDetails;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }
    render() {
        if (this.props.state.renderFlags.renderTeamForm) {
            return (
                <div className = "container">
                    <br />
                    <div class="row">
                        <div class="col">
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group">
                                    <label htmlFor="name">Team Name</label>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Team Name" value={this.state.name} onChange={this.onChange} onBlur={this.onBlur} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">Team State</label>
                                    <input type="text" className="form-control" name="state" id="state" placeholder="State" value={this.state.state} onChange={this.onChange} onBlur={this.onBlur} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputGroupFile04">Select Imagen</label>
                                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={this.onUpload}/> 
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col">
                            <h3>Card Preview</h3>
                            <TeamCard />
                        </div>
                    </div>
                    <hr/>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const team = this.props.state.teamDetails;
        this.props.saveTeamFunc(team, this.props.history);
    }
    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }
    onBlur(e) {
        this.props.TeamDetailsFieldChange(e.target.name, e.target.value);
    }
    onUpload(e) {
        this.imagen = e.target.files[0];
        this.props.uploadTeamDetails(e.target.files[0]);
    }
}
const mapToStateToProps = state => ({
    state : state.teams
});

const mapDispatchToProps = {
    saveTeamFunc, TeamDetailsFieldChange, clearTeamDetails, uploadTeamDetails
};

export default connect(mapToStateToProps, mapDispatchToProps) (TeamForm);