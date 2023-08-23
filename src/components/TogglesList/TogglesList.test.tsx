import {TogglesList} from './TogglesList';
import {render, screen} from '../../tests/customRender';

const preloadedState = {
    boxes: {displayList: ['2', '3', '5']}
}
describe('TogglesList tests suite', () => {
    test('TogglesList should properly render', async () => {
        render(<TogglesList /> , { preloadedState });

        for(const id of preloadedState.boxes.displayList) {
            const checkboxItem = screen.getByTestId(`checkbox-${id}`);
            expect(checkboxItem).toBeInTheDocument();
        }
    });
});