import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

export function FetchData() {
  const [data, setData] = useState([]);

  const [darkmode, setDarkMode] = useState({
    color: "#333",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Dark Mode");

  const toggle = () => {
    if (darkmode.color === "#333") {
      setDarkMode({
        color: "#eee",
        backgroundColor: "#333",
      });
      setBtnText("Light Mode");
    } else {
      setDarkMode({
        color: "#333",
        backgroundColor: "white",
      });
      setBtnText("Dark Mode");
    }
  };

  useEffect(() => {
    axios.get(`https://data.covid19india.org/data.json`).then((res) => {
      let db = res.data.statewise;
      setData(db);
    });
  }, []);

  return (
    <div className="data" style={darkmode}>
      <button className="toggle-btn" onClick={toggle}>
        {btntext}
      </button>
      <div className="data_heading">
        <h1>Dashboard | State Wise Data</h1>
      </div>
      <div className="table_data">
        <table style={darkmode}>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
