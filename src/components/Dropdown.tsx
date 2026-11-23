import { useState } from 'react';
import './Dropdown.css';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}

export default function Dropdown({ label, value, options, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.find((option) => option.value === value);

  function choose(newValue: string) {
    onChange(newValue);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button
        type="button"
        className={isOpen ? 'dropdown-button open' : 'dropdown-button'}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={label}
        aria-expanded={isOpen}
      >
        <span>{selected ? selected.label : label}</span>
      </button>

      {isOpen && <div className="dropdown-backdrop" onClick={() => setIsOpen(false)} />}

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={option.value === value ? 'dropdown-option selected' : 'dropdown-option'}
                onClick={() => choose(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
