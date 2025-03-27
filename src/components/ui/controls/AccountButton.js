import './AccountButton.css';

export function AccountButton() {
  const button = document.createElement('button');
  button.className = 'create-account';
  button.textContent = 'Create new Account';
  return button;
}