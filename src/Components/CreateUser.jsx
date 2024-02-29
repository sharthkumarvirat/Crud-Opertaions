import React, { useState } from 'react'
import design from "./homo.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {

  const [addName, setAddName] = useState("");
  const [addSalary, setAddSalary] = useState("");
  const [addCompany, setAddComapny] = useState("");
  const [addColor,setAddColor]=useState("");
  const [addImage,setAddImaage ] = useState("");

  let use = useNavigate();


  const submit = () => {
    // let load={
    //   name:addname,
    //   empSalry:salary,
    //   empCompany:company
    // }
    if (addName !== "" && addSalary !== "" && addCompany !== ""&& addImage!=="" ) {
      axios.post("http://localhost:5000/employees", {name: addName,salary: addSalary, 
      company: addCompany,img:addImage,color:addColor })

        .then(() => { setAddName(""); setAddSalary(""); setAddComapny("");setAddImaage("");use('/user') })
        .catch((err) => { console.log(err); })
    }
    else {

      alert("enter details")
    }

  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div id={design.box}>
        <img style={{width:"150px",height:"150px", borderRadius:"100%"}} src="https://png.pngitem.com/pimgs/s/421-4212929_add-new-member-icon-clipart-png-download-add.png" alt="" />
        <input type="text" placeholder='Enter Name' value={addName} onChange={(e) => { setAddName(e.target.value) }} />
        <input type="text" placeholder=' Salary' value={addSalary} onChange={(e) => { setAddSalary(e.target.value) }} />
        <input type="text" placeholder='Company' value={addCompany} onChange={(e) => { setAddComapny(e.target.value) }} />
        <input type="text" placeholder='enter the url' value={addImage} onChange={(e)=>{setAddImaage(e.target.value)}} />
        <input type="color" value={addColor} onChange={(e)=>{setAddColor(e.target.value)}} />
        <button onClick={submit} >submit</button>
      </div>

    </div>

  )
}
