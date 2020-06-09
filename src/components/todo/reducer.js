
const defaultState = {
  todoList: [{id:999,text:"aaa",completed:false},{id:888,text:"bbb",completed:true}],
  type:"SHOWALL"
}
const todoReducer = (state = defaultState, action) => {
  console.log(" run [computeReducer] reducer");
  console.log("state:",state);
  
  switch (action.type) {
    case 'ADD_TODO':
      return {...state,
        todoList:[
          ...state.todoList,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
    case 'TOGGLE_TODO':
      return {...state,
        todoList:state.todoList.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      }
    case 'SET_VISIBILITY_FILTER':
      return {...state,type:action.filter}
    default:
      return state
  }
}



// const visibilityFilter = (state = defaultState, action) => {
//   console.log(" run [visibilityFilter] reducer");
//   console.log("state:",state);
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return {...state,type:action.filter}
//     default:
//       return state
//   }
// }

// export { todos,visibilityFilter};
export default todoReducer;