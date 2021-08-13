import React, {useState,useEffect} from 'react';
import axios from 'axios';

function callServer() {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/test`, {
    params: {
      table: 'sample',
    },
  }).then((response) => {
    console.log(response.data);
  });
}

export function SampleComponent() {
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/test`, {
      params: {
        table: 'sample',
      },
    }).then(response => setData(response.data));
  }, []);
  return (
    <div>
      <h1>Choose a plan:</h1>
      {callServer()}
        <table>

        <tr>
          <th></th>
          {data.map((row) => (
            <th>{row.plan}</th>
          ))}
        </tr>

        <tr>
          <td>General</td>
          {data.map((row) => (
            <td>{row.General}</td>
          ))}
        </tr>

        <tr>
          <td>Specialist</td>
          {data.map((row) => (
            <td>{row.Specialist}</td>
          ))}
        </tr>

        <tr>
          <td>Physiotherapy</td>
          {data.map((row) => (
            <td>{row.Physiotherapy}</td>
          ))}
        </tr>
        <tr>
          <td>
          </td>
          <td>
            <input
              id="Standard"
              value="standard"
              name="standard_plan"
              type="radio"
            />
            <p>HK$0/month</p>
          </td>
          <td>
            <input
              id="Premium"
              value="premium"
              name="premium_plan"
              type="radio"
            />
            <p>HK$388/month</p>
          </td>
        </tr>
        </table>

    </div>

  );
}
