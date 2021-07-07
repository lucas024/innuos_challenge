
const initialState = {
    albums : {},

}
export default function(state = initialState, action) {
    switch (action.type) {
        case "SET_ALBUMS" : {
            console.log(action.payload);
            return {
                ...state,
                albums : action.payload
            }
            
        }
        default: 
            return state;
    }
}
