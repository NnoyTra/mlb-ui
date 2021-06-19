const initialState = {
    teamList: [],
    teamDetails: {},
    orderBy: 'modifiedOn',
    isAscending: true,
    renderFlags: {
        renderTeamList: false,
        renderTeamForm: false,
    }
}
export default function(state = initialState, action){

    switch (action.type){
        case "TEAMS_FIND_ALL": {
            const teamList = sortBy(action.value, state.orderBy, state.isAscending);
            const renderFlags = resetFlags(state.renderFlags, RENDERFLAGS.TEAM_LIST);
            return Object.assign({}, {...state, teamList, renderFlags });
        }
        case "TEAMS_DETAILS_FIELD_CHANGE": {
            const teamDetails = {...state.teamDetails, [action.field]: action.value}
            return Object.assign({}, {...state, teamDetails});
        }
        case "TEAMS_DETAILS_CLEAR": {
            const teamDetails = emptyTeamDetails();
            return Object.assign({}, {...state, teamDetails});
        }
        case "TEAMS_DETAILS_UPLOAD": {
            const teamDetails = {...state.teamDetails};
            teamDetails.imagen = action.value
            return Object.assign({}, {...state, teamDetails});
        }
        case "TEAMS_DETAILS_UPDATE": {
            const teamDetails = action.value;
            const renderFlags = resetFlags(state.renderFlags, RENDERFLAGS.TEAM_FORM);
            return Object.assign({}, {...state, teamDetails, renderFlags});
        }
        case "TEAMS_AFTER_SAVE": {
            const newTeam = action.value;
            let founded = false;
            let list = [];
            state.teamList.map((team) => {
                if (team.oid === newTeam.oid) {
                    list.push(newTeam);
                    founded = true;
                }
                else {
                    list.push(team);
                }
            });
            if (!founded) {
                list.unshift(newTeam);
            }
            const renderFlags = resetFlags(state.renderFlags, RENDERFLAGS.TEAM_LIST);
            const teamList = sortBy(list, state.orderBy, state.isAscending);
            return Object.assign({}, {...state, teamList, renderFlags});
        }
        case "TEAMS_FORM_RENDER": {
            const renderFlags = resetFlags(state.renderFlags, RENDERFLAGS.TEAM_FORM);
            return Object.assign({}, {...state, renderFlags });
        }
        default:{
            return state;
        }
    }
    
}

function emptyTeamDetails() {
    return { name: '', state: '' };
}

export function sortBy(list, orderBy, isAscending) {
    if (isAscending) {
        return list.sort((a, b) => (a[orderBy] < b[orderBy]) ? 1 : -1);
    } else {
        return list.sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : -1);
    }
}

function resetFlags(renderFlags, selectedFlag) {
    for (const key in renderFlags) {
        if (key.toString() === selectedFlag) {
            renderFlags[key] = true;
        }
        else {
            renderFlags[key] = false;
        }
    }
    return renderFlags;
}

export const RENDERFLAGS = {
    TEAM_FORM: 'renderTeamForm',
    TEAM_LIST: 'renderTeamList'
}