import './DataTable.module.css';

const headersArray = ['ID', 'Company Name', 'Owner email'];

export function DataTable(data = [], headers = headersArray) {
  const table     = document.createElement('table');
  const thead     = table.createTHead();
  const headerRow = thead.insertRow();

  //const actualHeaders = data.length > 0 ? Object.keys(data[0]) 
  //                                      : headers;

  if (!headers || headers.length === 0) {
    const th = document.createElement('th');
    th.textContent = 'No data';
    th.colSpan = 1;
    headerRow.appendChild(th);
  } else {
    headers.forEach((headerText) => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  }

  const tbody = table.createTBody();

  data.forEach((item) => {
    const row = tbody.insertRow();
    actualHeaders.forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = item[key] || '';
    });
  });

  return table;
}

export function updateTable(data, table) {
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}