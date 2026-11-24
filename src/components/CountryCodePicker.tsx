import { useState } from 'react';
import { COUNTRY_CODES } from '../data/countries';
import './CountryCodePicker.css';

interface CountryCodePickerProps {
  value: string;
  onChange: (code: string) => void;
}

export default function CountryCodePicker({ value, onChange }: CountryCodePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = COUNTRY_CODES.find((c) => c.code === value);

  function choose(code: string) {
    onChange(code);
    setIsOpen(false);
  }

  return (
    <div className="cc-picker">
      <button
        type="button"
        className={isOpen ? 'cc-button open' : 'cc-button'}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Country code"
        aria-expanded={isOpen}
      >
        {selected && <img src={selected.flag} alt={selected.country} className="cc-flag" />}
        <span>{value}</span>
      </button>

      {isOpen && <div className="cc-backdrop" onClick={() => setIsOpen(false)} />}

      {isOpen && (
        <ul className="cc-menu">
          {COUNTRY_CODES.map((c) => (
            <li key={c.code}>
              <button
                type="button"
                className={c.code === value ? 'cc-option selected' : 'cc-option'}
                onClick={() => choose(c.code)}
              >
                <img src={c.flag} alt="" className="cc-flag" />
                <span className="cc-country">{c.country}</span>
                <span className="cc-code">{c.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
