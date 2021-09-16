import React from "react";
import TextField from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  parentGridRoot: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  margin_left: { margin: "10px 0" },
  margin_right: { margin: "10px 50px" },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#000",
  },
}));

const columns = [
  {
    field: "NeedDate",
    title: "تاریخ نیاز",
    width: 200,
    type: "date",
  },
  {
    field: "ReceiverCompany",
    title: "شرکت گیرنده",
    width: 160,
  },
  {
    field: "SendLocation",
    title: "محل ارسال",
    width: 150,
  },
  {
    field: "CountCarNeed",
    title: "تعداد خودرو مورد نیاز",
    width: 160,
    type: "number",
  },
  {
    field: "TotalWeight",
    title: "وزن کل(تن)",
    width: 160,
    type: "number",
  },
  {
    field: "LoadingLocation",
    title: "محل بارگیری",
    width: 160,
  },
  {
    field: "StartLoadingTime",
    title: "زمان شروع بارگیری",
    width: 160,
    type: "time",
  },
  {
    field: "StopLoadingTime",
    title: "زمان اتمام بارگیری",
    width: 160,
    type: "time",
  },
  {
    field: "CountCarAllocate",
    title: "تعداد خودرواختصاص یافته",
    width: 160,
    type: "number",
  },
];

const rows = [
  {
    NeedDate: "1400/05/02",
    ReceiverCompany: "فولاد مبارکه",
    SendLocation: "اصفهان -قولاد مبارکه-درب 3",
    CountCarNeed: 40,
    TotalWeight: 1000,
    LoadingLocation: "درب 2",
    StartLoadingTime: "00:00:00",
    StopLoadingTime: "24:00:00",
    CountCarAllocate: 28,
  },
  {
    NeedDate: "1400/05/02",
    ReceiverCompany: "فولاد اهواز",
    SendLocation: "اهواز-فولاد اهواز-درب 1",
    CountCarNeed: 20,
    TotalWeight: 500,
    LoadingLocation: "درب 1",
    StartLoadingTime: "",
    StopLoadingTime: "",
    CountCarAllocate: 15,
  },
  {
    NeedDate: "1400/05/03",
    ReceiverCompany: "فولاد مبارکه",
    SendLocation: "اصفهان -قولاد مبارکه-درب 3",
    CountCarNeed: 40,
    TotalWeight: 1000,
    LoadingLocation: "درب 2",
    StartLoadingTime: "00:00:00",
    StopLoadingTime: "24:00:00",
    CountCarAllocate: 0,
  },
  {
    NeedDate: "1400/05/03",
    ReceiverCompany: "فولاد اهواز",
    SendLocation: "اهواز-فولاد اهواز-درب 1",
    CountCarNeed: 20,
    TotalWeight: 500,
    LoadingLocation: "درب 1",
    StartLoadingTime: "",
    StopLoadingTime: "",
    CountCarAllocate: 0,
  },
];

const CargoCompanies = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid className={classes.margin_left} item xs={12} md>
          <div className={classes.parentGridRoot}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField label="عنوان" defaultValue="گهر ترابر" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField label="کد اقتصادی" defaultValue="1111" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField label="آدرس" defaultValue="سیرجان" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField
                  label="شهرهای تحت پوشش"
                  defaultValue="سیرجان،کرمان"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                {" "}
                <TextField label="تلفن" defaultValue="12345678" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField label="تلفن همراه" defaultValue="9121234567" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Table columns={columns} rows={rows} />
    </>
  );
};

export default CargoCompanies;
