const initState = {
    people: [
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_PERSON') {
        let newPeople = state.people.filter(people => {
            return people.id !== action.id
        });
        return {
            ...state,
            people: newPeople
        }
    }
    else if (action.type === 'ADD_PERSON') {
        let newPeople = [...state.people, action.data];
        return {
            ...state,
            people: newPeople
        }
    }
    return state;
}

export default rootReducer