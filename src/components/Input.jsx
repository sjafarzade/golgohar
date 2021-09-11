import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiInputLabel-formControl": {
      right: 0,
      left: "unset",
    },
    "& .MuiInputBase-input": {
      direction: "rtl",
    },
    "& .MuiInputLabel-shrink": { transformOrigin: "top right" },
  },
}));

// export interface Input {
//   id?: string;
//   label?: string;
//   defaultValue?: string;
//   helperText?: string;
// }

export default function FormPropsTextFields(props) {
  //props: Input
  const classes = useStyles();
  const {
    id = "",
    label = "label",
    defaultValue = "",
    helperText = "",
    type = "text",
  } = props;

  return (
    <TextField
      id={id}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      type={type}
      classes={{
        root: classes.root,
      }}
    />
    // <form className={classes.root} noValidate autoComplete="off">
    //     </form>
  );
}
