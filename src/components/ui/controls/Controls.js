import { CreateAccountButton } from "./CreateAccountButton";
import { createSearchBar } from "./SearchBar";

export function Controls(onSearch) {
  const section = document.createElement('section');
  section.className = 'controls';

  const input = createSearchBar(onSearch);
  const button = CreateAccountButton();

  section.appendChild(input);
  section.appendChild(button);

  return section;
}
