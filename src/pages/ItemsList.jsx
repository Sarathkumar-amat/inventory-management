import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchItems } from "../redux/action";

export function ItemsList()
{
    let state = useSelector(state=>state);
    // let income = useSelector((state) => state.income);
    const dispatch = useDispatch();
    console.log(state.items);
    useEffect(()=>{
        dispatch(fetchItems());
    },[dispatch])

    return (<div>
        <ul>{state.items?.map((item,index)=>
        <li key={index}>{item.name}</li>)}</ul>
    </div>)
}