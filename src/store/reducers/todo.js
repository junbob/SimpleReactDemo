import { SAVETODOLIST, UPDATETODOITEM } from "../actions/todo";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVETODOLIST:
      console.log("reducer1");
      return action.data;

    case UPDATETODOITEM:
      let newState = JSON.parse(JSON.stringify(state));
      newState.find((x) => x.id === action.targetId).title = action.targetValue;
      return newState;

    // case "Addtodo":
    //   let newState = JSON.parse(JSON.stringify(state));
    //   newState.push({});
    //   return newState;

    default:
      return state;
  }
};
