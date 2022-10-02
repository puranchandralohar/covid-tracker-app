import axios from 'axios'
import React, { useEffect, useState} from 'react'
import "./Style.css"

export function FetchData() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios
      .get(`https://data.covid19india.org/data.json`)
      .then((res)=>{
        let db = res.data.statewise;
        console.log(db);
        setData(db);
      })
  },[])
  return (
    <div>
        <div className="data_heading">
          <h1>Dashboard | State Wise Data</h1>
        </div>
        <div className="table_data">
            <table>
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
                {
                  data.map((item,index)=>{
                    return(
                      <tr>
                        <td>{item.state}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.recovered}</td>
                        <td>{item.deaths}</td>
                        <td>{item.active}</td>
                        <td>{item.lastupdatedtime}</td>
                      </tr>
                    )
                  })
                }
                
              </tbody>
            </table>
        </div>
    </div>
  )
}
