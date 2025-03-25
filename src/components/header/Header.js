import './Header.module.css';
import { Logo } from './logo/Logo';
import { Filter } from './filter/Filter';

export function Header() {
  const app = document.getElementById('app');

  const header = document.createElement('header');

  const logo = Logo();
  header.appendChild(logo);

  const filter = Filter();
  header.appendChild(filter);

  app.appendChild(header);

  return header;
}