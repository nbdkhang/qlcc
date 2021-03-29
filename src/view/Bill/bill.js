import React,{useEffect, useState}  from 'react';
import {useSelector} from "react-redux";

import GridItem from "../../component/Grid/GridItem.js";
import GridContainer from "../../component/Grid/GridContainer.js";
import DropdownButton from "../../component/CustomButtons/DropdownButton"
import{speciesChoice,timeChoice,headerElec} from "./billService"
import{createURL, handleData} from "./billService"
import TableList from '../../component/TableList/TableList.js';
export default function Bill()
{   
  // const [electricBill, setElectricBill]= useState("");
  // const [waterBill,setWaterBill]=useState(""); 
  
  const userInfo=useSelector(state=>state.user.info);
  const token=userInfo[0].token;
  const apartment_id=userInfo[0].infoUser.apartment_id;
  const [url,setUrl]=useState(process.env.REACT_APP_API_LINK+`/api/elec-bill/all/${apartment_id}`);
  const [bill,setBill]=useState([]); 
  const [header,setHeader]=useState(headerElec);
  const [name,setName]=useState("Hóa đơn điện")
  const  handleSubmit=async(species,time)=>{
    const result =createURL(species,time,apartment_id);
    //console.log(result);
    await setUrl(result.url);
    await setHeader(result.header);
    await setName(result.name);
    console.log("submit")
    console.log(url,header,name);
  }

  useEffect(() => {
      fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
         Authorization:'Bearer '+ `${token}`,
         'Content-Type': 'application/json',
    },
      // body: JSON.stringify(body),
    })
      .then((res) => {
        if(res.status === 200){
    
          return res.json();     
      }else if(res.status === 500){
         
      }
      })
      .then((result) => {
        setBill(handleData(result.data));
      })
      .catch((err) => {
        console.log(err);       
      });
    },[url]);
    return(
        <div>
            <GridContainer>
            <GridItem xs={12} sm={12}>
            <DropdownButton speciesChoice={speciesChoice} timeChoice={timeChoice} handleSubmit={(species,time)=>handleSubmit(species,time)} ></DropdownButton>
            <TableList Header={header} Name={name} Data={bill} ></TableList>
        </GridItem>
      </GridContainer>
         </div>   
        );
        
}

