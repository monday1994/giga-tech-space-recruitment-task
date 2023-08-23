import { createSlice } from '@reduxjs/toolkit'
import {IRootState} from '../rootReducer';
import {createSelector} from 'reselect';
import {copyArrayOfObjects} from '../../utils/utils';

type TLettersData = {letter: string, letter_index: number};

export type TLettersState = TLettersData[];
export type TLettersAction = {payload: TLettersData};

export const lettersSlice = createSlice({
    name: 'letters',
    initialState: [] as TLettersData[],
    reducers: {
        updateLetters: (state: TLettersState, action: TLettersAction) => {
            const { letter, letter_index } = action.payload;

            if(state?.length >= 30) {
                state.shift();
            }
            state.push({ letter, letter_index });
            return state;
        }
    },
})

export const { updateLetters } = lettersSlice.actions
export const selectLetters = (state: IRootState): TLettersData[] => state.letters;

export const selectText = createSelector(selectLetters, (lettersObjectsArr): string => {
    const lettersArray = lettersObjectsArr.map(({letter}) => letter);
    return lettersArray.join('');
});

export const selectSortedText = createSelector(selectLetters, (lettersObjectsArr) => {
    const arrayCopy = copyArrayOfObjects<TLettersData>(lettersObjectsArr);
    const sortedLettersObjectsArray = arrayCopy.sort((a: TLettersData, b: TLettersData) => a.letter_index - b.letter_index);
    const lettersArray = sortedLettersObjectsArray.map(({letter}: {letter: string}) => letter);
    return lettersArray.join('');
});

export default lettersSlice.reducer

