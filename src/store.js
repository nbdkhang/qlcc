import {createStore} from "redux"
import rootReducer from "./redux/reducer/rootReducer"

const saveToLocalStorage =(state)=>
{
    try{
        const serialzedState= JSON.stringify(state);
        localStorage.setItem('state',serialzedState);

    }catch(e)
    {
        console.log(e);
    }
}
const loadFromLocalStorage=()=>
{
    try{
        const serialzedState= localStorage.getItem('state');
        if(serialzedState===null)
            return undefined;
        return JSON.parse(serialzedState)
    }catch(e)
    {
        console.log(e);
        return undefined;
    }
}
const persistedState= loadFromLocalStorage();
const store = createStore(
    rootReducer,
    persistedState
    );
store.subscribe(()=>saveToLocalStorage(store.getState()));
export default store;