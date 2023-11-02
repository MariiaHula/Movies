import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ownFunction = async () => {
      try {
        setLoading(true);
        const data = await fn(param);
        console.log(data);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    ownFunction();
  }, [fn, param]);

  return { data, setData, loading, error };
};
