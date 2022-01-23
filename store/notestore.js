import axios from 'axios';

export let initialstate = { notes: [] };

async function counterReducer(state, action) {
    switch (action.type) {
      case 'UPDATE_NOTE':
        let res = await axios.get('notes');
        consol.log(res.data)
        return {notes: res.data}
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

  export default counterReducer;
