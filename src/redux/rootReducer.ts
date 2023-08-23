import boxesReducer, {IBoxesState} from './features/boxes';
import letterReducer, {TLettersState} from './features/letters';

import {combineReducers} from "redux";

export interface IRootState {
    boxes: IBoxesState,
    letters: TLettersState
}

export const rootReducer = combineReducers({
    boxes: boxesReducer,
    letters: letterReducer
});

