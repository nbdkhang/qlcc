import React,{useEffect} from "react";
import {useSelector} from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../component/Grid/GridItem.js";
import GridContainer from "../../component/Grid/GridContainer.js";
import CustomInput from "../../component/CustomInput/CustomInput.js";
import Button from "../../component/CustomButtons/Button.js";
import Card from "../../component/Card/Card.js";
import CardHeader from "../../component/Card/CardHeader.js";
import CardBody from "../../component/Card/CardBody.js";
import CardFooter from "../../component/Card/CardFooter.js";

import avatar from "../../asset/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function ChangePassword() {
  const classes = useStyles();
  const userInfo=useSelector(state=>state.user.info);
  const token=userInfo[0].token;

  const handleSubmit =()=>
  {
    // const body ={
    //   ID_User:localStorage.getItem('id'),
    //   Name:data
    // }
    // const token=JSON.parse(localStorage.getItem('token'));
    
    // const res =await fetch(linkurl+`boards/add`,
    // {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //      Authorization:'Bearer '+ `${token}`,
    //      'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(body)
    
    // });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Mật khẩu cũ"
                    id="old_password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Mật khẩu mới"
                    id="new_password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
               
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Xác nhận mật khẩu mới"
                    id="confirm_password"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                
                
              </GridContainer>
            
          
              <Button color="primary" onClick={e=>handleSubmit(e)}>Lưu lại</Button>
           
          
        </GridItem>
        
      </GridContainer>
    </div>
  );
}