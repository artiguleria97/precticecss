import React, { useState } from 'react';

const LogsSection = () => {
  const [logs, setLogs] = useState([]);

  const addLog = () => {
    const newLog = `Log ${logs.length + 1}`;
    setLogs([...logs, newLog]);
  };

  return (
    <div className="logs-section">
      <div className="logs-toolbar">
        <button onClick={addLog}>Add Log</button>
      </div>
      <div className="logs-container">
        {logs.map((log, index) => (
          <div key={index} className="log">{log}</div>
        ))}
      </div>
    </div>
  );
};

export default LogsSection;
