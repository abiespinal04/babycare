

export default (state = {}, action) => {
    switch(action.type){
        case 'addDaycare': {
            console.log("Reducer",action.payload)
        return action.payload
        }
        default:{
        return state
        }
    }
    
};