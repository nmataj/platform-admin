import './style.css';
import { Header } from '@/components/header';
import { FilterTable } from '@/components/filter-table';

export function App() {
  const app = document.getElementById('app');

  const header = Header();
  app.appendChild(header);
}