export function Logo() {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logoImg = document.createElement('img');
  logoImg.src = '/vite.svg';
  logoImg.alt = 'Platform Admin Logo';
  logoImg.classList.add('logo-img');

  const logoText = document.createElement('span');
  logoText.classList.add('logo-text');
  logoText.textContent = 'Platform Admin';

  logoContainer.appendChild(logoImg);
  logoContainer.appendChild(logoText);

  return logoContainer;
}