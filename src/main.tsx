import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import store from "./store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
} else {
    // Можно вывести ошибку или лог
    console.error('Элемент с id "root" не найден в DOM!');
}
