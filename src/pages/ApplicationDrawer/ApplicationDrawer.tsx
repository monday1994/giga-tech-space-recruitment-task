import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'
import {BaseStyle} from "./applicationDrawer.styles";
import {Home} from "../Home/Home";
import {HOME_ROUTE} from "../../config/constants";
import {NotFound} from "../NotFound/NotFound";
import { store, persistor } from '../../redux/store';
import {ReactElement} from 'react';

const ApplicationDrawer = (): ReactElement => {
    return (
        <Router>
            <BaseStyle />
            <main>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                            <Routes>
                                <Route path={HOME_ROUTE} element={<Home />} />

                                <Route
                                    path='*'
                                    element={<NotFound />}
                                />
                            </Routes>
                    </PersistGate>
                </Provider>
            </main>
        </Router>
    );
};

export { ApplicationDrawer };
