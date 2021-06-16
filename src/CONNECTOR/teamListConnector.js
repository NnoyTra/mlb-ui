import axios from 'axios';
const TEAM_API = "http://localhost:9000/teams";

export const findAllTeamsFunc = () => async dispatch => {
    try{
        const response = await axios.get(TEAM_API);
        console.log(response.data);
        dispatch({type: "FIND_ALL_TEAMS", payload: response.data});
    } catch (error) {
        console.log("ERROR AT FIND ALL TEAMS.");
    }
}

export const saveTeamFunc = (newTeam, history) => async dispatch => {
    try {
        await axios.post(TEAM_API, newTeam);
        history.push("/teams");
    } catch (error) {
        console.log("ERROR AT SAVE ALL TEAM.");
    }
}
