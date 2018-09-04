import { FETCH_CREW_LIST, CHANGE_CREW_STAGE } from '../constants/actionTypes';
import { CREW_URL } from './../constants/api';

export const fetchCrewList = () => (dispatch) => {
    const url = CREW_URL;

    return fetch(url, { credentials: 'same-origin' })
        .then(response => response.json())
        .then(json => dispatch(fetchCrewListSuccess(json)))
        .catch(error => dispatch(fetchCrewListFailed(error)));
};

export const fetchCrewListSuccess = list => ({
    type: `${FETCH_CREW_LIST}_SUCCESS`,
    data: list
});

export const fetchCrewListFailed = error => ({
    type: `${FETCH_CREW_LIST}_FAILED`,
    error
});

export const changeCrewStage = (id, step) => ({
    type: CHANGE_CREW_STAGE,
    data: { id, step }
});
