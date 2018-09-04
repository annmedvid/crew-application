import { get } from 'lodash';
import { FETCH_CREW_LIST, CHANGE_CREW_STAGE } from '../constants/actionTypes';

const initialState = {
    crewList: [],
    stages: {
        0: 'applied',
        1: 'interviewing',
        2: 'hired'
    },
    error: null
};

const crewReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_CREW_LIST}_SUCCESS`: {
            const results = get(action.data, 'results', []);
            const crewList = results.map(item => ({
                ...item,
                currentStage: 0
            }));

            return ({
                ...state,
                crewList,
                error: null
            });
        }
        case `${FETCH_CREW_LIST}_FAILED`:
            return ({
                ...state,
                error: action.error
            });
        case CHANGE_CREW_STAGE: {
            const crewList = state.crewList.map(item => {
                if (item.id.value === action.data.id) {
                    return ({
                        ...item,
                        currentStage: item.currentStage + action.data.step
                    });
                }

                return item;
            });

            return ({
                ...state,
                crewList
            })
        }
        default:
            return state;
    }
};

export default crewReducer;
