import {CheckBox} from '../Checkbox/CheckBox';
import {ChangeEvent, ReactElement, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateBoxStatus} from '../../redux/features/boxes';
import {StyledTogglesListContainer} from './togglesList.styles';

const TOGGLES_IDS = ['0','1','2','3','4','5','6'];
export const TogglesList = (): ReactElement => {
    const dispatch = useDispatch();

    const handleToggleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        dispatch(updateBoxStatus({
            id,
            checked
        }));
    }, [dispatch])

    return <StyledTogglesListContainer>
        {TOGGLES_IDS.map(toggleId => {
            return <CheckBox
                key={toggleId}
                id={toggleId}
                label={`toggle ${toggleId}`}
                handleChange={handleToggleChange}
            />
        })}
    </StyledTogglesListContainer>
}