import React,{useEffect} from "react";
import {useSelector} from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../component/Grid/GridItem.js";
import GridContainer from "../../component/Grid/GridContainer.js";
import Button from "../../component/CustomButtons/Button.js";
import Card from "../../component/Card/Card.js";
import CardAvatar from "../../component/Card/CardAvatar.js";
import CardBody from "../../component/Card/CardBody.js";
import Tasks from "../../component/Tasks/Tasks.js";
import CustomTabs from "../../component/CustomTabs/CustomTabs.js";
import ChangeProfile from "./changeProfile.js"
import ChangePassword from "./changePassword"

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

export default function UserProfile() {
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
      <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
             
              <Button color="primary" >
                Thay đổi ảnh đại diện
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
        <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Thay đổi thông tin cá nhân",
                //tabIcon: BugReport,
                tabContent: (      
                    <ChangeProfile/>
                )
              },
              {
                tabName: "Đổi mật khẩu",
                //tabIcon: Code,
                tabContent: (
                  <ChangePassword/>
                )
              },
              
            ]}
          />
        </GridItem>
       
      </GridContainer>
    </div>
  );
}