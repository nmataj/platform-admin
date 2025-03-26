import './style.css';
import { Header } from '@/components/header';
import { DataTable } from '@/components/data-table';
import { serverApiFetch } from '@/helpers/serverApiFetch';
import { hideLoadingSpinner, showLoadingSpinner } from './components/ui/loading/Loading';
import { Controls, handleSearch } from './components/ui/controls/';
import { updateTable } from '@/components/data-table';

export async function App() {
  const app     = document.getElementById('app');
  const main    = document.createElement('main');
  const header  = Header();
  let dataTable = DataTable([]);
  const section = Controls(query => handleSearch(query, dataTable));

  app.appendChild(header);
  app.appendChild(main)
  main.appendChild(section);
  main.appendChild(dataTable);

  showLoadingSpinner();

  try {
    const data = await serverApiFetch();
    updateTable(data, dataTable);

    hideLoadingSpinner();
  } catch (error) {
    console.error('Error loading data:', error);

    hideLoadingSpinner();
    // showErrorModal();
  }
}

App();