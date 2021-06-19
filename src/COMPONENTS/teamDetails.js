import React, {Component} from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { onUpdateTeam } from './../CONNECTOR/teamListConnector'

class TeamDetails extends Component {

    constructor(props) {
        super(props);
        this.team = this.props.myTeam;
        this.onUpdateTeam = this.onUpdateTeam.bind(this);
    }
    render(){
        return (
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <Link to="/teamForm" onClick={this.onUpdateTeam}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`http://localhost:9000/teams/imagen/${this.team.oid}`} alt="team Logo" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.team.name}</h5>
                                <p className="card-text">{this.team.state}</p>
                                <p className="card-text"><small className="text-muted">Last updated {this.team.modifiedOn}</small></p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            
        );
    }

    onUpdateTeam() {
        this.props.onUpdateTeam(this.props.myTeam);
    }
}

const mapToStateToProps = state => ({
    team: state.teams.teamDetails
});

const mapDispatchToProps = {
    onUpdateTeam
};
export default connect(mapToStateToProps, mapDispatchToProps) (TeamDetails);