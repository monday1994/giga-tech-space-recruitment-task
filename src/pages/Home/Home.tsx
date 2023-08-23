import {ReactElement} from 'react';
import {StyledPage} from '../../assets/styles/base.styles';
import {TogglesList} from '../../components/TogglesList/TogglesList';
import {StyledList} from './home.styles';
import {BoxesList} from '../../components/BoxesList/BoxesList';

export const Home = (): ReactElement => {
    return <StyledPage>
        <h1 style={{textAlign: 'center'}}>Toggle checkboxes to see boxes ;)</h1>
        <StyledList>
            <TogglesList />
        </StyledList>
        <StyledList>
            <BoxesList />
        </StyledList>
    </StyledPage>
}