import { team } from '../ACTIONS/types';

const initialState = {
    teamList: [],
    teamDetails: {
        name: "",
        state: ""
    }
}
export default function(state = initialState, action){

    switch (action.type){
        case team.FIND_ALL_TEAMS: 
            return{
                ...state,
                teamList: action.payload
            }
        
        default:{
            return state;
        }
    }
    
}