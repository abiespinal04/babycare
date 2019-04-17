export default (state = {}, action) => {
    switch(action.type){
        case 'addDaycare': {
        return action.payload
        }
        default:{
        return state
        }
    }
    
};