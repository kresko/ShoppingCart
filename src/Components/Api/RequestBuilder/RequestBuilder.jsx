import { useEffect, useState } from 'react';

const RequestBuilderCart = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error }
};

RequestBuilderCart.propTypes;
export default RequestBuilderCart;
