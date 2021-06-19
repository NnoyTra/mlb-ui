import axios from 'axios';
export const TEAM_API = "http://localhost:9000/teams";

export const findAllTeamsFunc = () => async dispatch => {
    try{
        axios.get(TEAM_API).then((response) => {
            dispatch({ type: "TEAMS_FIND_ALL", value: response.data });
        });
    } catch (error) {
        console.log("ERROR AT FIND ALL TEAMS.");
        console.log(error);
    }
}

export const saveTeamFunc = (newTeam, history) => async dispatch => {
    try {
        const imagen = newTeam.imagen;
        newTeam.imagen = null;
        axios.post(TEAM_API, newTeam).then((teamResponse) => {
            if (imagen != null) {
                const data = new FormData();
                data.append('imagen', imagen, imagen.name);
                const headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'multipart/form-data'
                }
                axios.post(TEAM_API + `/upload-imagen/${teamResponse.data.oid}`, data, {headers: headers}).then((response) => {
                    history.push("/teams");
                    dispatch({ type: "TEAMS_AFTER_SAVE", value: teamResponse.data });
                });
            }
            else {
                history.push("/teams");
            dispatch({ type: "TEAMS_AFTER_SAVE", value: teamResponse.data });
            }
        });
    } catch (error) {
        console.log("ERROR AT SAVE ALL TEAM.");
    }
}

export const TeamDetailsFieldChange = (field, value) => async dispatch => {
    dispatch({ type: "TEAMS_DETAILS_FIELD_CHANGE", field, value });
}

export const clearTeamDetails = () => async dispatch => {
    dispatch({ type: "TEAMS_DETAILS_CLEAR" });
}

export const uploadTeamDetails = (value) => async dispatch => {
    dispatch({ type: "TEAMS_DETAILS_UPLOAD", value });
}

export const onUpdateTeam = (value) => async dispatch => {
    dispatch({ type: "TEAMS_DETAILS_UPDATE", value });
}

export const renderTeamForm = () => async dispatch => {
    dispatch({ type: "TEAMS_FORM_RENDER" });
}