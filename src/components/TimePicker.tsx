import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      // container: {
      //   display: "flex",
      //   flexWrap: "wrap",
      // },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    })
  // ({
  //   root: {
  //     "& .MuiTextField-root": {
  //       margin: theme.spacing(1),
  //       width: "25ch",
  //     },
  //     "& .MuiInputLabel-formControl": {
  //       right: 0,
  //       left: "unset",
  //     },
  //     "& .MuiInputBase-input": {
  //       direction: "rtl",
  //     },
  //     "& .MuiInputLabel-shrink": { transformOrigin: "top right" },
  //   },
  // })
);

export default function TimePickers() {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        // classes={{
        //   root: classes.root,
        // }}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </>
  );
}
