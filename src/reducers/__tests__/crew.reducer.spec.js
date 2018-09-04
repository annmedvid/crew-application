import crewReducer from '../crew.reducer';
import { FETCH_CREW_LIST, CHANGE_CREW_STAGE } from '../../constants/actionTypes';

describe('crew reducer', () => {
    const initialState = {
        crewList: [],
        stages: {
            0: 'applied',
            1: 'interviewing',
            2: 'hired'
        },
        error: null
    };

    describe('initial state', () => {
        it('should define and return default state', () => {
            const action = {};

            expect(crewReducer(undefined, action)).toEqual(initialState);
        });

        it('should return previous state on unhandled action', () => {
            const expected = {};
            const action = {
                type: 'UNHANDLED'
            };

            expect(crewReducer(expected, action)).toBe(expected);
        });
    });

    describe(`state change on ${FETCH_CREW_LIST}_SUCCESS action type`, () => {
        it('should alter new state with new crewList', () => {
            const expected = {
                crewList: [
                    {
                        name: 'Mr A',
                        currentStage: 0
                    }
                ],
                stages: {
                    0: 'applied',
                    1: 'interviewing',
                    2: 'hired'
                },
                error: null
            };
            const action = {
                type: `${FETCH_CREW_LIST}_SUCCESS`,
                data: {
                    result: [
                        {
                            name: 'Mr A'
                        }
                    ]
                }
            };

            expect(crewReducer(initialState, action)).toEqual(expected);
        });

    describe('state change on CHANGE_CREW_STAGE action type', () => {
        it('should change stage for appropriate crew', () => {
            const state = {
                crewList: [
                    {
                        name: 'Mr A',
                        id: {
                            value: '12345'
                        },
                        currentStage: 0
                    }
                ]
            };
            const expected = {
                crewList: [
                    {
                        name: 'Mr A',
                        id: {
                            value: '12345'
                        },
                        currentStage: 1
                    }
                ]
            };
            const action = {
                type: CHANGE_CREW_STAGE,
                data: {
                    id: '12345',
                    step: 1
                }
            };

            expect(crewReducer(state, action).crewList).toEqual(expected.crewList);
        });

        it('should not change stage for unappropriate crew', () => {
            const state = {
                crewList: [
                    {
                        name: 'Mr A',
                        id: {
                            value: '12345'
                        },
                        currentStage: 0
                    }
                ]
            };
            const expected = {
                crewList: [
                    {
                        name: 'Mr A',
                        id: {
                            value: '12345'
                        },
                        currentStage: 0
                    }
                ]
            };
            const action = {
                type: CHANGE_CREW_STAGE,
                data: {
                    id: '77777',
                    step: 1
                }
            };

            expect(crewReducer(state, action).crewList).toEqual(expected.crewList);
        });
    });
});
