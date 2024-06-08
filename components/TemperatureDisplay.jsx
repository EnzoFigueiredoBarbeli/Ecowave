import { useEffect, useState } from 'react';

const TemperatureDisplay = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        console.log('Fetching temperature data...');
        const response = await fetch('http://127.0.0.1:5000/api/temp');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data fetched successfully:', data);
        setTemperature(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchTemperature();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Temperature Data</h1>
      <pre>{JSON.stringify(temperature, null, 2)}</pre>
    </div>
  );
};

export default TemperatureDisplay;