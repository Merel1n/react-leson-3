import { Container, CountryList, SearchForm, Section } from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const getRegion = region => {
    setSearchParams({ name: region });
  };
  const name = searchParams.get('name');
  console.log(name);

  useEffect(() => {
    if (name === null) return;
    const asyncWrapper = async () => {
      try {
        const data = await fetchByRegion(name);
        setCountries(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, [name]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={getRegion} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
