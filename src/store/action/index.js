const set_data =(data)=>
{
    return(dispatch)=>
    {
        dispatch({
            type:"Set Data",
            data: data
        })
    }
}
export {
    set_data
}