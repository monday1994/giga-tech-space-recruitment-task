import {FETCH_INTERVAL} from '../../config/constants';
import {memo, ReactElement, useEffect, useState} from 'react';
import {fetchLetter} from '../../api/lettersCalls';
import {useDispatch, useSelector} from 'react-redux';
import {selectSortedText, selectText, updateLetters} from '../../redux/features/letters';
import {StyledBoxContainer, StyledLabel, StyledText, StyledTextHeader} from './box.styles';
import {handleError} from '../../errors/errors';

interface IBoxProps {
    id: string;
}
export const Box = memo(({ id }: IBoxProps): ReactElement => {
    const dispatch = useDispatch();
    const text = useSelector(selectText);
    const sortedText = useSelector(selectSortedText);

    //state
    const [lastFetchedLetter, setLastFetchedLetter] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const { data } = await fetchLetter(id);
                const {letter, letter_index} = data;
                setLastFetchedLetter(letter);
                dispatch(updateLetters({ letter, letter_index }));
            } catch(err) {
                handleError(`error in fetch, id: ${id} ${err}`);
            }
        }, FETCH_INTERVAL)
        return () => {
            clearInterval(interval);
        }
    }, [dispatch, id]);

    return <StyledBoxContainer>
        <StyledLabel>ID: {id}</StyledLabel>
        <StyledLabel>Letter: {lastFetchedLetter}</StyledLabel>
        <StyledTextHeader>Last 30 Letters:</StyledTextHeader>
        <StyledText>
            {text}...
        </StyledText>
        <StyledTextHeader>Sorted by index last 30 Letters:</StyledTextHeader>
        <StyledText>
            {sortedText}
        </StyledText>
    </StyledBoxContainer>
});
