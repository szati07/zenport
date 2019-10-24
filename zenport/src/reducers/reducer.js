const initialState = {
  mealCategory: {
    numberOfPeople: '',
    meal: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
   case 'MEAL_SELECTION':
    return {
     ...state,
     mealCategory: {
       ...state.mealCategory,
       ...action.payload,
     }
    }
   default:
    return state
  }
 }