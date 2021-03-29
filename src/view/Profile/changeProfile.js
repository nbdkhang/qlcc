import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../component/Grid/GridItem.js";
import GridContainer from "../../component/Grid/GridContainer.js";

import Button from "../../component/CustomButtons/Button.js";
import { checkUser } from "./serviceProfile.js";
import TextField from "@material-ui/core/TextField";
import { addUser,deleteUser } from "../../redux/action/userAction";




const useStyles = makeStyles((theme) => ({
    cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
    },
  }));
export default function ChangeProfile() {
  const dispatch=useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const userInfo = useSelector((state) => state.user.info);
  const token = userInfo[0].token;
  const [name, setName] = useState(userInfo[0].infoUser.name);
  const [phone, setPhone] = useState(userInfo[0].infoUser.phone);
  const [email, setEmail] = useState(userInfo[0].infoUser.email);
  const [cmnd, setCmnd] = useState(userInfo[0].infoUser.identify_card);
  const [address, setAddress] = useState(userInfo[0].infoUser.native_place);

  
  const handleSubmit = async () => {
    if (checkUser) {
      const body = {
        user_id: userInfo[0].infoUser.id,
        name: name,
        phone: phone,
        email: email,
        identify_card: cmnd,
        native_place: address,
      };
      console.log(body);
      try {
        const res = await fetch(
          process.env.REACT_APP_API_LINK + `/api/auth/update-info`,
          {
            method: "PUT",
            mode: "cors",
            headers: {
              Authorization: "Bearer " + `${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        if (res.status === 200) {
          const result = await res.json();
          
          
          // push in redux
          // const newInfo = result;
          // let action = addUser(newInfo);
          // await dispatch(action);
          // // delete in redux
          // action= deleteUser(0);
          // await dispatch(action);
          console.log("success");
          console.log(result);
        } else if (res.status === 500) {
        } else console.log("SOMETHING WENT WRONG");
      } catch (err) {
        console.log(err);
      }
    } else {
      setContent("Thay đổi không thành công");
      setOpen(true);
    }
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          {/* <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Thông tin cá nhân</h4>
            </CardHeader> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <TextField
                id="name"
                label="Họ và tên"
                //style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
            <TextField
                id="email"
                label="Email"
                //style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
            <TextField
                id="phone"
                label="Số điên thoại"
                //style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
            <TextField
                id="cmnd"
                label="Số CMND"
                //style={{ margin: 8 }}         
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={cmnd}
                onChange={(e) => setCmnd(e.target.value)}
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
            <TextField
                id="address"
                label="Quê quán"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </GridItem>

            
          </GridContainer>

          <Button color="primary" onClick={(e) => handleSubmit(e)}>
            Lưu lại
          </Button>
        </GridItem>
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </GridContainer>
    </div>
  );
}
