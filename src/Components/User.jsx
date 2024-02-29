import axios from 'axios';
import React, { useEffect, useState } from 'react'
import design1 from "./homo.module.css";
import { Link } from 'react-router-dom';

export default function User() {

  const [apiDatas, setApiDatas] = useState([]);
  const colors = ["Red", "blue", "yellow", "black","white","orange",
  "pink","grey","gold","brown","darkblue","purple",]


  useEffect(() => {

    fectchingData()
  }, [])

  const fectchingData = () => {
    axios.get("http://localhost:5000/employees")
      .then((res) => { setApiDatas(res.data); })
      .catch((err) => { console.log(err); })

  }
  const deleting = (idR) => {
    axios.delete("http://localhost:5000/employees/" + idR)
      .then(() => { fectchingData() })
  }
  // updating colors 
  const changeColor = (id, img,name,salary,company, selectedColor) => {
    axios.put("http://localhost:5000/employees/" + id, {name:name,salary:salary,company:company,img:img, color: selectedColor })
      .then(() => { fectchingData() })
      .catch((err) => { console.log(err); })
  }

  return (
    <div style={{ margin: "25px", display: "flex", flexWrap: "wrap", gap: "30px" }}>
      {
        apiDatas.map((ele, index) => {
          return (
            <div id={design1.use} style={{ background: ele.color }} key={index}>
              <div className='boxes' >
                <img style={{ width: "150px", height: "150px", borderRadius: "100%" }} src={ele.img} alt="" />
                <hr />
                <div className='head' style={{ margin: "15px" }}>
                  <h1>Name: {ele.name}</h1>
                  <h2>Company: {ele.company}</h2>
                  <h2>Salary: {ele.salary}</h2>
                </div>
                <div className='btn'>
                  <Link to={`/update/${ele.id}`}> <button>update</button></Link>
                  <button onClick={() => { deleting(ele.id) }}>Delete</button>

                    {/* selecting the color from here */}
                  <select style={{backgroundColor:"brown",color:"white" ,width:"20px",height:"20px"}}  onChange={(e) => { changeColor(ele.id, ele.img,ele.name,ele.salary,ele.company, e.target.value) }} >
                    <option>select color</option>
                    {
                      colors.map((color) => {
                        return (
                          <option key={index} value={color} >{color}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
