import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById("root") as HTMLDivElement | null;

if (!rootElement) {
  throw new Error("Ошибка! Элемент не найден в DOM");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);