const InitialState = {
    hadiths : 'N/A',
    baabs:[],
}

export default function(state = InitialState, action, temp) {
    switch (action.type) {
      case 'hadiths':
        return { ...state, hadiths: action.payload };
      case 'baabs':
          return { ...state, baabs: action.payload };
        
      default:
        return state;
    }
}
  