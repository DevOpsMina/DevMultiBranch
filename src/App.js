/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://api-mina.learn.cloudlaya.com/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://api-mina.learn.cloudlaya.com/api/data', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Give Me Description Please:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name Pleasee:</strong> {item.name} <br />
            <strong>Description Pleaseeeee HIHIH:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-mina.learn.cloudlaya.com/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-mina.learn.cloudlaya.com/api/data', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/


/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-mina.learn.cloudlaya.com');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-mina.learn.cloudlaya.com', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via Reactt and Node.jss</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Descriptionn:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List PleaseEEEEEEEE</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Nameeee: </strong> {item.name} <br />
            <strong>Description Pleasee:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('api-mina.learn.cloudlaya.com/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-mina.learn.cloudlaya.com/data', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name: </strong> {item.name} <br />
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;





