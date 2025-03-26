export function createSearchBar(onSearch) {
  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = 'Search';
  input.setAttribute('aria-label', 'Search');

  let debounceTimeout;
  
  const debounce = (callback, delay) => {
    return (...args) => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => callback(...args), delay);
    };
  };

  const handleInput = debounce((e) => {
    const query = e.target.value.trim();
    onSearch(query)}, 100);

  input.addEventListener('input', handleInput);

  return input;
}