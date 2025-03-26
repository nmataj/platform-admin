import './style.css';
import { Header } from '@/components/header';
import { DataTable } from '@/components/data-table';
import { serverApiFetch } from '@/helpers/serverApiFetch';
import { hideLoadingSpinner, showLoadingSpinner } from './components/ui/loading/loading';
import { showErrorModal } from './components/ui/error/error';
import { Controls } from './components/ui/controls/Controls';
import { createSearchBar } from './components/ui/controls/SearchBar';
import { updateTable } from '@/components/data-table';

export async function App() {
  const app     = document.getElementById('app');
  const main    = document.createElement('main');
  const header  = Header();
  const section = Controls(handleSearch);
  let dataTable = DataTable([]);

  app.appendChild(header);
  app.appendChild(main)
  main.appendChild(section);
  main.appendChild(dataTable);

  showLoadingSpinner();

  async function handleSearch(query) {
    const data = await serverApiFetch('./data.json', 'GET', query);
    updateTable(dataTable, data);
  }

  try {
    const data = await serverApiFetch();
    updateTable(dataTable, data);

    hideLoadingSpinner();
  } catch (error) {
    console.error('Error loading data:', error);

    hideLoadingSpinner();
    // showErrorModal();
  }
}

App();