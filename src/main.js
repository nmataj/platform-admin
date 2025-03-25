// import { App } from './App.js';

import './style.css';
import { Header } from '@/components/header';
import { DataTable } from '@/components/data-table';
import { serverApiFetch } from '@/helpers/serverApiFetch';
import { hideLoadingSpinner, showLoadingSpinner } from './components/ui/loading/loading';
import { showErrorModal } from './components/ui/error/error';

export async function App() {
  const app = document.getElementById('app');
  const header = Header();
  
  app.appendChild(header);

  showLoadingSpinner();

  try {
    const data = await serverApiFetch();

    const dataTable = DataTable(data);
    app.appendChild(dataTable);

    hideLoadingSpinner();
  } catch (error) {
    console.error('Error loading data:', error);
    // app.textContent = 'Failed to load data.';
    hideLoadingSpinner();
  }
}

App();