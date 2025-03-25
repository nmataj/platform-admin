import './DataTable.module.css';

export function DataTable(data) {
  if (!data || data.length === 0) return document.createTextNode('No data available.');

  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);

  const headers = Object.keys(data[0]);
  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  data.forEach((item) => {
    const row = tbody.insertRow();
    headers.forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = item[key];
    });
  });


  return table;
}
