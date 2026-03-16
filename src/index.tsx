import App from './App';
import { createRoot } from 'react-dom/client';

const wrapper = document.getElementById('root');
if (wrapper) {
  const root = createRoot(wrapper);
  root.render(<App />);
} else {
  console.error('Element with ID "root" not found in the DOM');
}
