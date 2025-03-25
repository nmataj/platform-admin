export function Filter() {
  const filterDiv = document.createElement('div');
  filterDiv.classList.add('filter');

  const filterLabel = document.createElement('span');
  filterLabel.textContent = 'FILTER:';
  filterDiv.appendChild(filterLabel);

  const btnAll = document.createElement('button');
  btnAll.classList.add('active');
  btnAll.textContent = 'All';
  filterDiv.appendChild(btnAll);

  const btnFree = document.createElement('button');
  btnFree.textContent = 'Free';
  filterDiv.appendChild(btnFree);

  const btnPaying = document.createElement('button');
  btnPaying.textContent = 'Paying';
  filterDiv.appendChild(btnPaying);

  return filterDiv;
}