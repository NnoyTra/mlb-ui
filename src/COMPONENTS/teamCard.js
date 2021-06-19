import React, {Component} from "react";
import { connect } from 'react-redux';

class TeamCard extends Component {

    render(){
        let imagen = {};
        if (this.props.team.imagen) {
            try {
                imagen = URL.createObjectURL(this.props.team.imagen);
            } catch (ex) {
                imagen = `http://localhost:9000/teams/imagen/${this.props.team.oid}`
            }
        } else {
            const oid = this.props.team.oid ? this.props.team.oid : 'default-imagen';
            imagen = `http://localhost:9000/teams/imagen/${oid}`
        }
        return (
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={imagen} alt="team Logo" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.team.name}</h5>
                                <p className="card-text">{this.props.team.state}</p>
                                {
                                this.props.team.modifiedOn &&
                                        <p className="card-text"><small className="text-muted">Last updated {this.props.team.modifiedOn}</small></p>
                                    
                                
                                }
                            </div>
                        </div>
                    </div>
            </div>
            
        );
    }
}

const mapToStateToProps = state => ({
    team: state.teams.teamDetails
});

const mapDispatchToProps = {
};
export default connect(mapToStateToProps, mapDispatchToProps) (TeamCard);