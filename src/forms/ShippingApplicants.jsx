import React from "react";
import TextField from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  parentGridRoot: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
      width: "100%",
    },
  },
  // margin_left: { margin: "10px 0" },
  // margin_right: { margin: "10px 50px" },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#000",
  },
}));

const columns = [
  { field: "id", title: "ردیف", width: 150 },
  {
    field: "location",
    title: " محل ارسال/دریافت",
    width: 200,
  },
  {
    field: "city",
    title: "شهر محل سکونت",
    width: 160,
  },
  {
    field: "door",
    title: "شماره درب",
    width: 150,
    type: "numeric",
  },
  {
    field: "WeighbridgeCount",
    title: "تعداد باسکول",
    width: 160,
    type: "numeric",
  },
  {
    field: "LoadingCapacity",
    title: "ظرفیت بارگیری در شبانه روز",
    width: 160,
    type: "numeric",
  },
  {
    field: "DischargeCapacity",
    title: "ظرفیت تخلیه باردر شبانه روز",
    width: 160,
    type: "numeric",
  },
  {
    field: "LoadingAverageTime",
    title: "متوسط زمان بارگیری بدقیقه",
    width: 160,
    type: "numeric",
  },
  {
    field: "DischargeAverageTime",
    title: "متوسط زمان تخلیه بدقیقه",
    width: 160,
    type: "numeric",
  },
  {
    field: "StartWork",
    title: "ساعت شروع بکار",
    width: 160,
    type: "time",
  },
  {
    field: "StopWork",
    title: "ساعت پایان کار",
    width: 160,
    type: "time",
  },
];

const rows = [
  {
    id: 1,
    location: "منطقه صنعتی ",
    city: "سیرجان",
    door: "1",
    WeighbridgeCount: "2",
    LoadingCapacity: "100",
    DischargeCapacity: "200",
    LoadingAverageTime: "15",
    DischargeAverageTime: "12",
    StartWork: "00:00",
    StopWork: "24:00",
  },
  {
    id: 2,
    location: "منطقه صنعتی ",
    city: "سیرجان",
    door: "1",
    WeighbridgeCount: "2",
    LoadingCapacity: "70",
    DischargeCapacity: "120",
    LoadingAverageTime: "15",
    DischargeAverageTime: "12",
    StartWork: "00:00",
    StopWork: "19:00",
  },
];

const ShippingApplicants = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid className={classes.margin_left} item xs={12} md>
          <div className={classes.parentGridRoot}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField
                  label="نام شرکت"
                  defaultValue="توسعه آهن و فولاد گل گهر"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField label="تلفن" defaultValue="12345678" />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  label="حداکثر زمان تایید بارنامه باز بدقیقه"
                  defaultValue="60"
                  type="numeric"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="کد اقتصادی" defaultValue="1111" />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField label="تلفن همراه" defaultValue="9121234567" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="آدرس" defaultValue="سیرجان" />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField label="ارسال کننده" defaultValue="9121234567" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="شهر" defaultValue="سیرجان،کرمان" />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField label="دریافت کننده" defaultValue="9121234567" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Table columns={columns} rows={rows} />
    </>
  );
};

export default ShippingApplicants;
