import React from "react";
import Table from "../components/Table.jsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../App.css";

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

const openReqCol = [
  {
    field: "NeedDate",
    title: "تاریخ نیاز",
    width: 200,
    type: "date",
  },
  {
    field: "Origin",
    title: "مبدا",
    // width: 160,
  },
  {
    field: "Destination",
    title: "مقصد",
    // width: 160,
  },
  {
    field: "NeedCount",
    title: "تعداد مورد نیاز",
    width: 100,
    type: "numeric",
  },
  {
    field: "OpenRequestCount",
    title: "تعداد درخواست باز",
    // width: 160,
    type: "numeric",
  },
];
const openReqRows = [
  {
    NeedDate: "1400/05/02",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "فولاد مبارکه",
    NeedCount: 40,
    OpenRequestCount: 12,
  },
  {
    NeedDate: "1400/05/02",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "اهواز-فولاد اهواز-درب 1",
    NeedCount: 20,
    OpenRequestCount: 5,
  },
  {
    NeedDate: "1400/05/03",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "فولاد مبارکه",
    NeedCount: 40,
    OpenRequestCount: 40,
  },
  {
    NeedDate: "1400/05/03",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "اهواز-فولاد اهواز-درب 1",
    NeedCount: 20,
    OpenRequestCount: 20,
  },
];

const freeDriverCol = [
  {
    field: "NationalCode",
    title: "کدملی",
    // width: 200,
    type: "numeric",
  },
  {
    field: "FullName",
    title: "نام و نام خانوادگی",
    // width: 200,
  },
  {
    field: "PlaqueCar",
    title: "پلاک خودرو",
    // width: 200,
  },
  {
    field: "Status",
    title: "وضعیت",
    // width: 200,
    type: "boolean",
  },
  {
    field: "NumberPerMonth",
    title: "تعداد بار طی ماه",
    // width: 200,
    type: "numeric",
  },
  {
    field: "NumberCancelPerMonth",
    title: "تعداد کنسلی",
    // width: 200,
    type: "numeric",
  },
  {
    field: "LastTransportDate",
    title: "آخرین تاریخ حمل",
    // width: 200,
    type: "date",
  },
];
const freeDriverRows = [
  {
    NationalCode: 112233445566,
    FullName: "علی رحمتی",
    PlaqueCar: "541654",
    Status: "آزاد",
    NumberPerMonth: 15,
    NumberCancelPerMonth: 1,
    LastTransportDate: "",
  },
  {
    NationalCode: 223334468451,
    FullName: "حسین عزتی",
    PlaqueCar: "56464",
    Status: "آزاد",
    NumberPerMonth: 10,
    NumberCancelPerMonth: 12,
    LastTransportDate: "",
  },
];

const delicatedCarCol = [
  {
    field: "TemporarySerial",
    title: "سریال موقت بارنامه",
    width: 200,
    type: "numeric",
  },
  {
    field: "NationalCode",
    title: "کدملی",
    width: 200,
    type: "numeric",
  },
  {
    field: "FullName",
    title: "نام و نام خانوادگی",
    width: 200,
  },
  {
    field: "CarPelaque",
    title: "پلاک خودرو",
    width: 200,
  },
  {
    field: "DefinitiveSerial",
    title: "سریال قطعی بارنامه",
    width: 200,
    type: "numeric",
  },
  {
    field: "Status",
    title: "وضعیت",
    width: 160,
    lookup: {
      20: "ارسال پیشنهاد حمل",
      21: "اخذ بارنامه",
      22: "بارنامه قطعی",
      23: "در حال بارگیری",
      24: "در حال سفر",
      25: "اتمام سفر",
    },
  },
];
const delicatedCarRows = [
  {
    TemporarySerial: 123,
    NationalCode: 54646464,
    FullName: "حسن توحیدی",
    CarPelaque: "54654",
    DefinitiveSerial: 87,
    Status: 23,
  },
  {
    TemporarySerial: 124,
    NationalCode: 45456546,
    FullName: "پیمان اصغری",
    CarPelaque: "879846",
    DefinitiveSerial: null,
    Status: 20,
  },
];

const CarAssignmentPanel = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container id={"test"}>
        {/* <Grid className={classes.margin_left} item xs={12} md>
          <div className={classes.parentGridRoot}> */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Table
              columns={openReqCol}
              rows={openReqRows}
              // header={false}
              search={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Table
              columns={freeDriverCol}
              rows={freeDriverRows}
              // header={false}
              search={false}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Table
              columns={delicatedCarCol}
              rows={delicatedCarRows}
              // header={false}
              search={false}
            />
          </Grid>
        </Grid>
        {/* </div>
        </Grid> */}
      </Grid>
    </>
  );
};

export default CarAssignmentPanel;
