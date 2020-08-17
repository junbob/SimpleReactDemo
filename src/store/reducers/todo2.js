import { SAVETODOLIST, UPDATETODOITEM } from "../actions/todo";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // case SAVETODOLIST:
    //   console.log("reducer2");
    //   return {abc:action.data};

    case "UPDATETODOITEM2":
      let newState = JSON.parse(JSON.stringify(state));

      return newState;

    // case "Addtodo":
    //   let newState = JSON.parse(JSON.stringify(state));
    //   newState.push({});
    //   return newState;

    default:
      return state;
  }
};
