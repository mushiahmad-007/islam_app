const InitialState = {
    surah : 'N/A',
}

export default function(state = InitialState, action, temp) {
    switch (action.type) {
      case 'surah':
        return { ...state, surah: action.payload };
      
      default:
        return state;
    }
}
  