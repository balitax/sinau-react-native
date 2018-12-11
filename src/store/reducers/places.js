
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
import { selectPlace } from '../actions/places';


const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                   key: Math.random(),
                   name: action.placeName,
                   image: {
                       uri: "https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg"
                   } 
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectPlace: null
            };
        case SELECT_PLACE:
            return {
                ...state,
                selectPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectPlace: null
            };
        default:
            return state;
    }
};

export default reducer;