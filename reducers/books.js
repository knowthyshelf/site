import Immutable from 'immutable'

export default (state = Immutable.List(['Code More!']), action) => {
  switch(action.type) {
    case 'book':
      return state.push(action.book)
    default:
      return state
  }
}