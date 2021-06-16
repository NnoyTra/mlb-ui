const initialState = {
    teamList: [],
    teamDetails: {
        name: "",
        state: ""
    }
}
export default function(state = initialState, action){

    switch (action.type){
        case "FIND_ALL_TEAMS": 
            return{
                ...state,
                teamList: action.payload
            }
        
        default:{
            return state;
        }
    }
    
}