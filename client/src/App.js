import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Hello, ${input}!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Basic React UI</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Enter your name:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Your Name"
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {message && <h2 style={styles.message}>{message}</h2>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  header: {
    fontSize: '2.5em',
    color: '#333',
  },
  form: {
    marginTop: '20px',
    textAlign: 'center',
  },
  label: {
    fontSize: '1.2em',
    marginBottom: '10px',
    display: 'block',
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: '#28A745',
  },
};

export default App;
