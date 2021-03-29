import React, {  useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
//import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "../CustomButtons/Button.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  myButton: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [species, setSpecies] = useState(null);
  const [time, setTime] = useState(null);
  const {speciesChoice,timeChoice,handleSubmit}=props;
  
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  const handleChangeSpecies = (event) => {
    setSpecies(event.target.value); 
  };

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={e=>handleChangeSpecies(e)}
          name="Species"
          className={classes.selectEmpty}
          // inputProps={{ 'aria-label': 'age' }}
        >
          {speciesChoice.map((prop) => {
            return <option key={prop.id}>{prop.name}</option>;
          })}
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={e=>handleChangeTime(e)}
          name="Time"
          className={classes.selectEmpty}
          // inputProps={{ "aria-label": "age" }}
        >
          {timeChoice.map((prop) => {
            return <option key={prop.id}>{prop.name}</option>;
          })}
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={e=>handleChangeTime(e)}
          name="Time"
          className={classes.selectEmpty}
          // inputProps={{ "aria-label": "age" }}
        >
          {/* {timeChoice.map((prop) => {
            return <option key={prop.id}>{prop.name}</option>;
          })} */}
          <option>E305</option>
        </NativeSelect>
      </FormControl>

      <Button  className={classes.myButton} onClick={e=>handleSubmit(species,time)} color="info" >Lọc</Button>
    </div>
  );
}
