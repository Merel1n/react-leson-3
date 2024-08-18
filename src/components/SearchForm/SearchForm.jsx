import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('default');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        onChange={handleChange}
        aria-label="select"
        className={styles.select}
        name="region"
        value={value}
        required
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option key={region.id} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};
