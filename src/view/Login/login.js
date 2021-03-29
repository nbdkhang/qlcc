import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import { addUser } from "../../redux/action/userAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const usernameCheck = /^[a-zA-Z0-9]+$/;
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitUser = async () => {
    //console.log("add");
    sendUser();
  };
  const checkUser = (username, password) => {
    //console.log(username);
    //console.log(password);

    if (username === "" || !username.match(usernameCheck)) {
      //console.log("check1");
      setContent("Tên đăng nhập rỗng hoặc có kí tự đặc biệt");
      return false;
    }
    if (password === "") {
      //console.log("check2");
      setContent("Mật khẩu rỗng");
      return false;
    }
    return true;
  };
  const sendUser = async () => {
    try {
      if (!checkUser(username, password)) {
        // check format
        setOpen(true);
        return false;
      }

      const body = {
        username: username,
        password: password,
      };
      console.log(body);
      // const res = await fetch(url + `users/signup`, {
      const res = await fetch(
        process.env.REACT_APP_API_LINK + `/api/auth/login`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );


      if (res.status === 200) {
        const result = await res.json();
        setContent("Đăng nhập thành công ");
        setOpen(true);
        // push to redux
        console.log("success");
        console.log(result);
        const newInfo = result;
        const action = addUser(newInfo);
        dispatch(action);

        history.push("/");
      } else if (res.status === 401) {
        setContent("Tên đăng nhập hoặc mật khẩu sai");
        setOpen(true);
      } else console.log("SOMETHING WENT WRONG");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitUser}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={content}
        key={1}
      />
    </Container>
  );
}
