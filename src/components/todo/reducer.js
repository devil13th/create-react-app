


const reducerObj = {
  todos : (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  },
  visibility :  (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
}

const todo = (state = {}, action) => {
  Object.keys(reducerObj).forEach(k => {
    if(action.type === k){
      reducerObj[k] = (state)
    }
  })

  return {...state,todo:obj}
}


export default todo;