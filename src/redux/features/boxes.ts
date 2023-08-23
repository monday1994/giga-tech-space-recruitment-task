import { createSlice } from '@reduxjs/toolkit'
import {IRootState} from '../rootReducer';
import {createSelector} from 'reselect';

export type IBoxesState = {
    displayList: string[];
}
export type IBoxesAction = {payload: {id: string, checked: boolean}};

export const boxesSlice = createSlice({
    name: 'boxes',
    initialState: {
        displayList: [] as string[]
    },
    reducers: {
        updateBoxStatus: (state: IBoxesState, action: IBoxesAction) => {
            const { id, checked } = action.payload;

            if(checked) {
                state.displayList.push(id);
            } else {
                state.displayList = state.displayList.filter(displayId => displayId !== id);
            }

            return state;
        }
    },
})

export const { updateBoxStatus } = boxesSlice.actions
export const selectBoxes = (state: IRootState) => state.boxes;
export const selectBoxesDisplayList = createSelector(selectBoxes, (boxes) => boxes.displayList);
export const selectBoxStatusById = (id: string) => createSelector(selectBoxes, (boxes) => !!boxes.displayList.find(boxId => boxId === id));

export default boxesSlice.reducer

