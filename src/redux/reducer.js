import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actions-type";

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {}
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            let copia1 = state.myFavorites;
            copia1.push(payload);
            return {
                ...state,
                myFavorites: copia1,
                allFavorites: [...state.allFavorites, payload]
            }
        case REMOVE_FAV:
            let copia2 = state.myFavorites.filter((char) => char.id !== Number(payload));
            return {
                ...state,
                myFavorites: copia2
            }


        case FILTER_FAV:
            let copia3 = payload === "All" ? state.allFavorites : state.allFavorites.filter(char => char.gender === payload);
            return {
                ...state,
                myFavorites: copia3
            }
        case ORDER_FAV:
            let copia4 = state.myFavorites.sort((a, b) => {
                return payload === 'Ascendente' ? a.id - b.id : b.id - a.id
            });
            return {
                ...state,
                myFavorites: copia4
            }



        default:
            return {
                ...state
            }
        }
}

export default rootReducer;