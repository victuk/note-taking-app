import { createStore } from 'redux';

let st = { value: [] };

let prepState = st.value;

function counterReducer(state = st, action) {
    switch (action.type) {
      case 'number/add':
        if(prepState.includes(action.payload)) {
          prepState.splice(prepState.indexOf(action.payload), 1);
          return {value: prepState};
        } else {
          prepState.push(action.payload)
        return {value: prepState}
        }

        case 'number/ticket':
        prepState.push(action.payload)
        // console.log(prepState)
      return {value: prepState}
      case 'number/RmvTicket':
      prepState.splice(prepState.indexOf(action.payload), 1);
      return {value: prepState};
      case 'number/ClearTicket':
      prepState = [];
      return {value: []};
      default:
        return state
    }
  }



  let store = createStore(counterReducer);

  export default store;
