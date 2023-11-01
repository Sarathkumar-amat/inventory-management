const initialState = {
    items:[],
    sales:[],
    loading:false,
    error:null
}

export const inventoryReducer = (state=initialState,action)=>{

    switch(action.type)
    {
        case "FETCH_DATA_LOADING":
            return { ...state, loading: true };
        case "FETCH_ITEMS_SUCCESS":
            console.log(action.payload,"in reducer");
            return {...state,items:action.payload,loading:false,error:null};
        case "FETCH_ITEMS_FAILURE":
            return {...state,loading:false,error:"Error fetching items data"};
    }

}