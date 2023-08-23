import {useSelector} from 'react-redux';
import {selectBoxesDisplayList} from '../../redux/features/boxes';
import {Box} from '../Box/Box';
import {ReactElement} from 'react';
import {StyledBoxesListContainer} from './boxesList.styles';

export const BoxesList = (): ReactElement => {
    const boxesDisplayList = useSelector(selectBoxesDisplayList);

    return <StyledBoxesListContainer>
            {boxesDisplayList.map((id) => {
                return <Box
                    id={id}
                    key={id}
                />
            })
        }
    </StyledBoxesListContainer>
}