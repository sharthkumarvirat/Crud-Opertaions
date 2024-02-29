import React, { useEffect, useState } from 'react'
import design2 from "./homo.module.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const [updateName, setUpdateName] = useState("");
  const [updateSalary, setUpdateSalary] = useState("");
  const [updateCompany, setUpdateCompany] = useState(""); 
  const [updateImage, setUpdateImage] = useState("");

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    fetchUpdate()
  }, [id])

  const fetchUpdate = () => {
    axios.get("http://localhost:5000/employees/" + id)
      .then((res) => {
        setUpdateName(res.data.name); setUpdateSalary(res.data.salary);
        setUpdateCompany(res.data.company); setUpdateImage(res.data.img)
      })
      .catch((err) => { console.log(err); })
  }
  const updating = () => {
    if (updateName !== "" && updateCompany !== "" && updateSalary !== "") {
      axios.put("http://localhost:5000/employees/" + id, {
        name: updateName, salary: updateSalary,
        company: updateCompany, img: updateImage
      })
        .then(() => { navigate("/user") })
        .catch((err) => { console.log(err); })
    }
    else {
      alert("enter something")
    }


  }
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div id={design2.box1}>
        <img style={{ width: "150px", height: "150px", borderRadius: "100%" }} src="https://media.istockphoto.com/id/1286823354/vector/update-icon-elegant-glass-blue-round-button-vector-design-illustration.jpg?s=612x612&w=0&k=20&c=Ph3xygA1n0RuzgSmkhDwT-SvZx0OpZNTfrFN6GaO0zg=" alt="" />
        <input type="text" placeholder='Enter Name' value={updateName} onChange={(e) => { setUpdateName(e.target.value) }} />
        <input type="text" placeholder=' Salary' value={updateSalary} onChange={(e) => { setUpdateSalary(e.target.value) }} />
        <input type="text" placeholder='Company' value={updateCompany} onChange={(e) => { setUpdateCompany(e.target.value) }} />
        <input type="text" placeholder='enter the url' value={updateImage} onChange={(e) => { setUpdateImage(e.target.value) }} />
        <button onClick={updating}>Update</button>
      </div>

    </div>
  )
}
