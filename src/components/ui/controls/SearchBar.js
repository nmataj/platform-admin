import './SearchBar.css';

import { debounce } from '@/helpers/dataHelpers';
import { serverApiFetch } from '@/helpers/serverApiFetch';
import { updateTable } from '@/components/data-table';

export function SearchBar(onSearch) {
  const body     = document.querySelector('body');
  const skipLink = document.createElement('a');
  
  skipLink.href = '#search-bar';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to Search';
  
  body.appendChild(skipLink);

  const input = document.createElement('input');
  input.type = 'search';
  input.id = 'search-bar';
  input.placeholder = 'Search';
  input.setAttribute('aria-label', 'Search');

  const handleInput = debounce((e) => {
    const query = e.target.value.trim();
    onSearch(query)}, 100);

  input.addEventListener('input', handleInput);

  return input;
}

export async function handleSearch(query, dataTable) {
  const data = await serverApiFetch('./data.json', 'GET', query);
  updateTable(data, dataTable);
}