import { AccountButton } from "./AccountButton";
import { SearchBar } from "./SearchBar";

export function Controls(onSearch) {
  const section = document.createElement('section');
  section.className = 'controls';

  const input = SearchBar(onSearch);
  const button = AccountButton();

  section.appendChild(input);
  section.appendChild(button);

  return section;
}
