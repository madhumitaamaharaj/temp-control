import React, { useState } from 'react';
import styles from "./Temp.module.css";

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20);

  let colorClass = '';

  if (temperature >= 20 && temperature < 30) {
    colorClass = styles.yellow;
  } else if (temperature >= 30 && temperature < 50) {
    colorClass = styles.orange;
  } else if (temperature >= 50) {
    colorClass = styles.red;
  }
  return (
    <div className={`${styles.container} ${colorClass}`}>
      <h1>Temperature Control</h1>
      <p>Current Temperature: {temperature}°C</p>
      <button onClick={() => setTemperature(prevTemp => prevTemp - 1)}>
        Decrease Temperature
      </button>
      <button onClick={() => setTemperature(prevTemp => prevTemp + 1)}>
        Increase Temperature
      </button>
    </div>
  );
};

export default TemperatureControl;
