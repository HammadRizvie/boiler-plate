const INITIAL_STATE = 
{
    name: "Hammad",
    data: "i love u"
}
export default (state = INITIAL_STATE, action)=>
{
    console.log(action);
    switch (action.type) {
        case "Set Data":
            return({
                ...state,
                data: action.data
            })
            break;
    
        default:
            break;
    }
    return state;
}