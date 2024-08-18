import { Container, CountryInfo, GoBackBtn, Section } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    asyncWrapper();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn />
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
