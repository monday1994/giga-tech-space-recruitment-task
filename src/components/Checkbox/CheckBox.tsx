import {ChangeEvent, memo, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {selectBoxStatusById} from '../../redux/features/boxes';
import {StyledCheckboxContainer} from './checkBox.styles';

interface ICheckBoxProps {
    id: string;
    label: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    wrapperStyle?: Record<string, unknown>;
}

export const CheckBox = memo((props: ICheckBoxProps): ReactElement => {
    const { id, label, handleChange, wrapperStyle = {} } = props;
    const boxStatus = useSelector(selectBoxStatusById(id));

    return <StyledCheckboxContainer style={wrapperStyle}>
        <input id={id} type={'checkbox'} onChange={handleChange} checked={boxStatus} data-testid={`checkbox-${id}`}/>
        <span>{label}</span>
    </StyledCheckboxContainer>
});