import './style.css';
import { Header } from '@/header/Header';

export function App() {
  const app = document.getElementById('app');

  const header = Header();
  app.appendChild(header);
}