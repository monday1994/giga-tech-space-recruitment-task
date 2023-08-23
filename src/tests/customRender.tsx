import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { EnhancedStore } from '@reduxjs/toolkit';
import boxesReducer from '../redux/features/boxes';
import lettersReducer from '../redux/features/letters';

interface ICustomRenderOptions {
    preloadedState?: Record<string, any>;
    store?: EnhancedStore;
}

const customRender = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = configureStore({ reducer: {
            boxes: boxesReducer,
            letters: lettersReducer
        }, preloadedState }),
        ...renderOptions
    }: ICustomRenderOptions = {}
) => {
    const Wrapper = ({ children }: {children: React.ReactNode}) => {
        return (<Provider store={store}>
            {children}
        </Provider>)
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export {customRender as render};