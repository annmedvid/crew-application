import {
    fetchCrewList,
    changeCrewStage
} from '../crew.actions';
import { CHANGE_CREW_STAGE } from '../constants/actionTypes';

describe('Crew actions tests', () => {
    describe('#fetchCrewList', () => {
        it('should return thunk', () => {
            expect(isFunction(fetchCrewList).toBe(true);
        });
    });

    describe('#changeCrewStage', () => {
        it('should return action with proper type', () => {
            expect(changeCrewStage().type).toBe(CHANGE_CREW_STAGE);
        });

        it('should return action with proper payload', () => {
            const id = '12345';
            const step = 1;
            expect(changeCrewStage(id).data.id).toBe(id);
            expect(changeCrewStage(id).data.id).toBe(step);
        });
    });
});
