import { useState } from 'react';

const SensorDataSender = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const sendSensorData = async () => {
    try {
      const apiURL = 'http://192.168.0.117:5000/api/sensor'; // URL da sua API
      const ldrValue = 123; // Valor simulado do LDR
      const irValue = 456; // Valor simulado do sensor IR

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ldr_value: ldrValue, ir_value: irValue })
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage(`Dados enviados com sucesso: ${JSON.stringify(responseData)}`);
      } else {
        setResponseMessage(`Erro ao enviar dados: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Erro ao enviar dados: ${error.message}`);
    }
  };

  return (
    <div>
      <button onClick={sendSensorData}>Enviar Dados do Sensor</button>
      <p>{responseMessage}</p>
    </div>
  );
};

export default SensorDataSender;