
export const fetchItems = () => async (dispatch)=>{
    try{
        dispatch({type:"FETCH_DATA_LOADING"});
        const response = await fetch("https://inventory-management-backend.sarathkumarnall.repl.co/api/items");
        console.log(response);
        const data = await response.json();
        console.log(data);
        dispatch({type:"FETCH_ITEMS_SUCCESS",payload:data.allItems});
    }
    catch(error)
    {
        console.log(error);
        dispatch({type:FETCH_DATA_FAILURE});
    }
}