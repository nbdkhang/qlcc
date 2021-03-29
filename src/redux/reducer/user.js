const initialState = {
  info: [],
  list_apart: [],
  selectedId: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const newInfo = [...state.info];
      newInfo.push(action.payload);
      return {
        ...state,
        info: newInfo,
      };
    }
    case "DELETE_USER":{
      return {
        ...state,
        info: state.info.filter((item, index) => index !== action.payload),
      };
    }
    case "ADD_APART":{
      const newList=[...state.list_apart];
      newList.push(action.payload);
      return{
        ...state,
        list_apart:newList
      };
    }
    
      case "DELETE_APART":{
        return {
          ...state,
          list_apart: state.list_apart.filter((item, index) => index !== action.payload),
        };
      }
    default:
      return state;
  }
};
export default userReducer;
