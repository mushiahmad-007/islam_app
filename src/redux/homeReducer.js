const InitialState = {
  day: 'No Internet Connection',
  month: 'N/A',
  year: 'N/A',
  duaOfTheMoment: 'N/A',
  ayatOfTheMoment: 'N/A',
  hadeesOfTheMoment: 'N/A',
  nameOfAllah: 'N/A',
  quranicWord: 'N/A',
};

export default function(state = InitialState, action) {
  switch (action.type) {
    case 'SaveHijri':
      return {
        ...state,
        day: action.payload.day,
        month: action.payload.month,
        year: action.payload.year,
      };
    case 'duaOfTheMoment':
      return { ...state, duaOfTheMoment: action.payload };
    case 'ayatOfTheMoment':
      return { ...state, ayatOfTheMoment: action.payload };
    case 'nameOfAllah':
      return { ...state, nameOfAllah: action.payload };
    case 'quranicWord':
      return { ...state, quranicWord: action.payload };
    case 'hadeesOfTheMoment':
      return { ...state, hadeesOfTheMoment: action.payload };

    default:
      return state;
  }
}
